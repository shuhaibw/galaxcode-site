import TranslateComponent from '@/components/Translate/translatebutton'
import Navbar from '@/components/Nav/navbar'

export default function Drawing() {
   return (
      <>
         <Navbar/>

         <div className="flex pt-12">
            <nav className=" p-4 border-r border-gray-200 top-16 fixed  left-0 h-full overflow-y-auto  w-60 z-10">
               <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
               <ul className="space-y-4 text-purple-500">
                  <li><a href="#earth" className=" hover:underline">Drawing Earth</a></li>
                  <li><a href="#sun" className=" hover:underline">Drawing the Sun</a></li>
                  <li><a href="#alien" className=" hover:underline">Drawing an Alien UFO</a></li>
               </ul>
            </nav>
            <div className="w-3/4 ml-60 p-8">
               <TranslateComponent></TranslateComponent>
               <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 8: Creating Cosmic Art</h1>
               <h2 className="text-lg font-semibold mb-2 mt-4">Introduction:</h2>
               <p>Imagine you're a space explorer with a spaceship that can draw amazing cosmic art! In this lesson, we'll use Python Turtle to create Earth, the Sun, and an alien UFO. Let's learn how to use your coding skills to draw these shapes in space!</p>
               <section id="earth" className="mb-12">
                  <h2 className="font-semibold text-lg mb-1 mt-4">Drawing Earth</h2>
                  <p>Lets draw our home planet!</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
import turtle

# Function to draw Earth
def draw_earth():
    # Create a spaceship turtle
    spaceship = turtle.Turtle()
    
    # Lift pen and go to position to draw Earth
    spaceship.penup()
    spaceship.goto(0, -100)
    spaceship.pendown()
    
    # Draw the blue ocean
    spaceship.color("blue")
    spaceship.begin_fill()
    spaceship.circle(100)
    spaceship.end_fill()
    
    # Draw the green land
    spaceship.penup()
    spaceship.goto(0, -120)
    spaceship.pendown()
    spaceship.color("green")
    spaceship.begin_fill()
    spaceship.circle(80)
    spaceship.end_fill()

    # Hide the spaceship and display the window
    spaceship.hideturtle()
    turtle.done()

# Draw Earth
draw_earth()
            `}</code>
                  </pre>
               </section>
               <section id="sun" className="mb-12">
                  <h2 className="font-semibold text-lg mb-1">Drawing the Sun</h2>
                  <p>Now let's draw the Sun!</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
import turtle

# Function to draw the Sun
def draw_sun():
    # Create a spaceship turtle
    spaceship = turtle.Turtle()
    
    # Lift pen and go to position to draw the Sun
    spaceship.penup()
    spaceship.goto(0, 0)
    spaceship.pendown()
    
    # Draw the big circle of the Sun
    spaceship.color("yellow")
    spaceship.begin_fill()
    spaceship.circle(80)
    spaceship.end_fill()
    
    # Draw the inner circle of the Sun
    spaceship.penup()
    spaceship.goto(0, 80)
    spaceship.pendown()
    spaceship.color("orange")
    spaceship.begin_fill()
    spaceship.circle(20)
    spaceship.end_fill()
    
    # Draw the triangles around the Sun
    spaceship.penup()
    spaceship.goto(0, 100)
    spaceship.pendown()
    spaceship.color("orange")
    for _ in range(12):
        spaceship.forward(30)
        spaceship.backward(30)
        spaceship.left(30)

    # Hide the spaceship and display the window
    spaceship.hideturtle()
    turtle.done()

# Draw the Sun
draw_sun()
            `}</code>
                  </pre>
               </section>

               <section id="alien" className="mb-12">
                  <h2 className="font-semibold text-lg mb-1">Drawing an Alien UFO</h2>
                  <p>Now let's try an Alien UFO!</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
import turtle

# Function to draw an alien UFO
def draw_ufo():
    # Create a spaceship turtle
    spaceship = turtle.Turtle()
    
    # Lift pen and go to position to draw the UFO saucer
    spaceship.penup()
    spaceship.goto(0, 0)
    spaceship.pendown()
    
    # Draw the silver saucer shape of the UFO
    spaceship.color("silver")
    spaceship.begin_fill()
    spaceship.circle(50)
    spaceship.end_fill()
    
    # Draw the green top part of the UFO with antenna
    spaceship.penup()
    spaceship.goto(0, 50)
    spaceship.pendown()
    spaceship.color("green")
    spaceship.begin_fill()
    spaceship.circle(20)
    spaceship.end_fill()
    
    # Draw the gray antenna of the UFO
    spaceship.penup()
    spaceship.goto(0, 60)
    spaceship.pendown()
    spaceship.color("gray")
    spaceship.forward(20)
    spaceship.backward(40)
    spaceship.forward(20)
    
    # Draw the small circle at the tip of the antenna
    spaceship.penup()
    spaceship.goto(-10, 60)
    spaceship.pendown()
    spaceship.circle(5)
    
    # Hide the spaceship and display the window
    spaceship.hideturtle()
    turtle.done()

# Draw an alien UFO
draw_ufo()

            `}</code>
                  </pre>
                  <p className="mt-4">Great job! You've learned how to use Python Turtle to draw Earth, the Sun, and an alien UFO in space. What other cosmic objects can you create? Keep exploring and have fun coding!</p>
               </section>
            </div>
         </div>
      </>
   );
};
