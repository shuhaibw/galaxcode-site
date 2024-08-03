import Chat from "@/pages/chat/Chat"
import TurtleCanvas from "@/pages/Turtlecanvas/TurtleCanvas"
import Navbar from '@/components/Nav/navbar'

export default function Var() {
   return (
      <>
         <Navbar/>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-24 p-8 bg-[#1a1a1a]" >

            <div className=" bg-[#1f1f1f] shadow1  rounded-xl p-8  flex flex-col  justify-start">

               <h2 className="text-3xl font-semibold text-white mb-4">Cosmic Variables Challenge</h2>
               <div className="bg-white rounded-xl p-6 ">
                  <h3 className="text-xl font-bold font-sans text-black mb-2">Welcome, young coders!</h3>
                  <p className="text-gray-800 mb-4">Today, you're going to take control of your spaceship and draw two cosmic shapes in the sky: a star and a planet. This challenge will test your understanding of variables in Python. Let's get started!</p>
                  <div className="bg-gray-100 shadow-md rounded-xl p-6 ">
                  <h4 className="text-lg font-semibold font-sans text-gray-800 mb-2">Challenge:</h4>
                     <p>Can you draw a galaxy with 3 planets and 5 stars using variables?</p>
                     <ol className="list-decimal font-sans list-inside text-gray-800">
                        <li className="mt-4">

                           <span className="font-medium  ">Rules:</span>

                           <ul className="list-disc ml-8 grid grid-cols-1 gap-1 ">
                              
                              <li>
                              Use semicolons after each line
                              </li>
                              <li>
                              If indenting is needed, use four spaces
                              </li>
                              <li>
                              Use spaceship as the object 
                              </li>
                           </ul>
                        </li>

                        {/* big list item */}
                        <li className="mt-4">
                           <span className="font-medium">Instructions:</span>
                           <ul className="list-disc ml-8 grid grid-cols-1 gap-1">
                              <li className="list-none font-medium">Create variables for: </li>
                              <div  className="ml-6">
                              <li>
                              Galaxy size (set to 600 units)
                              </li>
                              <li>
                              Star color (e.g., "yellow")
                              </li>
                              <li>
                              Planet 1 size (e.g., 50 units) and color (e.g., "#FF0000" for red)
                              </li>
                              <li>
                              Planet 2 size (e.g., 30 units) and color (e.g., "#00FF00" for green)

                              </li>
                              <li>
                              Planet 3 size (e.g., 20 units) and color (e.g., "#0000FF" for blue)
                              </li>
                              </div>

                              <li className="list-none font-medium mt-2">Use the variables for: </li>
                           <div  className="ml-6">
                           <li>
                              A galaxy with the specified size (do this by using spaceship.circle('the galaxy size variable name'))
                           </li>
                              <li>
                              5 stars with the specified color
                              </li>
                              <li>
                              3 planets with the specified sizes and colors
                              </li>
                              </div>
                           </ul>
                          
                        </li>           

                     </ol>

                  </div>

               </div>

               <div className="bg-[#1f1f1f]  rounded-xl p-8 mt-8">

                  <h2 className="text-3xl font-semibold text-white mb-4 ">Guidance</h2>
                  <div className="bg-white rounded-xl p-6  ">
                     <p className="text-gray-800 font-medium">
                        Ask Astro for guidance. You can paste your code and ask for any type of help. You can also ask for challenge 1 hint or challenge 1 solution.
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col justify-start ">
               <div>
                  <TurtleCanvas/>
               </div>

               <div className="mt-7">
                  <Chat/>
               </div>
            </div>  

         </div>

      </>
   );
}