export default function Conditonals(){
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
           <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Home</a>
           <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Learn</a>
           <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Code</a>
           <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Playground</a>
           <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Community</a>
           <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="#">About Our AI Copilot</a>
        </nav>
      </header>
{/* this flex div goes to bottom */}
<div className="flex">
  <nav className="p-4 border-r border-t border-gray-200  fixed top-18 left-0 h-full overflow-y-auto  w-60 z-10">
    <h2 className="font-bold text-lg mb-4 ">Table of Contents</h2>
    <ul className="space-y-4">   
      <li><a href="#intro" className="text-violet-700 hover:underline">Intro to If Statements</a></li>
      <li><a href="#basic" className="text-violet-700 hover:underline">Basic If Statement</a></li>
      <li><a href="#else" className="text-violet-700 hover:underline">If-Else Statement</a></li>
      <li><a href="#elif" className="text-violet-700 hover:underline"> If-Elif-Else Statement</a></li>
      <li><a href="#space-adventure" className="text-violet-700 hover:underline"> Space Adventure!</a></li>
    </ul>
  </nav>
{/* this w div for inside right side goes to bottom */}
  <div className="w-3/4 ml-60 p-8">
  <h1 className="font-orbitron font-bold text-2xl mb-5">Lesson 6: If-Statements</h1>
      <section id="intro" className="mb-12">
      <h2 className="font-semibold text-lg mb-1">Intro to If Statements</h2>
      <p>If statements help your code make decisions. They check if something is true and then decide what to do based on that.</p>
      <h2 className="font-semibold text-lg mt-3 mb-1" >Why If Statements Are Important</h2>
      <p >Imagine you're a spaceship pilot. Sometimes, you need to make decisions: Should you turn left or right? Should you speed up or slow down? If statements help your code make these kinds of decisions. </p>
      </section>
      
      <h2 className="font-bold text-lg">If Statements in Python</h2>
      <h4 className="font-medium mt-3 mb-1">Basic Structure</h4>
      <p>An if statement looks at a condition (a question) and runs a block of code if the condition is true.</p>
      <pre className="bg-gray-100 p-4 rounded mt-5">
        <code>{`
# code to run if the condition is true
if condition:
        `}</code>
      </pre>

      <section id="basic" className="mb-12">
      <h4 className="font-medium mt-10 mb-1">Example 1: Basic If Statement</h4>
      <p>Let's say we want our spaceship to fly faster if our speed is less than 50.</p>
      <pre className="bg-gray-100 p-4 rounded mt-5">
        <code>{`
# Set the spaceship's current speed
speed = 40

# Check if the speed is less than 50
if speed < 50:
    print("Speeding up the spaceship!")

        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul className="list-decimal ml-6">
         <li className="mb-2">speed = 40: We set the spaceship's speed to 40.</li>
         <li className="mb-2">if speed &lt; 50: We check if the speed is less than 50.</li>
         <li >print("Speeding up the spaceship!"): If the speed is less than 50, we print a message saying we're speeding up.</li>
      </ul>
      </section>

      <section id="else" className="mb-12">
      <h4 className="font-medium mb-1 ">Example 2: If-Else Statement</h4>
      <p>What if we want to do something different if the speed is not less than 50? We can use an if-else statement.</p>
      <pre className="bg-gray-100 p-4 rounded mt-5">
        <code>{`
# Set the spaceship's current speed
speed = 60

# Check if the speed is less than 50
if speed < 50:
    print("Speeding up the spaceship!")
else:
    print("Maintaining current speed.")
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul className="list-decimal ml-6">
         <li >else: If the condition in the if statement is not true, the code inside the else block runs.</li>
      </ul>
      </section>

      <section id="elif" className="mb-12">
      <h4 className="font-medium mb-1">Example 3: If-Elif-Else Statement</h4>
      <p>What if we have more than two choices? We can use elif (short for "else if") to check multiple conditions.</p>
      <pre className="bg-gray-100 p-4 rounded mt-5">
        <code>{`
# Set the spaceship's current speed
speed = 50

# Check different speed conditions
if speed < 50:
    print("Speeding up the spaceship!")
elif speed == 50:
    print("Holding steady.")
else:
    print("Maintaining current speed.")
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul className="list-decimal ml-6">
         <li className="mb-2">elif speed == 50:: We check if the speed is exactly 50.</li>
         <li>We can have as many elif conditions as we need.</li>
      </ul>
      </section>

      <section id="space-adventure" className="mb-12 ">
      <h2 className="font-bold text-lg mb-1">Lets Create a Space Adventure!</h2>
      <p>Let's create a fun little space adventure using if statements. We'll decide whether our spaceship should turn left or right based on an alien signal.</p>
      <pre className="bg-gray-100 p-4 rounded mt-5">
        <code>{`
# Alien signal received
alien_signal = "left"

# Decision based on alien signal
if alien_signal == "left":
    print("Turning the spaceship left!")
elif alien_signal == "right":
    print("Turning the spaceship right!")
else:
    print("Staying on course.")
        `}</code>
      </pre>
      <p className="font-medium mt-4 mb-4">Explanation:</p>
      <ul className="list-decimal ml-6">
         <li className="mb-2">alien_signal = "left": We receive an alien signal.</li>
         <li className="mb-2">if alien_signal == "left":: If the signal is "left", we turn left.</li>
         <li className="mb-2">elif alien_signal == "right":: If the signal is "right", we turn right.</li>
         <li >else:: If the signal is neither "left" nor "right", we stay on course.</li>
      </ul>
      </section>
  </div>
  </div>
 </>
 );
}