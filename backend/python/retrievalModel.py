
from langchain_community.vectorstores import DocArrayInMemorySearch
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.chat_models import ChatCohere
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders import UnstructuredWordDocumentLoader

import json
import sys
import os
from langchain_community.embeddings import CohereEmbeddings

COHERE_API_KEY = '0Luj5pPG0qr5smcMdNravruypYYGwjs45LvQmJCo'
os.environ["COHERE_API_KEY"] = COHERE_API_KEY


texto = sys.argv[1]
datos = json.loads(texto)
query = datos['query']


#Cargamos los documentos del directorio  word or Pdf
loaders = UnstructuredWordDocumentLoader("C:/Users/Itamar/Desktop/Itic docker/Proyecte-Itic-web/backend/python/texto.docx")
content = loaders.load()

#Separamos en trozos los documentos 
text_splitter= RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
chunking = text_splitter.split_documents(content)

#Defenimos el modelo del lenguaje y el sistema de embeddings
embeddings = CohereEmbeddings()

#Generamos el vector embedido con los documentos
db = DocArrayInMemorySearch.from_documents(
    chunking, 
    embeddings
)

retriever = db.as_retriever()

template = """Answer the question based only on the following context:
        {context}
**0. Provide an answer solely based on the provided documents.**

**1. Respond in the manner of a seasoned Policy maker user, referencing only the documents at hand.**

**2. Avoid searching for information online.**

**3. Responses must be in English.**

**4.Strive for complete answers, Give me answers in a single paragraph of seven lines maximum.**

**5. Refrain from assuming definitions or concepts that are not explicitly outlined in the documents.**
   
Question: {question}
"""
prompt = ChatPromptTemplate.from_template(template)
model = ChatCohere(temperature= 0)
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
