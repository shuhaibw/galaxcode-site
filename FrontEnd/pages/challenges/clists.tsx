import Image from 'next/image'
import Chat from "@/pages/chat/Chat"
import TurtleCanvas from "@/pages/Turtlecanvas/TurtleCanvas"
import Navbar from '@/components/Nav/navbar'

export default function Arrays() {
   return (
      <>
         <Navbar/>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-24 p-8 bg-[#1a1a1a]">

            <div className="bg-[#1f1f1f] shadow1  rounded-xl p-8  flex flex-col  justify-start">

               <h2 className="text-3xl font-semibold text-white mb-4">Space Lists Challenge</h2>
               <div className="bg-white rounded-xl p-6 ">
                  <h3 className="text-xl font-bold font-sans text-black mb-2">Welcome, young coders!</h3>
                  <p className="text-gray-800 mb-4">Today, you're going to create a beautiful cosmic artwork using Python's turtle graphics. This challenge will test your understanding of lists and how to manage multiple pieces of information. Let's get started!</p>
                  <div className="bg-gray-100 shadow-md rounded-xl p-6 ">
                  <h4 className="text-lg font-semibold font-sans text-gray-800 mb-2">Challenge:</h4>
                     <p>Can you draw the planets in our solar system using turtle graphics and a list?</p>
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
                              Create a list called innerPlanets and add ["Mercury", 10, "red"] as the first item;
                              </li>
                              <li>
                              Add ["Venus", 15, "orange"] as the second item;
                              </li>
                              <li>
                              Add ["Earth", 40, "blue"] as the third item;
                              </li>
                              <li>
                              Add ["Mars", 30, "red"] as the fourth item;
                              </li>
                              <li className="list-none mt-2 font-medium">Use the list to:</li>
                              <div className="ml-4">
                              <li>Declare 3 variables at a time for each of the values (name, size, color) in the list</li>
                              <li>Draw one planet at a time and for each planet use the size and color variables in your code for drawing them.</li>
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
                        Ask Astro for guidance. You can paste your code and ask for any type of help. You can also ask for challenge 4 hint or challenge 4 solution.
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