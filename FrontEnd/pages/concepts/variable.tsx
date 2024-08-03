import TranslateComponent from '@/components/Translate/translatebutton'
import Navbar from '@/components/Nav/navbar'

const Variable = () => {
   return (
      <>
         <Navbar/>
         
         <div className="flex pt-12">
         <nav className="p-4 border-r  border-gray-200  fixed top-16 left-0 h-full overflow-y-auto  w-60 z-10">
               <h2 className="font-bold text-lg mb-4 ">Table of Contents</h2>
                  <ul className=" list-none space-y-4 text-purple-500 ">
                     <li><a href="#intro" className=" hover:underline ">Intro to Programming</a></li>
                     <li><a href="#comment" className=" hover:underline">Comments</a></li>
                     <li><a href="#started" className=" hover:underline">Getting Started</a></li>
                     <li><a href="#variables" className=" hover:underline">Intro to Variables</a></li>
                  </ul>
            </nav>
         <div className="w-3/4 ml-60 p-8  "> 
            <section id="intro" className="mb-12 ">
                  <TranslateComponent></TranslateComponent>
                  <h1 className="font-orbitron font-bold text-2xl">
                     Lesson 1: Intro & Variables
                  </h1>
                  <h2 className="text-xl font-bold mb-4 mt-6">Introduction to Programming</h2>
                  <h2 className="text-lg font-semibold mb-2 mt-4">What is Programming?</h2>
                  <p>Programming is like giving instructions to a computer to make it do what you want. Imagine you're a commander giving orders to your spaceship. These orders help the spaceship know where to go and what to do.</p>
                  <br></br>
                  <h2 className="text-lg font-semibold mb-2">Why Learn Programming?</h2>
                  <p>Programming is like giving instructions to a computer to make it do what you want. Imagine you're a commander giving orders to your spaceship. These orders help the spaceship know where to go and what to do.</p>
            </section>

               <section id="comment" className="mb-12 ">
                  <h2 className="text-xl font-bold mb-2 ">Comments in Python Coding</h2>
                  <p>Before we begin, let's learn what comments are. In coding, comments are used to explain what the code does. They are notes for humans to read, and Python ignores them when running the program. Let's learn how to use comments!</p>
                  <br></br>
                  <h2 className="font-semibold text-lg mb-2">Types of Comments</h2>
                  <ul className="list-disc list-inside ml-4 ">
                     <li>Single-Line Comments</li>
                     <li>Multi-Line Comments</li>
                  </ul>
                  <br></br>
                  <h3 className="font-medium mb-3">1. Single-Line Comments</h3>
                  <p>Single-line comments start with # and continue until the end of the line.</p>
                  <p className="font-medium mt-4">Example:</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
# This is a single-line comment 

Code... 
            `}</code>
                  </pre>

                  <h3 className="font-medium mb-3 mt-6">2. Multi-Line Comments</h3>
                  <p>Multi-line comments start with triple quotes """ and continue for multiple lines.</p>
                  <p className="font-medium mt-4">Example:</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 ">
                     <code >{`
"""
This is a multi-line comment.
You can write as many lines as you want between the triple quotes.
Python ignores all these lines.
"""
   
Code... 
            `}</code>
                  </pre>
                  <h2 className="mt-6 font-semibold text-lg mb-2">Why Use Comments?</h2>
                  <p className="font-semibold mb-1">Explain Your Code:</p>
                  <p>Comments help others understand what your code does.</p>
                  <p className="font-semibold mt-3">Remember Your Code:</p>
                  <p>Comments remind you what you were thinking when you wrote the code.</p>

                  <h2 className="text-lg font-semibold mt-5 mb-2">Best Practices</h2>
                  <p className="font-semibold ">Update Comments: </p>
                  <p> If you change your code, update your comments too</p>
                  <p className="font-semibold mt-3">Use in Moderation: </p>
                  <p>Don’t write too many comments. Write enough to explain your code clearly.</p>
               </section>

               <section id="print" className="mb-12">
                  <h2 className="text-xl font-bold mb-4">Introduction to Print Statements</h2>
                  <p>
                     A print statement is used to display information on the screen. This is helpful for showing the results of your code and debugging.
                  </p>
                  <p className="font-medium mt-3">Note:</p>
                  <p>Printing won't work in Python Graphics but is still good practice</p>
                  <p className="font-medium mt-4">Example:</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4">
                     <code>{`
# Print a message
print("Hello, young coders!")

# Print a number
print(42)

# Print a calculation
print(7 + 5)

# Print multiple items
print("The result of 7 + 5 is:", 7 + 5)

        `}</code>
                  </pre>
                  <p><br></br>Explanation: In this example, print() is used to display text and numbers. You can use it to show messages, numbers, calculations, and more.
                  </p>
               </section>

               <section id="started" className="mb-12">
                  <h2 className="text-xl font-bold mb-4">Getting Started with Python Turtle</h2>
                  <ul className="list-none list-inside ">
                     <li>
                        <p className="font-semibold mb-1">Importing Turtle:</p>
                        <p className=" mb-4">To start using the turtle in Python, we need to tell the computer we want to use the turtle module. We do this by writing import turtle.</p>
                     </li>
                     <li>
                        <p className="font-semibold mb-1">Creating a Spaceship:</p>
                        <p className=" mb-4">We create a spaceship (which is actually a turtle object) to move around on the screen.</p>
                     </li>
                     <li>
                        <p className=" font-semibold mb-1">Moving the Spaceship:</p>
                        <p>To move the spaceship, we use commands like .forward(). We put a number inside the parentheses to tell the spaceship how far to move.</p>
                     </li>
                  </ul>
                  <br></br>

                  <p className="mt-3 font-medium">Example:</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
import turtle  # Import the turtle module

# Create a spaceship (turtle object)
spaceship = turtle.Turtle()

# Move the spaceship forward by 100 units
spaceship.forward(100)
print("The spaceship moved forward by 100 units.")

# Hide the spaceship and display the window
spaceship.hideturtle()
turtle.done()
            `}</code>
                  </pre>
                  <p className="font-medium mt-5 mb-4">Explanation:</p>
                  <ul className="list-decimal ml-6">
                     <li>
                        <p className="font-medium mb-1">Importing Turtle:</p>
                        <ul className="list-disc ml-6 mb-3">
                           <li>
                              import turtle: This tells the computer that we want to use the turtle module in our program.
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Creating a Spaceship:</p>
                        <ul className="list-disc ml-6 mb-3">
                           <li>
                              spaceship = turtle.Turtle(): We create a turtle object and name it spaceship. This will be our spaceship.
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Moving the Spaceship:</p>
                        <ul className="list-disc ml-6 mb-3">
                           <li>
                              spaceship.forward(100): We tell the spaceship to move forward by 100 units. The number inside the parentheses (100) tells the spaceship how far to go.
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Hiding the Spaceship and Displaying the Window:</p>
                        <ul className="list-disc ml-6">
                           <li className="mb-1">
                              spaceship.hideturtle(): This command hides the spaceship after it has moved.
                           </li>
                           <li>
                              turtle.done(): This command tells the program that we are done giving commands, and it should display the window.
                           </li>
                        </ul>
                     </li>
                  </ul>
               </section>

               <section id="variables" className="mb-12">
                  <h2 className="text-xl font-bold mb-4">Introduction to Variables</h2>
                  <h3 className="text-lg font-semibold mb-2 mt-6">What are Variables</h3>
                  <p>
                     Variables are like little boxes where we can store information. Imagine you have a magic box that can hold anything you want—numbers, words, or even true/false values. You give each box a name so you can remember what's inside.
                  </p>
                  <h3 className="text-lg font-semibold mb-2 mt-6">Why Do We Need Variables?</h3>
                  <p>Variables help us keep track of information in our programs. Instead of writing the same information over and over again, we can store it in a variable and use the variable name to refer to it. This makes our code cleaner and easier to understand.</p>
                  <h3 className="text-lg font-semibold mb-2 mt-6">How Do We Use Variables?</h3>
                  <ul className="list-decimal ml-6">
                     <li className="mb-3">
                        <p className="font-medium ">Create a Variable:</p>
                        <p>To create a variable, you just need to give it a name and assign it a value using the equals sign =.</p>
                     </li>
                     <li className="mb-3">
                        <p className="font-medium ">Change a Variable</p>
                        <p>You can change the value inside your variable anytime you want by assigning a new value to it.</p>
                     </li>
                     <li className="mb-3">
                        <p className="font-medium ">Use a Variable:</p>
                        <p>Once you have a variable, you can use it in your programs to perform different tasks.</p>
                     </li>
                  </ul>
                  <p className="mt-8 font-semibold text-lg">Let's see some examples with our spaceship!</p>
                  <p className="font-medium mt-4">Example:</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4">
                     <code>{`
import turtle

# Create a turtle
spaceship = turtle.Turtle()

# Create a variable to store the speed of the spaceship
spaceship_speed = 100

# Use the variable to move the spaceship forward
spaceship.forward(spaceship_speed)
print("The spaceship moved forward by", spaceship_speed, "units.")

# Change the variable to a new speed
spaceship_speed = 150

# Use the new speed to move the spaceship forward again
spaceship.forward(spaceship_speed)
print("The spaceship moved forward by", spaceship_speed, "units.")

# Create a variable to store the name of the spaceship
spaceship_name = "Star Explorer"
print("The name of the spaceship is", spaceship_name)

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
        `}</code>
                  </pre>
                  <p className="font-medium mt-4 mb-4">Explanation:</p>
                  <ul className="list-decimal ml-6">
                     <li>
                        <p className="font-medium mb-1">Creating a Variable:</p>
                        <ul className="list-disc ml-6">
                           <li className="mb-3">
                              spaceship_speed = 100: We create a variable named spaceship_speed and store the number 100 in it. This tells our spaceship how fast to move.
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Using a Variable</p>
                        <ul className="list-disc ml-6">
                           <li className="mb-3">
                              spaceship.forward(spaceship_speed): We use the variable spaceship_speed to move the spaceship forward. This makes the spaceship move 100 units.
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Changing a Variable:</p>
                        <ul className="list-disc ml-6">
                           <li className="mb-3">
                              spaceship_speed = 150: We change the value inside spaceship_speed to 150. Now, our spaceship will move faster.
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Creating and Using a String Variable:</p>
                        <ul className="list-disc ml-6">
                           <li className="mb-3">
                              spaceship_name = "Star Explorer": We create a variable named spaceship_name and store the words "Star Explorer" in it. This tells us the name of our spaceship.
                           </li>

                        </ul>
                     </li>
                     <li>
                        <p className="font-medium mb-1">Printing Variable Values:</p>
                        <ul className="list-disc ml-6">
                           <li className="mb-3">
                              print("The spaceship moved forward by", spaceship_speed, "units."): We print the value of spaceship_speed to see how far the spaceship moved.
                           </li>
                           <li>
                              print("The name of the spaceship is", spaceship_name): We print the name of our spaceship.
                           </li>
                        </ul>
                     </li>
                  </ul>
               </section>
            </div>
         </div>
      </>
   );
}

export default Variable;