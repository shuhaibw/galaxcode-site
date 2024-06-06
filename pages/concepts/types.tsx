import Image from 'next/image'

export default function Types(){
   return(
      <>
<header className="flex items-center justify-between
    bg-purple-900 text-white px-6 py-3 shadow-4xl ">
      <div className="flex items-center">
      <Image src= "/rocket.jpg" width="34"   // Ensure you specify the correct width
        height="34" className=" mr-2" alt="rocket"/>
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
  <nav className="p-4 border-r border-t border-gray-200  fixed top-18 left-0 h-full overflow-y-auto  w-60 z-10">
    <h2 className="font-bold text-lg mb-4 ">Table of Contents</h2>
    <ul className="space-y-4">   
      <li><a href="#datatypes" className="text-violet-700 hover:underline">Data Types</a></li>
      <ul className="ml-5 list-disc">
         <li><a href="#integers" className="text-violet-700 hover:underline">Integers</a></li>
         <li><a href="#floats" className="text-violet-700 hover:underline">Floats</a></li>
         <li><a href="#strings" className="text-violet-700 hover:underline">Strings</a></li>
         <li><a href="#booleans" className="text-violet-700 hover:underline">Booleans</a></li>
         <li><a href="#operations" className="text-violet-700 hover:underline">Data Type Operations</a></li>
      </ul>
    </ul>
  </nav>

  <div className="w-3/4 ml-60 p-8">
   
    <section id="datatypes" className="mb-8">
      <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 2: Data Types</h1>
      <h2 className="text-2xl font-bold mb-4">Introduction to Data Types</h2>
      <p className="mb-3">In Python, data types help us know what kind of information we are working with. The main types are:
      </p>
      <ul className="ml-5 list-disc">
         <li className="mb-3">Integers (int): These are whole numbers like 1,2, or -3.</li>
         <li className="mb-3">Floats (float): These are numbers with decimals like 1.5 or 3.14.</li>
         <li className="mb-3">Strings (str): Words or sentences like "hello" or "spaceship".</li>
         <li className="mb-3">Booleans (bool): True or False values for making decisions.</li>
      </ul>
    </section>

    <section id="integers" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Integers</h2>
      <p>An integer is a whole number without a decimal point. We use integers for counting and other simple math.
      </p>
      <p className="font-medium mt-4">Example:</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        <code>{`
import turtle

# Set up the turtle
spaceship = turtle.Turtle()

# Set spaceship speed using an integer
spaceship_speed = 100
print("Spaceship speed:", spaceship_speed)

# Move spaceship forward by spaceship_speed units
spaceship.forward(spaceship_speed)
print("The spaceship moved forward by", spaceship_speed, "units.")

# Set negative speed to move backward
backward_speed = -50
spaceship.backward(backward_speed)
print("The spaceship moved backward by", backward_speed, "units.")

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul>
         <li className="mb-3">We set the speed of the spaceship using a whole number (spaceship_speed = 100).</li>
         <li className="mb-3">The spaceship moves forward by 100 units (spaceship.forward(spaceship_speed)).</li>
         <li className="mb-3">We use a negative number to move the spaceship backward (backward_speed = -50).</li>
      </ul>
    </section>

    <section id="floats" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Floats (float)</h2>
      <p>A float is a number with a decimal point. We use floats for more precise measurements, like distances and weights.
      </p>
      <p className="font-medium mt-4">Example:</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        <code>{`
import turtle

# Set up the turtle
spaceship = turtle.Turtle()

# Set spaceship speed using a float
spaceship_speed = 100.5
print("Spaceship speed:", spaceship_speed)

# Move spaceship forward by spaceship_speed units
spaceship.forward(spaceship_speed)
print("The spaceship moved forward by", spaceship_speed, "units.")

# Set a smaller float for precise movements
small_distance = 0.5
spaceship.forward(small_distance)
print("The spaceship moved forward by a small distance of", small_distance, "units.")

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul>
         <li className="mb-3">We set the speed of the spaceship using a decimal number (spaceship_speed = 100.5).</li>
         <li className="mb-3">The spaceship moves forward by 100.5 units (spaceship.forward(spaceship_speed)).</li>
         <li className="mb-3">We use a smaller decimal number to make a precise movement of 0.5 units (small_distance = 0.5).</li>
      </ul>
    </section>

    <section id="booleans" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Booleans (bool)</h2>
      <p> A boolean represents two values: True or False. We use booleans to decide if something is true or false, like a yes or no question.
      </p>
      <p className="font-medium mt-4">Example:</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        <code>{`
import turtle

# Set up the turtle
spaceship = turtle.Turtle()

# Check if the spaceship is ready to launch
ready_to_launch = True
print("Is the spaceship ready to launch?", ready_to_launch)

# Set a condition to stop the spaceship
stop_movement = False
print("Should the spaceship stop?", stop_movement)

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul>
         <li className="mb-3">We check if the spaceship is ready to launch (ready_to_launch = True).</li>
         <li className="mb-3">We decide if the spaceship should stop (stop_movement = False).</li>
      </ul>
    </section>

    <section id="strings" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Strings (str)</h2>
      <p>A string is a sequence of characters, used for text. We use strings to store and manipulate words and sentences. Strings are always in quotes (" ").
      </p>
      <p className="font-medium mt-4">Example:</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        <code>{`
import turtle

# Set up the turtle
spaceship = turtle.Turtle()

# Set spaceship name using a string
spaceship_name = "Star Explorer"
print("Spaceship name:", spaceship_name)

# Use the name in a print statement
print("The spaceship is called", spaceship_name)

# Combine strings
mission_message = "Mission: " + "Explore the Galaxy"
print(mission_message)

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul>
         <li className="mb-3">We set the name of the spaceship using a word (spaceship_name = "Star Explorer").</li>
         <li className="mb-3">We combine two strings to create a mission message (mission_message = "Mission: " + "Explore the Galaxy")</li>
      </ul>
    </section>

    <section id="operations" className="mb-12">
      <h2 className="text-2xl font-bold mb-2">Data Type Operations (+, -, /, *)</h2>
      <p className="mb-6">We need to be careful when doing math with different types of data. Some combinations work well together, and some don’t. Let's see which ones work and which ones don't.
      </p>
      <h3 className="text-xl font-semibold mb-2">Understanding Compatible Data Types</h3>
      <ul className="list-decimal">
         <li className="ml-6 mb-2">Integers and Floats: These can work together in math. Adding, subtracting, multiplying, and dividing them works fine.</li>
         <li className="ml-6 mb-2">Strings and Numbers (Integers or Floats): These don’t work well together in math. You can’t add, subtract, multiply, or divide a string with a number directly.</li>
         <li className="ml-6 mb-2">Strings and Strings: These can be combined using the + operator, which is called concatenation.
         </li>
         <li className="ml-6 mb-2">Booleans and Numbers: It's best to not mix bools with math.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2 mt-6">Examples of Compatible Operations </h3>
      <p className="font-medium mt-4">Example:</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        <code>{`
import turtle

# Set up the turtle
spaceship = turtle.Turtle()

# Add an integer and a float
int_value = 10
float_value = 5.5
result = int_value + float_value
print("Result of adding an integer and a float:", result)

# Multiply an integer and a float
result = int_value * float_value
print("Result of multiplying an integer and a float:", result)

# Subtract a float from an integer
result = int_value - float_value
print("Result of subtracting a float from an integer:", result)

# Divide an integer by a float
result = int_value / float_value
print("Result of dividing an integer by a float:", result)

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul>
         <li className="mb-3">Adding Integer and Float: int_value + float_value gives 15.5. This works because both are numbers.</li>
         <li className="mb-3">Multiplying Integer and Float: int_value * float_value gives 55.0. This works for the same reason</li>
         <li className="mb-3">Subtracting Float from Integer: int_value - float_value gives 4.5. This works too.</li>
         <li className="mb-3">Dividing Integer by Float: int_value / float_value gives 1.8181818181818181. This works and shows a more precise answer.
         </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-6">Examples of Non-Compatible Operations </h3>
      <p className="font-medium mt-4">Example:</p>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        <code>{`
import turtle

# Set up the turtle
spaceship = turtle.Turtle()

# Try to add an integer and a string (this will cause an error)
int_value = 10
str_value = "10"


result = int_value + str_value
print("Result of adding an integer and a string:", result)


# Try to multiply a string and an integer (this will not work well)
result = str_value * 3
print("Result of multiplying a string by 3:", result)

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul>
         <li className="mb-3">Adding Integer and String: int_value + str_value causes an error. Numbers and text don’t mix in math.</li>
         <li className="mb-3">Multiplying String by Integer: str_value * 3 will not work out well.</li>
      </ul>
    </section>
  </div>
</div>

      </>
   );
}