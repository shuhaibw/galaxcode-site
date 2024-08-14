
# Galaxcode 

## Table of Contents

+ [Overview](#overview)

+ [Application Status](#app-status)
  
+ [Technical Architecture](#technical) <br>
  &nbsp;&#9702; [Galaxcode Backend Architecture](#galaxcode-backend) <br>
  &nbsp;&#9702; [Chatbot's Response Process](#chatbot-response) <br>
   
+ [Directory Structure](#directory) <br> 
   
    &nbsp;&#9702; [chatbot-back](#chatbot) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Backend/](#backend-1) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Labs/](#labs) <br> <br>
    &nbsp;&#9702;[Turtle-Backend](#turtle) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[public/](#public-2) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[app.py](#app-py) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Dockerfile](#the-dockerfile) <br>
    <br> &nbsp;&#9702;[Frontend](#frontend)  <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[pages/](#pages) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[components/](#components) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[models/](#models) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[utils/](#utils) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[styles/](#styles) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[public/](#public-3) <br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[pages/api/](#api) <br>
      

+ [Demos](#demos) <br>
   &nbsp;&#9702; [Chatbot demo](#chatbot-demo) <br> 
   &nbsp;&#9702; [Drawing Canvas Demo](#canvas-demo) <br> <br>

  
+ [Running the Application](#running-app)

<h2 id="overview">Overview</h2>
Galaxcode transforms coding education into an interstellar adventure for ages 9-16. Powered by Azure AI, including GPT-3.5 and Azure Translator, our platform uses Python Turtle Graphics to let kids command a spaceship, drawing planetary designs while learning fundamental coding concepts. With lessons in 40+ languages and a chatbot offering hints and answers, Galaxcode makes mastering code a journey through the stars.

<h2 id="app-status"> Application Status </h2> 

This project was initially hosted on Azure Container Apps. During that time, both the chatbot and drawing canvas features were fully operational. However, due to the expiration of my Azure credits, these specific features are temporarily unavailable as they were hosted on Azure.

The rest of the website remains live and accessible at <code>galaxcode.vercel.app</code> I’m exploring alternative hosting solutions to bring these features back online in the near future. 

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

<h3 id="chatbot">chatbot-back</h3>

<h4 id="backend-1"><code>Backend/</code></h4> 
The `Backend/` directory contains essential components for the chatbot backend, configured for deployment in a Docker container. <br>

- **<code>Dockerfile</code>**: Prepares the chatbot backend for containerization, allowing it to be deployed in a Docker environment with all necessary dependencies and configurations.
- **<code>/api_models</code>**: Manages the session ID and incoming user prompts, enabling the AI agent to generate appropriate responses.
- **<code>cosmic_works/</code>**: Contains the file that defines the functionalities and capabilities of the chatbot, detailing its operations and interactions.
- **<code>app.py</code>**: Serves as the API entry point for the backend, handling requests and responses for the chatbot API.
- 
<h4 id="labs"><code>Labs/</code></h4> 
The `Labs/` directory contains various components related to experimental and deployment processes. <br>

- **<code>challenge.ipynb</code>**: Contains information about the challenges for the chatbot, which is loaded into the Cosmos DB database. This notebook is used for managing and integrating challenge data.
- **<code>deploy/</code>**: Houses initial Azure deployment configurations and scripts, facilitating the setup and management of deployments on Azure.
- **<code>models/</code>**: Includes some initial models that are not related to the current chatbot but may be used for other purposes or future developments.

<h3 id="turtle">Turtle-Backend</h3>

<h4 id="public-2"><code>public/</code></h4> 
The <code>public/</code> directory contains the images of rockets used in the drawing canvas. These images are utilized to enhance the visual experience, providing engaging and thematic content that complements the Python Turtle graphics functionality.

<h4 id="app-py"><code>app.py</code></h4> 
The <code>app.py</code> file serves as the backend for the drawing canvas, enabling kids to see the results of their Python Turtle graphics code in real time. It processes and manages the dynamic rendering of graphics, allowing for an interactive and engaging experience as users input their code and view the generated visuals instantly.

<h4 id="the-dockerfile"><code>Dockerfile</code></h4> 
This <code>Dockerfile</code> is designed to containerize the Turtle-Backend, preparing it for deployment to Azure Container Apps.

<h3 id="Frontend">Frontend</h3>

<h4 id="pages"><code>pages/</code></h4> 
This directory holds all <code>.tsx</code> files, with each file corresponding to a specific route in the Galaxcode application. Powered by Next.js, these pages utilize server-side rendering (SSR) to deliver dynamic content to users, ensuring fast and efficient page loads.

<h4 id="components"><code>components/</code></h4> 
Contains all React components used throughout the Galaxcode site. This directory is organized into subfolders based on the functionality of each component, making it easy to manage and reuse components across different pages. For example, it includes components used in the chatbot and other interactive features.

<h4 id="models"><code>models/</code></h4> 
In this directory, you will find the <code>userSchema</code> file, which defines the schema for user data in the MongoDB database. This schema is critical for managing user authentication and ensuring data consistency throughout the signup/login process.

<h4 id="utils"><code>utils/</code></h4> 
The <code>utils/</code> directory includes utility files like <code>db.js</code>, which handles the connection to your MongoDB database for the signup and login functionalities. By keeping this logic modular, it allows for better maintainability and separation of concerns within the application.

<h4 id="styles"><code>styles/</code></h4> 
Contains the global stylesheet, <code>globals.css</code>, which defines the overarching styles for the Galaxcode application. This file ensures consistency in the visual design across all pages and components by centralizing the styling rules.

<h4 id="public-3"><code>public/</code></h4> 
This directory houses all the images used across the Galaxcode site. These assets are organized here to ensure easy management and access for both the front-end components and any static content.

<h4 id="api"><code>pages/api/</code></h4> 
Located within the <code>pages/</code> directory, this folder contains all the Next.js API routes necessary for the Galaxcode application. These routes handle server-side logic and data fetching, enabling interactions between the front end and the back end of the application.

<h2 id="demos">Demos</h2> 

<h3 id="chatbot-demo">Chatbot Demo</h3> 


https://github.com/user-attachments/assets/b40d32e4-5254-4471-87e3-50ac98ccb727


<br> <h3 id="canvas-demo">Drawing Canvas Demo</h3> 


https://github.com/user-attachments/assets/8b7fa04c-feea-487e-9e95-98cea7e23c4a



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










