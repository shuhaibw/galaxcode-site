import TranslateComponent from '@/components/Translate/translatebutton'
import Navbar from '@/components/Nav/navbar'

export default function Functions() {
   return (
      <>
         <Navbar/>

         {/* this flex div goes to bottom */}
         <div className="flex pt-12">
            <nav className="p-4 border-r  border-gray-200  fixed top-16 left-0 h-full overflow-y-auto  w-60 z-10">
               <h2 className="font-bold text-lg mb-4 ">Table of Contents</h2>
               <ul className="space-y-4 text-purple-500">
                  <li><a href="#intro-functions" className=" hover:underline">Intro to Functions</a></li>
                  <li><a href="#create-functions" className=" hover:underline">Create a Function</a></li>
                  <li><a href="#practice-functions" className=" hover:underline">Practice Functions</a></li>
               </ul>
            </nav>
            {/* this w div for inside right side goes to bottom */}
            <div className="w-3/4 ml-60 p-8">
               <section id="intro-functions" className="mb-12">
                  <TranslateComponent></TranslateComponent>
                  <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 7: Functions</h1>
                  <h2 className="text-2xl font-bold mb-3">Introduction to Functions</h2>
                  <p className="mb-4">Functions are like special tools or commands you create to perform specific tasks in your code. Just like a spaceship has different controls for different actions, you can create functions to control different parts of your program.</p>
                  <ul className="list-none list-inside ">
                     <li>
                        <p className="font-semibold mb-1">What are Functions?</p>
                        <p className=" mb-4">Functions are blocks of code that you can define once and use whenever you need. They help you organize your code, make it easier to read, and avoid repeating yourself.</p>
                     </li>
                     <li>
                        <p className="font-semibold mb-2">Why Do We Need Functions?</p>
                        <p className=" mb-4">Reusability: Write code once, use it many times.</p>
                        <p className=" mb-4">Organization: Keep your code neat and organized.</p>
                        <p className=" mb-4">Readability: Make your code easier to understand.</p>
                     </li>
                     <li>
                        <p className=" font-semibold mb-1 mt-6">How Do We Use Functions?</p>
                        <ul className="list-decimal ml-4 mt-2">
                           <li className="mb-4">
                              <p className="font-medium mb-1">Define a Function:</p>
                              <ul>
                                 <li>
                                    <p>Use the def keyword.</p>
                                 </li>
                                 <li>
                                    <p>Give your function a name.</p>
                                 </li>
                                 <li>
                                    <p>Add parentheses () and a colon :</p>
                                 </li>
                                 <li>
                                    <p>Write the code block inside the function with indentation.</p>
                                 </li>
                              </ul>
                           </li>
                           <li className="mb-2">
                              <p className="font-medium mb-1">Call a Function:</p>
                              <ul>
                                 <li>
                                    <p>Use the function's name followed by parentheses ().</p>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </section>

               <section id="create-functions" className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6">Let's Create a Function</h2>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
import turtle

# Create a turtle
spaceship = turtle.Turtle()

# Define a function to move the spaceship forward
def move_forward(distance):
    spaceship.forward(distance)
    print("The spaceship moved forward by", distance, "units.")

# Call the function to move the spaceship
move_forward(100)
move_forward(50)

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
            `}</code>
                  </pre>
                  <p className="font-medium mt-8 mb-4">Explanation:</p>
                  <ul className="list-decimal ml-4">
                     <li>
                        <p className="font-medium">Defining a Function:</p>
                        <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                           <code>{`
def move_forward(distance):
spaceship.forward(distance)
print("The spaceship moved forward by", distance, "units.")
            `}</code>
                        </pre>
                        <ul className="list-disc flex flex-col gap-y-3 ">
                           <li>
                              <p >def: This keyword starts the function definition.</p>
                           </li>
                           <li>
                              <p >move_forward: This is the name of the function. You can name it whatever you like.</p>
                           </li>
                           <li>
                              <p >(distance): This is a parameter. It's a variable that the function uses to get information when called.</p>
                           </li>
                           <li>
                              <p >Code Block: Inside the function, we use spaceship.forward(distance) to move the spaceship and print to display a message.</p>
                           </li>
                        </ul>
                     </li>

                     <li>
                        <p className="font-medium mt-6">Calling a Function:</p>
                        <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                           <code>{`
move_forward(100)
move_forward(50)
            `}</code>
                        </pre>
                        <ul className="list-disc">
                           <li>
                              We call the move_forward function twice with different distances. The spaceship moves forward by 100 units first, then by 50 units.
                           </li>
                        </ul>
                     </li>

                  </ul>
               </section>

               <section id="practice-functions" className="mb-12">
                  <h2 className="text-2xl font-semibold mb-3">Practice Functions</h2>
                  <p>Try creating your own functions to perform different tasks. For example, create a function to turn the spaceship or to draw a shape!</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
# Define a function to turn the spaceship
def turn_right(angle):
    spaceship.right(angle)
    print("The spaceship turned right by", angle, "degrees.")

# Call the function to turn the spaceship
turn_right(90)
turn_right(45)
            `}</code>
                  </pre>
               </section>
            </div>
         </div>
      </>
   );
}