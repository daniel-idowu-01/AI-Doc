**Install the Libaries**

!pip install pypdf
!pip install -q python-dotenv

!pip install -q transformers einops accelerate langchain bitsandbytes

!pip install sentence_transformers

!pip install llama-index

**Configure logging and Importing the libaries**

import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

from llama_index import VectorStoreIndex, SimpleDirectoryReader, ServiceContext
from llama_index.llms import HuggingFaceLLM
from langchain.document_loaders import PyPDFLoader


**Mount Google Drive to access data (you may need to authenticate)**

from google.colab import drive
drive.mount('/content/drive')

**Reading the data from the saved path in google drive**

documents = SimpleDirectoryReader("/content/drive/MyDrive/Data").load_data()

from langchain.text_splitter import CharacterTextSplitter
from langchain import OpenAI
from langchain.document_loaders import PyPDFLoader

**Define a system prompt for the Q&A assistant**



from llama_index.prompts.prompts import SimpleInputPrompt


system_prompt =  "You are a medical chatbot designed to provide general medical information and guidance to patients. You are not a substitute for a licensed healthcare professional. Please always consult with a doctor or other qualified healthcare provider for any medical concerns. Here are some specific examples of how you can be helpful: Answer general medical questions about symptoms, conditions, and treatments, Provide information on healthy lifestyle habits and preventive care, Help patients find reliable medical resources and support groups, Offer emotional support and reassurance to patients facing medical challenges. Please keep in mind the following: Always direct patients to seek professional medical attention, Use clear and concise language that is easy for patients to understand. Be respectful and sensitive to patients individual needs and concerns.I am confident that you can be a valuable tool for patients seeking medical information and guidance. Thank you for your dedication to helping others."



# This will wrap the default prompts that are internal to llama-index
query_wrapper_prompt = SimpleInputPrompt("<|USER|>{query_str}<|ASSISTANT|>")

**Log in to Hugging Face**

#!huggingface-cli login

**Configure the HuggingFaceLLM (Language Model)**

import torch

llm = HuggingFaceLLM(
    context_window=4096,
    max_new_tokens=256,
    generate_kwargs={"temperature": 0.5, "do_sample": False},
    system_prompt=system_prompt,
    query_wrapper_prompt=query_wrapper_prompt,
    tokenizer_name="NousResearch/Llama-2-7b-chat-hf",
    model_name="NousResearch/Llama-2-7b-chat-hf",
    device_map="auto",
    # uncomment this if using CUDA to reduce memory usage
    model_kwargs={"torch_dtype": torch.float16 , "load_in_8bit":True})

**Configure embeddings using Hugging Face model**

from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from llama_index.embeddings.langchain import LangchainEmbedding
from llama_index import ServiceContext

embed_model = LangchainEmbedding(
  HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
)


**Configure the service context**

service_context = ServiceContext.from_defaults(
    chunk_size=1024,
    llm=llm,
    embed_model=embed_model
)

**Create a vector store index from the loaded documents**

index = VectorStoreIndex.from_documents(documents, service_context=service_context)

**Create a query engine for the index**

query_engine = index.as_query_engine()
response = query_engine.query("What  are several common symptoms of cataracts?")

print(response)

**To interact with the chatbot**

while True:
  query=input()
  response = query_engine.query(query)
  print(response)
