import sys
from langchain_openai import ChatOpenAI
import json
import os
from langchain_community.vectorstores import DocArrayInMemorySearch
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders import UnstructuredWordDocumentLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.chat_models import ChatCohere

import os
from langchain_community.embeddings import CohereEmbeddings

def _main():
    COHERE_API_KEY = '0Luj5pPG0qr5smcMdNravruypYYGwjs45LvQmJCo'
    os.environ["COHERE_API_KEY"] = COHERE_API_KEY


    texto = sys.argv[1]
    datos = json.loads(texto)

    try:
        # Obtener el directorio base
        base_directory = os.path.dirname(os.path.abspath(__file__))

        # Construir la ruta absoluta al directorio de archivos
        # files_directory = os.path.join(base_directory, 'files')


        #Cargamos los documentos del directorio
        loaders = DirectoryLoader('.', glob="*.docx", loader_cls=UnstructuredWordDocumentLoader)
        content = loaders.load()
    

        #Separamos en trozos los documentos 
        text_splitter= RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
        chunking = text_splitter.split_documents(content)

        #Defenimos el modelo del lenguaje y el sistema de embeddings
        embeddings = CohereEmbeddings(cohere_api_key=COHERE_API_KEY)
    
        #Generamos el vector embedido con los documentos
        db = DocArrayInMemorySearch.from_documents(
            chunking, 
            embeddings
        )
        retriever = db.as_retriever()

        template = """Answer the question based only on the following context:
                {context}
        **0. Provide an answer solely based on the provided documents.**

        **1. Respond in the manner of a seasoned Policy Maker user, referencing only the documents at hand.**

        **2. Avoid searching for information online.**

        **3. Responses must be in English.**

        **4. Strive for comprehensive answers, maximum of about seven lines in length**

        **5. Refrain from assuming definitions or concepts that are not explicitly outlined in the documents.**
        
        Question: {question}
        """
        prompt = ChatPromptTemplate.from_template(template)
        model = ChatOpenAI(model_name="gpt-3.5-turbo", temperature = 0.0)
        output_parser = StrOutputParser()

        setup_and_retrieval = RunnableParallel(
            {"context": retriever, "question": RunnablePassthrough()}
        )
        chain = setup_and_retrieval | prompt | model | output_parser

        response = chain.invoke(datos['texto'])
        print(response)
        
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)    
    
if __name__ == "__main__":
    _main()
