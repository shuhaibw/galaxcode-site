export default function Math(){
   return(
      <>
 <header className="flex items-center justify-between
    bg-purple-900 text-white px-6 py-3 shadow-4xl ">
      <div className="flex items-center">
      <img src="../rocket.jpg" className="w-7 h-7 mr-2"></img>
      <h1 className="text-xl font-bold font-orbitron">GalaxCode</h1>
      </div>
      <nav className="flex flex-wrap md:pl-20 sm:pl-16 ">
         {/* add hrefs */}
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="/">Home</a>
         <a className ="hover:bg-gray-100  px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="/learn">Learn</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="/code">Code</a>
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="/playground">Playground</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="/community">Community</a>
         <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="/about">About Our AI Copilot</a>
      </nav>
    </header>
   
      <div className="flex">
         <nav className="p-4 border-r border-gray-200 border-t  fixed top-18 left-0 h-full overflow-y-auto  w-60 z-10">
            <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
            <ul className="space-y-4">
               <li><a href="#sequence-execution" className="text-violet-700 hover:underline">Sequence and Order of Execution</a></li>
               <li><a href="#counting-sequences" className="text-violet-700 hover:underline">Counting and Number Sequences</a></li>
               <li><a href="#coordinates-grid" className="text-violet-700 hover:underline">Coordinates and Grid System</a></li>
               <li><a href="#angles-directions" className="text-violet-700 hover:underline">Angles and Directions</a></li>
               <li><a href="#arithmetic-operations" className="text-violet-700 hover:underline">Arithmetic Operations</a></li>
               <li><a href="#basic-geometry" className="text-violet-700 hover:underline">Basic Geometry</a></li>
            </ul>
         </nav>
      <div className="w-3/4 ml-60 p-8">
      <section id="sequence-execution" className="mb-12">
         <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 3: Level Up Your Skills with Math Basics!</h1>
         <h2 className="text-2xl font-bold mb-4">Sequence and Order of Execution</h2>
         <p>Code runs from top to bottom, executing instructions in order. This sequence is essential for making your spaceship follow the correct path.</p>
         <pre className="bg-gray-100 p-4 rounded mt-4">
         <code>{`
import turtle

# Create a spaceship
spaceship = turtle.Turtle()

# Move spaceship forward by 100 units
spaceship.forward(100)

# Turn spaceship right by 90 degrees
spaceship.right(90)

# Move spaceship forward by another 100 units
spaceship.forward(100)

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
         </pre>
      </section>

    <section id="counting-sequences" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Counting and Number Sequences</h2>
      <p>In programming, counting often starts from 0. This is known as zero-based counting and is essential for understanding lists and loops.</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>{`
import turtle

# Create a spaceship
spaceship = turtle.Turtle()

# Move spaceship based on a sequence of movements
spaceship.forward(10)  # Move forward by 10 units
spaceship.forward(20)  # Move forward by 20 units
spaceship.forward(30)  # Move forward by 30 units

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
       </pre>
    </section>

    <section id="coordinates-grid" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Coordinates and Grid System</h2>
      <p> Use (x, y) coordinates to position your spaceship on a grid. The x-coordinate controls horizontal movement, and the y-coordinate controls vertical movement.</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>{`
import turtle

# Create a spaceship
spaceship = turtle.Turtle()

# Set the x-coordinate to -100
spaceship.setx(-100)

# Set the y-coordinate to 100
spaceship.sety(100)

# Set both x and y coordinates
spaceship.setpos(-100, 100)

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
      `}</code>
      </pre>
    </section>

    <section id="angles-directions" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Angles and Directions</h2>
      <p> Angles are used to rotate your spaceship. For example, 0 degrees points to the right, 90 degrees points up, 180 degrees points to the left, and 270 degrees points down.</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>{`
import turtle

# Create a spaceship
spaceship = turtle.Turtle()

# Turn spaceship to face 45 degrees
spaceship.setheading(45)

# Move forward in the new direction
spaceship.forward(100)

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
      `}</code>
      </pre>
    </section>

    <section id="arithmetic-operations" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Arithmetic Operations</h2>
      <p> Use basic arithmetic operations to control movements and calculate positions.</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>{`
import turtle

# Create a spaceship
spaceship = turtle.Turtle()

# Define some distances
distance1 = 50
distance2 = 30

# Move forward by adding two distances
spaceship.forward(distance1 + distance2)

# Move backward by subtracting two distances
spaceship.backward(distance1 - distance2)

# Move forward by multiplying distance
spaceship.forward(distance1 * 2)

# Move backward by dividing distance
spaceship.backward(distance1 / 2)

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
      `}</code>
      </pre>
    </section>

    <section id="basic-geometry" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Basic Geometry</h2>
      <p>Understand basic geometric shapes and patterns to draw shapes like squares, circles, and triangles.</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
      <code>{`
import turtle

# Create a spaceship
spaceship = turtle.Turtle()

# Draw a square
spaceship.forward(100)
spaceship.right(90)
spaceship.forward(100)
spaceship.right(90)
spaceship.forward(100)
spaceship.right(90)
spaceship.forward(100)
spaceship.right(90)

# Draw a circle
spaceship.circle(50)

# Draw a triangle
spaceship.forward(100)
spaceship.left(120)
spaceship.forward(100)
spaceship.left(120)
spaceship.forward(100)
spaceship.left(120)

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
      `}</code>
      </pre>
    </section>
   </div>
</div>

</>
);
}