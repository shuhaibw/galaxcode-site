import Chat from "@/pages/chat/Chat"
import TurtleCanvas from "@/pages/Turtlecanvas/TurtleCanvas"
import Navbar from '@/components/Nav/navbar'

export default function Maths() {
   return (
      <>
         <Navbar/>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-24 p-8 bg-[#1a1a1a]">

            <div className="bg-[#1f1f1f] shadow1  rounded-xl p-8  flex flex-col  justify-start">

               <h2 className="text-3xl font-semibold text-white mb-4">Astro Math Challenge</h2>
               <div className="bg-white rounded-xl p-6 ">
                  <h3 className="text-xl font-bold font-sans text-black mb-2">Welcome, young coders!</h3>
                  <p className="text-gray-800 mb-4">Today, you'll learn about using coordinates to position your spaceship on a grid. Just like guiding your spaceship through space, understanding coordinates helps in precise positioning.</p>
                  <div className="bg-gray-100 shadow-md rounded-xl p-6 ">
                  <h4 className="text-lg font-semibold font-sans text-gray-800 mb-2">Challenge:</h4>
                     <p>Can you draw Neptune using variables and operations?</p>
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
                              Create variable neptune_size and multiply 20 by 2;
                              </li>
                              <li>
                              Create variable neptune_color and set it to "#0000FF" (deep blue);
                              </li>
                              <li>
                              Create variable neptune_ring_size and add 30 and 5;
                              </li>
                              <li>
                              Create variable neptune_ring_color and set it to "#ADD8E6" (light blue);
                              </li>
                              <li>
                              Draw Neptune at coordinates (10, 10) with size neptune_size and color neptune_color;
                              </li>
                              <li>
                              Draw Neptune's ring at coordinates (15, 5) with size neptune_ring_size and color
                              </li>
                              <li>
                              Draw Neptune at coordinates (10, 10) with size neptune_size and color neptune_color;
                              </li>
                              <li className=" font-medium list-none mt-2">
                              Note: The ring's coordinates may not be correct depending on what size you make the planet.
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
                        Ask Astro for guidance. You can paste your code and ask for any type of help. You can also ask for challenge 3 hint or challenge 3 solution.
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