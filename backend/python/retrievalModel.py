
from langchain_community.vectorstores import DocArrayInMemorySearch
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import DirectoryLoader
from langchain_community.document_loaders import UnstructuredWordDocumentLoader
from langchain_openai import ChatOpenAI
from langchain_openai import OpenAIEmbeddings
import json
import sys
import os
# OPENAI_API_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxx
# os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

texto = sys.argv[1]
datos = json.loads(texto)
query = datos['query']

dir = "."
loaders = DirectoryLoader(dir,glob="**/*.docx", loader_cls=UnstructuredWordDocumentLoader)
content = loaders.load()

#Separamos en trozos los documentos 
text_splitter= RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
chunking = text_splitter.split_documents(content)


embeddings = OpenAIEmbeddings()

#Generamos el vector embedido con los documentos
db = DocArrayInMemorySearch.from_documents(
    chunking, 
    embeddings
)

retriever = db.as_retriever()

template = """
Respon a la pregunta basant-te únicament en el context següent:
        {context}
**1. Respon en el estil d'un usuari experimentat en polítiques, fent referència només als documents disponibles.**

**2.Evita buscar informació en línia.**

**3. Les respostes han de ser en Catala o Español.**

**4. Esforça't per donar respostes completes, proporciona les respostes en un únic paràgraf de set línies com a màxim.**

5. Evita assumir definicions o conceptes que no estiguin explícitament delineats en els documents.**

Pregunta: {question}
"""
prompt = ChatPromptTemplate.from_template(template)
#model = ChatCohere(temperature= 0)
model = ChatOpenAI(model='gpt-4-turbo', temperature= 0.11)
output_parser = StrOutputParser()

setup_and_retrieval = RunnableParallel(
    {"context": retriever, "question": RunnablePassthrough()}
)
chain = setup_and_retrieval | prompt | model | output_parser


def _main():
    response = chain.invoke(query)
    print(response)

    
if __name__ == "__main__":
    _main()
