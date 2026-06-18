import streamlit as st
import chromadb

# Checkpoint 1: Initialize Chroma client and collection
client = chromadb.PersistentClient('./mycollection')

# Checkpoint 2: Update previous titles and markdown text
collection = client.get_or_create_collection(name='RAG_Assistant', metadata={'hnsw:space':'cosine'})
st.title("RAG for anthropology")
st.markdown("This app uses Chroma to perform similarity searches on a collection of documents.")
st.sidebar.title("|||")
st.sidebar.markdown("Adjust the settings for your query.")

#Checkpoint 3
#a: Add input text widget for user question
user_question = st.text_area('Question here')

#b: Add number of results to the sidebar
n_results = st.sidebar.number_input("Number of results", min_value = 1, max_value = 10, value=1)



# Checkpoint 4: Create a button that triggers the action of querying the Chroma Collection
if st.button("Get Answers"):
    st.write(f"Question: {user_question}")
    st.write(f"Number of Results: {n_results}")

    results = collection.query(query_texts=[user_question], n_results = n_results)

    



    # Checkpoint 5: Access output from `results`
    if results and 'documents' in results:
      st.markdown('The Matching documents: ')
      for sub_list in results["documents"]:
        for doc in sub_list:
          st.write(doc)
          st.markdown("-----")


    #before showing it in text, just dump out the raw json, ie
    #st.json(results)