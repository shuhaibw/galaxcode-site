
# Galaxcode 

## Table of Contents

+ [Overview](#overview)
  
+ [Technical Architecture](#technical) <br>
  &nbsp;&#9702; [Galaxcode Backend Architecture](#galaxcode-backend) <br>
  &nbsp;&#9702; [Chatbot's Response Process](#chatbot-response) <br>
   
+ [Directory Structure](#directory) <br> 
   
    &nbsp;&#9702; [chatbot-back](#chatbot) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/Backend](#backend-1) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/Labs](#labs) <br> <br>
    &nbsp;&#9702;[Turtle Backend](#turtle) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/Backend](#backend-2) <br>
    <br> &nbsp;&#9702;[Frontend](#frontend)  <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/pages](#pages) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/components](#components) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/models](#models) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/utils](#utils) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/styles](#styles) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[/public](#public-3) <br>
      

+ [Demos](#demos) <br>
   &nbsp;&#9702; [Chatbot demo](#chatbot-demo) <br> 
   &nbsp;&#9702; [Drawing Canvas Demo](#canvas-demo) <br> <br>

+ [Application Status](#app-status)
  
+ [Running the Application](#running-app)

<h2 id="overview">Overview</h2>
Galaxcode transforms coding education into an interstellar adventure for ages 9-16. Powered by Azure AI, including GPT-3.5 and Azure Translator, our platform uses Python Turtle Graphics to let kids command a spaceship, drawing planetary designs while learning fundamental coding concepts. With lessons in 40+ languages and a chatbot offering hints and answers, Galaxcode makes mastering code a journey through the stars.

<h2 id="technical">Technical Architecture</h2>

Galaxcode leverages React and Next.js for a dynamic front-end, with FastAPI powering the chatbot and drawing canvas. Azure Cosmos DB and Azure OpenAI collaborate to drive the intelligent chatbot, while MongoDB handles secure login and signup processes. Docker Desktop Containers streamline development before deployment to Azure Container Apps. This architecture is optimized for performance and scalability, ensuring a smooth user experience.

<img src="https://github.com/user-attachments/assets/8f1ce220-ba4a-438f-8858-2d9c8d8475f1" alt="diagram" width="300" height="780"/>
<br>

<h3 id="galaxcode-backend">Galaxcode Backend Architecture</h3> 

The application is hosted within **Microsoft Azure Container Apps**, with the frontend managing interactions through three key API routes:

1. **Drawing Canvas - `/api/canvasapi.ts`**: User drawings are sent here and processed by the Turtle Backend, which runs as a Docker container within Azure Container Apps. The resulting image is then returned to the frontend.

2. **Chatbot - `/api/api`**: User prompts are sent to this route and processed by the Chatbot Backend, also deployed as a Docker container within Azure Container Apps. It retrieves context from Azure Cosmos DB and sends the generated response back to the frontend.

3. **AI Translation - `/api/translate`**: Text for translation is sent to this route, processed by the AI Translator Service (Azure), and the translated text is returned to the frontend.

   
<img width="500" alt="Screenshot 2024-08-11 at 5 45 42 PM" src="https://github.com/user-attachments/assets/968c43c7-ae2b-4990-bfbf-57db6dda8d88">



<h3 id="chatbot-response">Chatbot's Response Process </h3> 

The chatbot is connected to an Azure Cosmos DB database through a connection string, allowing it to retrieve information when needed. The response process involves three main steps: Embedding, Vector Search, and LangChain RAG (Retrieval-Augmented Generation). These steps ensure the chatbot provides relevant and useful answers to user queries.

#### 1. **Embedding**

Data from different sources like text and images is turned into numerical representations (vectors) by an embedding model. These vectors are stored in a database (e.g., Azure Cosmos DB) for quick access during user interactions.

*Diagram 1*: "Embedding Process" shows how data is converted into vectors and stored.

<img width="800" height="450" alt="Screenshot 2024-08-10 at 8 07 42 PM" src="https://github.com/user-attachments/assets/ed2d008d-6404-41ac-8e70-038b57dfe759">


#### 2. **Vector Search**

When a user sends a message:

- The message is converted into a vector.
- This vector is compared with stored vectors to find the most relevant information.
- The retrieved information is used to create a prompt for the language model (LLM).

*Diagram 2*: "Vector Search" illustrates how the system finds relevant information for the LLM.

<img width="800" height="450" alt="Screenshot 2024-08-10 at 8 08 05 PM" src="https://github.com/user-attachments/assets/bf8e79f0-35e3-4ccc-a821-581fb31ac8b3">


#### 3. **LangChain RAG**

The LangChain RAG system uses the retrieved information to create a response:

- The relevant information is given to the LLM.
- The LLM generates a response, which is then sent back to the user.

*Diagram 3*: "LangChain RAG" outlines how information is retrieved and used to generate the chatbot's response.

<img width="800" height="450" alt="Screenshot 2024-08-10 at 8 08 25 PM" src="https://github.com/user-attachments/assets/9c0b91d2-9725-4720-bd4d-15bf68907298">

<h2 id="directory">Directory Structure</h2>
<h3 id="chatbot">Chatbot Backend</h3>
<h3 id="turtle">Turtle Backend</h3>
<h3 id="frontend">Frontend</h3>


<h2 id="demos">Demos</h2> 

<h3 id="chatbot-demo">Chatbot Demo</h3> 


https://github.com/user-attachments/assets/b40d32e4-5254-4471-87e3-50ac98ccb727


<br> <h3 id="canvas-demo">Drawing Canvas Demo</h3> 


https://github.com/user-attachments/assets/8b7fa04c-feea-487e-9e95-98cea7e23c4a

<h2 id="app-status"> Application Status </h2> 

This project was initially hosted on Azure Container Apps. During that time, both the chatbot and drawing canvas features were fully operational. However, due to the expiration of my Azure credits, these specific features are temporarily unavailable as they were hosted on Azure.

The rest of the website remains live and accessible at <code>galaxcode.vercel.app </code> I’m exploring alternative hosting solutions to bring these features back online in the near future. 

<h2 id="running-app">Running the Application</h2> 

This is a Next.js project bootstrapped with `create-next-app`.

First, install the dependencies:

<pre><code>npm install
# or <br>
yarn install
# or <br>
pnpm install
# or <br>
bun install
</code></pre>

<p>Then, run the development server:</p>
<pre><code>npm run dev
# or <br>
yarn dev
# or <br>
pnpm dev
# or <br>
bun dev
</code></pre>

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.










