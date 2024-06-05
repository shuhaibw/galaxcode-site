export default function Lists(){
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
   
     
{/* this flex div goes to bottom */}
<div className="flex">
  <nav className="p-4 border-r border-t border-gray-200  fixed top-18 left-0 h-full overflow-y-auto  w-60 z-10">
    <h2 className="font-bold text-lg mb-4 ">Table of Contents</h2>
    <ul className="space-y-4">   
      <li><a href="#list" className="text-violet-700 hover:underline">Lists</a></li>
    </ul>
  </nav>
{/* this w div for inside right side goes to bottom */}
  <div className="w-3/4 ml-60 p-8">
 <section id="list" className="mb-12">
  <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 4: Lists</h1>
  <h2 className="text-2xl font-bold mb-3">Introduction to Lists</h2>
  <p className="mb-4">Imagine you're an astronaut collecting space samples. You need a way to store all the different samples in an organized manner. In programming, we use lists (also called arrays) to gather and organize multiple pieces of information. Let's learn how to use lists to make your coding journey more exciting!</p>
          <ul className="list-none list-inside ">
            <li>
               <p className="font-semibold mb-1">What are Lists?</p>
               <p className=" mb-4">Lists are like containers that can hold multiple items. These items can be numbers, words, or even other lists! Each item in a list has a specific position, called an index, starting from 0.</p>
            </li>
            <li>
               <p className="font-semibold mb-1">Why Do We Need Lists?</p>
               <p className=" mb-4">Lists help us manage and use multiple pieces of information easily. Instead of creating a new variable for each item, we can store all related items in a single list and access them by their positions.</p>
            </li>
            <li>
               <p className=" font-semibold mb-1">How Do We Use Lists?</p>
               <ul className="list-decimal ml-4 mt-2">
                  <li className="mb-2">
                     <p className="font-medium">Create a List:</p>
                     <p>To create a list, you use square brackets [] and separate each item with a comma.</p>
                  </li>
                  <li className="mb-2">
                     <p className="font-medium">Create a List:</p>
                     <p>To create a list, you use square brackets [] and separate each item with a comma.</p>
                  </li>
                  <li className="mb-2">
                     <p className="font-medium">Change List Items:</p>
                     <p>You can update any item in a list by assigning a new value to its index.</p>
                  </li>
                  <li className="mb-2">
                     <p className="font-medium">Add to a List:</p>
                     <p>You can add new items to a list using the append() method.</p>
                  </li>
                  <li className="mb-2">
                     <p className="font-medium">Remove from a List:</p>
                     <p>You can remove items from a list using the remove() method.</p>
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

# Create a list to store different speeds of the spaceship
speeds = [50, 100, 150]

# Move the spaceship at different speeds from the list
spaceship.forward(speeds[0])  # Move forward by 50 units
print("The spaceship moved forward by", speeds[0], "units.")

spaceship.forward(speeds[1])  # Move forward by 100 units
print("The spaceship moved forward by", speeds[1], "units.")

spaceship.forward(speeds[2])  # Move forward by 150 units
print("The spaceship moved forward by", speeds[2], "units.")

# Change the second speed in the list
speeds[1] = 200
spaceship.forward(speeds[1])  # Move forward by the new speed
print("The spaceship moved forward by", speeds[1], "units.")

# Add a new speed to the list
speeds.append(250)
spaceship.forward(speeds[3])  # Move forward by the new speed
print("The spaceship moved forward by", speeds[3], "units.")

# Remove a speed from the list
speeds.remove(50)
print("Updated speeds list:", speeds)

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
                     <p className="font-medium">Creating a List:</p>
                     <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
            <code>{`
speeds = [50, 100, 150]
            `}</code>
          </pre>
                  <p className="mb-6">We create a list named speeds that stores three different speed values for our spaceship.</p>
                  </li>
                  <li>
                     <p className="font-medium">Accessing List Items:</p>
                     <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
            <code>{`
spaceship.forward(speeds[0])
            `}</code>
          </pre>
                     <p className="mb-6">We use speeds[0] to access the first item in the list (50) and move the spaceship forward by that amount.</p>
                  </li>
                  <li>
                     <p className="font-medium">Changing List Items:</p>
                     <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
            <code>{`
speeds[1] = 200
            `}</code>
          </pre>
                     <p className="mb-6">We change the second item in the list from 100 to 200.</p>
                  </li>
                  <li>
                     <p className="font-medium">Adding to a List:</p>
                     <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
            <code>{`
speeds.append(250)
            `}</code>
          </pre>
                     <p className="mb-6">We add a new speed (250) to the end of the list.</p>
                  </li>
                  <li>
                     <p className="font-medium">Removing from a List:</p>
                     <pre className="bg-gray-100 p-4 rounded mt-4 mb-4">
            <code>{`
speeds.remove(50)
            `}</code>
          </pre>
                     <p className="mb-6">We remove the speed value 50 from the list.</p>
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