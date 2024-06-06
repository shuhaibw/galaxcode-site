import Image from 'next/image'

export default function Code(){ 

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
         <a className ="hover:bg-gray-100  px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="learn">Learn</a>
         <a className ="bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 text-gray-700" href="code">Code</a>
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="playground">Playground</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="community">Community</a>
         <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="about">About Our AI Copilot</a>
      </nav>
    </header>
   
       <main>
        <section className="bg-gray-100   py-10 px-6 md:px-12 lg:px-20 ">
        
        <div className=" flex justify-center">
        <h1 className=" text-3xl font-semibold mb-8 ">Challenges</h1>
        </div>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cosmic Variables Challenge </h3>
                <p className="text-gray-600 ">Use variables to store crucial data for your space missions. Just like astronauts control their spacecraft, manage your code with variables to succeed in your mission. </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/cvariable"
                >
                 Start Challenge
                </a>
                
               
              </div>  
            </div>
            
            <div className="bg-white shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Galactic Data Types Challenge</h3>
                <p className="text-gray-600 ">
                Understand different kinds of data to classify space objects. From whole numbers to text and true/false values, use data types to make your space programs smart and efficient.
                </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/ctypes"
                >
                  Start Challenge
                </a>
                
              </div>
              </div>

              <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Astro Math Challenge </h3>
                <p className="text-gray-600 ">Use math to power your space journey! Perform calculations like addition, subtraction, and multiplication to navigate through space and achieve your objectives. </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/cmath"
                >
                 Start Challenge
                </a>
                
               
              </div>
            </div>
            
            <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Space Lists Challenge </h3>
                <p className="text-gray-600 ">Organize data like a space explorer gathering samples. Learn to store multiple pieces of information and perform stellar operations with lists. </p>
              </div>
              <div className="flex justify-between items-center   p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/clists"
                >
                  Start Challenge
                </a>
                
              </div>
              
            </div>

            <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Orbital Loops Challenge</h3>
                <p className="text-gray-600 ">
                Master loops to repeat actions and draw complex space shapes. Use loops to simplify your coding tasks and create stunning patterns.
                </p>
              </div>
              <div className="flex justify-between items-center   p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/cloops"
                >
                 Start Challenge
                </a>
               
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Stellar If Statements Challenge </h3>
                <p className="text-gray-600 ">
                Guide your code to make decisions with if statements. Make your programs dynamic and interactive by responding to different space conditions.
                </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/cconditionals"
                >
                  Start Challenge
                </a>
                
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Celestial Functions Challenge</h3>
                <p className="text-gray-600 ">
                Create functions to perform specific tasks during your space missions. Learn to organize and reuse your code efficiently by creating powerful functions.
                </p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/cfunctions"
                >
                  Start Challenge
                </a>
                
              </div>
            </div>
            <div className="bg-white  shadow-md rounded-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cosmic Art Challenge </h3>
                <p className="text-gray-600 ">Use Python Turtle to draw stunning space-themed art. Explore the endless creative possibilities and create your own cosmic masterpieces with code.</p>
              </div>
              <div className="flex justify-between items-center  p-4">
              <a
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors
                   hover:bg-gray-100 hover:text-gray-900 hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50  "
                  href="challenges/cdrawing"
                >
                  Start Challenge
                </a>
                
               
              </div>
            </div>
            
          </div>
          
        </section>
      </main>
       </>
   );
   }