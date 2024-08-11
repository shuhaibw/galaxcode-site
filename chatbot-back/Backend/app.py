"""
API entrypoint for backend API.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api_models.ai_request import AIRequest
from cosmic_works.cosmic_works_ai_agent import CosmicWorksAIAgent

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Agent pool keyed by session_id to retain memories/history in-memory.
# Note: the context is lost every time the service is restarted.
agent_pool = {}

@app.get("/")
def root():
    """
    Health probe endpoint.
    """
    return {"status": "ready"}

@app.post("/ai")
#AIRequest gives the function the request of the user in the form of whats defined in ai_request.py
def run_cosmic_works_ai_agent(request: AIRequest):
    """
    Run the Cosmic Works AI agent.
    """
    #agent_pool already exists from up there so if theres no matching agent to the users request id in there need to check for that below
    if request.session_id not in agent_pool:
      # If the agent with the given session ID does not exist in the pool, create a new instance of the agent and add it to the agent pool, the agent in the form of whats in cosmic_ai_agent.py.
        agent_pool[request.session_id] = CosmicWorksAIAgent(request.session_id)
        # Retrieve the agent from the pool (whether newly created or existing) and run it with the user's prompt.
    return { "message": agent_pool[request.session_id].run(request.prompt) }
