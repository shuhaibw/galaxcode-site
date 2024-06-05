export default function theLoops(){
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
   
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full p-8 bg-gradient-to-br from-gray-800 to-violet-700">
       
    <div className="bg-gradient-to-br from-violet-700 to-[#0f172a]  rounded-xl p-8  flex flex-col  justify-start">
    
      <h2 className="text-3xl font-semibold text-white mb-4">Orbital Loops Challenge</h2>
      <div className="bg-white rounded-xl p-6 ">
        <h3 className="text-xl font-bold font-sans text-black mb-2">Welcome, young coders!</h3>
        <p className="text-gray-800 mb-4">Today, you'll learn about loops and how they can help you automate repetitive tasks in your space missions. Let's unleash your creativity by drawing a mesmerizing storm eye using Python's turtle graphics. Let the cosmic storm swirl!</p>
        <div className="bg-gray-100 shadow-md rounded-xl p-6 ">
          <h4 className="text-lg font-semibold font-sans text-gray-800 mb-2">Instructions:</h4>
          <ol className="list-decimal font-sans list-inside text-gray-800">
            <li className="mt-4">
              
              <span className="font-medium  ">Set Up Your Environment:</span>
              
              <ul className="list-disc ml-8 grid grid-cols-1 gap-1 ">
                <li>
                Import the turtle module. (import turtle)
                </li>
                <li>
                Create a turtle object named spaceship. (spaceship = turtle.Turtle())
                </li>
                <li>
                Set the speed of the spaceship to 3. (spaceship.speed(3))
                </li>
              </ul>
            </li>

            {/* big list item */}
            <li className="mt-4">
              <span className="font-medium">Drawing the Storm Eye:</span>
              
              <ul className="list-disc ml-8 grid grid-cols-1 gap-1">
                <li>
                Use a for loop to draw the storm eye:
                </li>
                <div className="ml-6">
                <li>
                Be creative! Draw any shape you like to represent the storm eye. You can use circles, polygons, or any other shapes.
                </li>
                <li>
                Experiment with different colors and sizes to make the storm eye visually appealing.
                </li>
                </div>
              </ul>
            </li>

            <li className="mt-4">
            <span className="font-medium ">End the Spaceship:</span>
              
              <ul className="list-disc ml-8 grid grid-cols-1 gap-1 ">
                <li>
                end with spaceship.hideturtle() &
                turtle.done()
                </li>
              </ul>
             </li>
             
          </ol>
        </div>
      
      </div>
     
      <div className="bg-gradient-to-br from-violet-700 to-[#0f172a]  rounded-xl p-8 mt-8">
      
        <h2 className="text-3xl font-semibold text-white mb-4 ">Guidance</h2>
        <div className="bg-white rounded-xl p-6  ">
          <p className="text-gray-800 font-medium">
            Ask Astro for guidance. You can paste your code and ask for any type of help. You can also ask for challenge 1 hint or challenge 1 solution. 
          </p>
        </div>
      </div>
      
      </div>
      

    <div className="flex flex-col items-center justify-start">
      <div className="  bg-gradient-to-br from-violet-700 to-[#0f172a] rounded-xl p-8 flex flex-col justify-center w-full">
        <h2 className="text-3xl font-semibold text-white mb-4">Drawing Canvas</h2>
        <div className="bg-white rounded-xl p-6  flex-1">
          <canvas className="w-full h-[300px]" />
        </div>
        <div className="flex mt-4">
          <textarea className="bg-gray-100 pb-28 rounded-lg p-4 text-gray-900 font-mono flex-1 focus:outline-violet-500"
            placeholder="Enter your code...">
            </textarea>
          
        </div>
        <div className="mt-4 flex ">
        <button className="bg-gray-100 w-full hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-semibold py-2 mt-1  rounded-lg ">
            Run Code
          </button>
       </div>
      </div>
      
      <div className="w-full bg-gradient-to-br from-violet-700 to-[#0f172a] rounded-xl p-8 mt-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Ask Astro</h2>
        <div className="bg-white rounded-lg p-6 flex flex-col justify-start text-base text-gray-800 overflow-auto" id="ai-answer">
          <p className="pb-16">AI's answer will appear here...</p>
       </div>
       
          <textarea
            className="bg-gray-100 w-full rounded-lg p-4 text-gray-900 font-mono mt-4 resize-none focus:outline-violet-500"
            placeholder="Enter your question..."
          />
        
        <div className="flex justify-between mt-4">
          <button className="bg-gray-100 hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md mr-4">
            Ask Astro
          </button>
          <button className="bg-gray-100  hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md ">
            Clear Chat
          </button>
        </div>
      </div>
    </div>

    
  </div>

     </>
   );
   }