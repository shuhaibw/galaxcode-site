import Image from 'next/image'


export default function Learn(){
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
         <a className ="bg-gray-100  px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 text-gray-700" href="learn">Learn</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="code">Code</a>
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="playground">Playground</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="community">Community</a>
         <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="about">About Our AI Copilot</a>
      </nav>
    </header>
   
      <main>
        <section className="bg-gray-100   py-10 px-6 md:px-12 lg:px-20 ">
        
        <div className=" flex justify-center">
        <h1 className=" text-3xl font-semibold mb-8 ">Coding Concepts</h1>
        </div>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blast Off with Variables! 💫</h3>
                <p className="text-gray-600 ">Learn how to use variables to store important information for your spaceship missions. Just like astronauts use control panels to manage their spacecraft, you'll use variables to control your code. </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/variable"
                >
                  Begin
                </a>
                
               
              </div>  
            </div>
            
            <div className="bg-white shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Discover the Universe of Data Types! 🌌 </h3>
                <p className="text-gray-600 ">
                Just like astronauts need to understand different planets and stars, you'll learn about different kinds of information you can use in your code. From whole numbers to text, and true/false values, mastering data types is essential for making your programs smart and powerful.
                </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/types"
                >
                  Begin
                </a>
                
              </div>
              </div>

              <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blast Off with Coding Math Basics! 🚀</h3>
                <p className="text-gray-600 ">Discover how math powers up your programs! Just like rockets need precise calculations to soar into space, you'll learn how to use numbers, add, subtract, multiply, and more to make your code do incredible things! </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/math"
                >
                  Begin
                </a>
                
               
              </div>
            </div>
            
            <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Explore the Galaxy with Lists 📝 </h3>
                <p className="text-gray-600 ">Gather and organize your data like a pro astronaut collecting space samples. Learn how to store multiple pieces of information, access them easily, and perform out-of-this-world operations. </p>
              </div>
              <div className="flex justify-between items-center   p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/lists"
                >
                  Begin
                </a>
                
              </div>
              
            </div>

            <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Discover Loops! 🌠 </h3>
                <p className="text-gray-600 ">
                Master the power of repetition! Learn to use loops to make the rocket ship repeat actions and draw complex shapes easily.
                </p>
              </div>
              <div className="flex justify-between items-center   p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/loops"
                >
                  Begin
                </a>
               
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Explore Your Code with If Statements! ⭐️ </h3>
                <p className="text-gray-600 ">
                if statements help your program choose different actions based on certain conditions. Learn how to guide your code to respond smartly to different situations and make your programs more dynamic and interactive. Get ready to master the power of decision-making in coding!
                </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/conditionals"
                >
                  Begin
                </a>
                
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Boost your Rocket with Functions! 🎆</h3>
                <p className="text-gray-600 ">
                Just like rockets have engines to propel them forward, functions have blocks of code that perform specific tasks whenever you call them. Explore how to create functions, pass information to them, and get results back.
                </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/functions"
                >
                  Begin
                </a>
                
              </div>
            </div>
            <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Create Cosmic Art with Python Turtle! 🖌️ </h3>
                <p className="text-gray-600 ">Learn how to use Python Turtle to draw amazing pictures and patterns. Just like an astronaut explores space, you'll explore the endless possibilities of what you can create with code!</p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="concepts/drawing"
                >
                  Begin
                </a>
                
               
              </div>
            </div>

          </div>
          
        </section>
      </main>
    </>
   );
   }