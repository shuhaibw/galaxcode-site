# Import necessary libraries
import io  # For handling in-memory byte streams
import os  # For interacting with the operating system (e.g., file paths)
from fastapi import FastAPI, HTTPException  # FastAPI framework for creating APIs
from fastapi.middleware.cors import CORSMiddleware  # Middleware for handling CORS (Cross-Origin Resource Sharing)
from fastapi.responses import StreamingResponse  # For returning streaming responses
import turtle  # For drawing graphics (Turtle graphics)
from PIL import Image  # For image processing
import re  # For regular expressions
from pyvirtualdisplay import Display  # For creating a virtual display

# Create and start a virtual display (necessary for running Turtle graphics in a headless environment)
display = Display(visible=0, size=(1024, 768))
display.start()

# Initialize a FastAPI app
app = FastAPI()

# Define CORS policy to allow requests from all origins
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow all origins
    allow_credentials=True,  # Allow cookies to be sent
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Load and resize the image
image_path = os.path.join("public", "therocket.jpg")  # Path to the original image
original_image = Image.open(image_path)  # Open the original image
new_size = (95, 110)  # New size for the resized image
resized_image_path = os.path.join("public", "resized_therocket.gif")  # Path to save the resized image
resized_image = original_image.resize(new_size)  # Resize the image
resized_image.save(resized_image_path, format="GIF")  # Save the resized image as a GIF

# Function to parse the commands from the provided code
def parse_commands(code: str):
    lines = code.split('\n')  # Split code into lines
    lines = [line.strip() for line in lines if line.strip()]  # Strip whitespace and remove empty lines
    if any(';' in line for line in lines):  # Check if there are command separators (;)
        commands = re.split(r'\s*;\s*', code)  # Split the code by semicolons
    else:
        #commands left as is
        commands = []
        #handle empty lines
        for line in lines:
            if line:
                commands.append(line)  # Append non-empty lines as commands
            else:
                commands.append('    ' + line)  # Handle empty lines
    return commands

# Function to reset the Turtle screen and initialize turtles
def reset_screen_and_turtles():
    global screen, drawer, spaceship  # Declare global variables for screen and turtles
    screen = turtle.Screen()  # Create a new Turtle graphics screen
    screen.setup(width=1180, height=600)  # Set the screen size
    screen.tracer(0)  # Turn off screen updates for performance
    screen.addshape(resized_image_path)  # Add the resized image as a new shape
    drawer = turtle.Turtle()  # Create a new Turtle for drawing
    drawer.hideturtle()  # Hide the drawing Turtle
    drawer.pensize(3)  # Set the pen size for the drawing Turtle
    drawer.speed(0)  # Set the drawing speed to maximum
    spaceship = turtle.Turtle()  # Create a new Turtle for the spaceship
    spaceship.shape(resized_image_path)  # Set the spaceship's shape to the resized image
    spaceship.penup()  # Lift the pen to avoid drawing lines
    spaceship.hideturtle()  # Hide the spaceship Turtle

reset_screen_and_turtles()  # Call the function to initialize the screen and turtles

# Define an API endpoint to execute code
@app.post("/run-code")
async def execute_code(code: str):
    try:
        screen.clear()  # Clear the screen
        reset_screen_and_turtles()  # Reset the screen and turtles
        drawer.clear()  # Clear the drawing Turtle's drawings
        commands = parse_commands(code)  # Parse the code into commands
        variables = {}  # Dictionary to store local variables for exec()
        for command in commands:
            exec(command.replace("spaceship", "drawer"), globals(), variables)  # Execute each command
        spaceship.goto(drawer.position())  # Move the spaceship to the drawer's position
        spaceship.setheading(drawer.heading())  # Set the spaceship's heading to the drawer's heading
        spaceship.showturtle()  # Show the spaceship Turtle
        screen.update()  # Update the screen to reflect changes
        canvas = screen.getcanvas()  # Get the Tkinter canvas object from the screen
        ps = canvas.postscript(colormode='color')  # Get the canvas content as PostScript
        img = Image.open(io.BytesIO(ps.encode('utf-8')))  # Convert PostScript to an image
        img_byte_arr = io.BytesIO()  # Create a byte stream for the image
        img.save(img_byte_arr, format="PNG")  # Save the image as PNG to the byte stream
        img_byte_arr.seek(0)  # Rewind the byte stream to the beginning
        return StreamingResponse(content=img_byte_arr, media_type="image/png")  # Return the image as a streaming response
    except Exception as e:  
        reset_screen_and_turtles()  # Reset the screen and turtles if an error occurs
        raise HTTPException(status_code=400, detail=str(e))  # Return an HTTP 400 error with the exception details





