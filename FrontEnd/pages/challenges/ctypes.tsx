import Chat from "@/pages/chat/Chat"
import TurtleCanvas from "@/pages/Turtlecanvas/TurtleCanvas"
import Navbar from '@/components/Nav/navbar'

export default function type() {
   return (
      <>
         <Navbar/>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full  p-8 pt-24 bg-[#1a1a1a]">

            <div className="bg-[#1f1f1f] shadow1 rounded-xl p-8  flex flex-col  justify-start">

               <h2 className="text-3xl font-semibold text-white mb-4">Galactic Data Types Challenge</h2>
               <div className="bg-white rounded-xl p-6 ">
                  <h3 className="text-xl font-bold font-sans text-black mb-2">Welcome, young coders!</h3>
                  <p className="text-gray-800 mb-4"> Today, you'll embark on a journey to explore different data types in Python. Just like classifying space objects, understanding data types helps make your space programs smart and efficient.</p>
                  
                  <div className="bg-gray-100 shadow-md rounded-xl p-6 ">
                     <h4 className="text-lg font-semibold font-sans text-gray-800 mb-2">Challenge:</h4>
                     <p>Can you draw Jupiter's rings using all the data types?</p>
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
                              <li>
                              Create an integer variable num_rings to store the number of rings (e.g., 5)
                              </li>
                              <li>
                              Create a float variable ring_radius to store the radius of each ring (e.g., 50.5 units)
                              </li>
                              <li>
                              Create a string variable ring_color to store the color of the rings (e.g., "lightblue")
                              </li>
                              <li>
                              Create a boolean variable filled to store whether the rings should be filled with color (e.g., True)
                              </li>
                              <li>
                              Use these variables to draw Jupiter's rings in a circular motion
                              </li>
                           </ul>
                        </li>

                        <li className="mt-4">
                           <span className="font-medium">Colors:</span>

                           <ul className="list-disc ml-8 grid grid-cols-1 gap-1">
                              <li>
                              Use #d8ca9d for a light brown color.
                              </li>
                              <li>
                              Use #a59186 for a dark brown color.
                              </li>
                              <li>
                              Use #c99039 for an orange color.
                              </li>
                           </ul>
                        </li>             

                     </ol>
                  </div>
               </div>

               <div className="bg-[#1f1f1f]  rounded-xl p-8 mt-8">

                  <h2 className="text-3xl font-semibold text-white mb-4 ">Guidance</h2>
                  <div className="bg-white rounded-xl p-6  ">
                     <p className="text-gray-800 font-medium">
                        Ask Astro for guidance. You can paste your code and ask for any type of help. You can also ask Astro for challenge 2 hint or challenge 2 solution.
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