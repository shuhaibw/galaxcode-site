import TranslateComponent from '@/components/Translate/translatebutton'
import Navbar from '@/components/Nav/navbar'

export default function Loops() {
   return (
      <>
         <Navbar/>

         {/* this flex div goes to bottom */}
         <div className="flex pt-12">
            <nav className="p-4 border-r  border-gray-200  fixed top-16 left-0 h-full overflow-y-auto  w-60 z-10">
               <h2 className="font-bold text-lg mb-4 ">Table of Contents</h2>
               <ul className="space-y-4 text-purple-500">
                  <li><a href="#loops" className=" hover:underline">Loops</a></li>
               </ul>
            </nav>
            {/* this w div for inside right side goes to bottom */}
            <div className="w-3/4 ml-60 p-8">
               <section id="loops" className="mb-12">
                  <TranslateComponent></TranslateComponent>
                  <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 5: Loops</h1>
                  <h2 className="text-2xl font-bold mb-3">Introduction to Loops</h2>
                  <p className="mb-4">Imagine you're piloting a spaceship and you want it to travel in a square pattern. Instead of telling it to move and turn four times manually, you can use a loop to repeat the instructions automatically! Loops help you repeat actions easily, making your code shorter and more efficient.</p>
                  <ul className="list-none list-inside ">
                     <li>
                        <p className="font-semibold mb-1">What are Loops?</p>
                        <p className=" mb-4">Loops are like autopilots for your code. They allow you to repeat a set of instructions multiple times without writing the same code over and over again. In Python, there are two main types of loops: for loops and while loops. Today, we'll focus on for loops.</p>
                     </li>
                     <li>
                        <p className="font-semibold mb-1">Why Do We Need Loops?</p>
                        <p className=" mb-4">Loops make it easy to repeat tasks, such as moving a spaceship in a pattern or processing items in a list. This helps you save time and keep your code clean.</p>
                     </li>
                     <li>
                        <p className=" font-semibold mb-1">How Do We Use Loops?</p>
                        <ul className="list-decimal ml-4 mt-2">
                           <li className="mb-2">
                              <p className="font-medium">For Loop:</p>
                              <p>A for loop repeats a block of code for each item in a list or a range of numbers.</p>
                           </li>
                           <li className="mb-2">
                              <p className="font-medium">Range Function:</p>
                              <p>The range() function generates a sequence of numbers, which is useful for controlling how many times the loop runs.</p>
                           </li>
                        </ul>
                     </li>
                  </ul>
                  <p className="font-semibold text-lg mt-10 mb-6">Let's see some examples with our spaceship!</p>
                  <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                     <code>{`
import turtle

# Create a turtle
spaceship = turtle.Turtle()

# Use a for loop to move the spaceship in a square pattern
for _ in range(4):  # Repeat 4 times
    spaceship.forward(100)  # Move forward by 100 units
    spaceship.right(90)     # Turn right by 90 degrees
print("The spaceship traveled in a square pattern.")

# Use a for loop to move the spaceship forward multiple times
for distance in [50, 100, 150]:
    spaceship.forward(distance)  # Move forward by the distance from the list
    print("The spaceship moved forward by", distance, "units.")

# Hide the turtle and display the window
spaceship.hideturtle()
turtle.done()
            `}</code>
                  </pre>
                  {/* explanation */}
                  <p className="font-medium mt-6 mb-4">Explanation:</p>
                  <ul className="ml-4">
                     <li >
                        <ul className="list-decimal ">
                           <li>
                              <p className="font-medium">For Loop with Range:</p>
                              <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                                 <code>{`
for _ in range(4):
spaceship.forward(100)
spaceship.right(90)
            `}</code>
                              </pre>
                              <p className="mb-6">This loop repeats the instructions inside it 4 times. The spaceship moves forward by 100 units and then turns right by 90 degrees each time, creating a square pattern.</p>
                           </li>
                           <li>
                              <p className="font-medium">For Loop with List:</p>
                              <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
                                 <code>{`
for distance in [50, 100, 150]:
spaceship.forward(distance)
            `}</code>
                              </pre>
                              <p className="mb-6">This loop goes through each distance in the list [50, 100, 150] and moves the spaceship forward by that distance.</p>
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