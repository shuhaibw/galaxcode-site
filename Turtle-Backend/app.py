import io
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import turtle
from PIL import Image
import re
from pyvirtualdisplay import Display

display = Display(visible=0, size=(1024, 768))
display.start()

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load and resize the image
image_path = os.path.join("public", "therocket.jpg")
original_image = Image.open(image_path)
new_size = (95, 110)
resized_image_path = os.path.join("public", "resized_therocket.gif")
resized_image = original_image.resize(new_size)
resized_image.save(resized_image_path, format="GIF")

def parse_commands(code: str):
    lines = code.split('\n')
    lines = [line.strip() for line in lines if line.strip()]
    if any(';' in line for line in lines):
        commands = re.split(r'\s*;\s*', code)
    else:
        commands = []
        for line in lines:
            if line:
                commands.append(line)
            else:
                commands.append('    ' + line)
    return commands

def reset_screen_and_turtles():
    global screen, drawer, spaceship
    screen = turtle.Screen()
    screen.setup(width=1180, height=600)
    screen.tracer(0)
    screen.addshape(resized_image_path)
    drawer = turtle.Turtle()
    drawer.hideturtle()
    drawer.pensize(3)
    drawer.speed(0)
    spaceship = turtle.Turtle()
    spaceship.shape(resized_image_path)
    spaceship.penup()
    spaceship.hideturtle()

reset_screen_and_turtles()

@app.post("/run-code")
async def execute_code(code: str):
    try:
        screen.clear()  # Add this line to clear the screen
        reset_screen_and_turtles()
        drawer.clear()
        commands = parse_commands(code)
        variables = {}
        for command in commands:
            exec(command.replace("spaceship", "drawer"), globals(), variables)
        spaceship.goto(drawer.position())
        spaceship.setheading(drawer.heading())
        spaceship.showturtle()
        screen.update()
        canvas = screen.getcanvas()
        ps = canvas.postscript(colormode='color')
        img = Image.open(io.BytesIO(ps.encode('utf-8')))
        img_byte_arr = io.BytesIO()
        img.save(img_byte_arr, format="PNG")
        img_byte_arr.seek(0)
        return StreamingResponse(content=img_byte_arr, media_type="image/png")
    except Exception as e:
        reset_screen_and_turtles()
        raise HTTPException(status_code=400, detail=str(e))




