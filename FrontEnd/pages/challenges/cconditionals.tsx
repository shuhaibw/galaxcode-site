import Chat from "@/pages/chat/Chat"
import TurtleCanvas from "@/pages/Turtlecanvas/TurtleCanvas"
import Navbar from '@/components/Nav/navbar'

export default function If() {
   return (
      <>
         <Navbar/>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-24 p-8 bg-[#1a1a1a]">

            <div className="bg-[#1f1f1f] shadow1 rounded-xl p-8  flex flex-col  justify-start">

               <h2 className="text-3xl font-semibold text-white mb-4">Stellar If Statements Challenge</h2>
               <div className="bg-white rounded-xl p-6 ">
                  <h3 className="text-xl font-bold font-sans text-black mb-2">Welcome, young coders!</h3>
                  <p className="text-gray-800 mb-4">Today, you're going to add an if Statement to Control the while Loop. This challenge will test your understanding of if-statements in Python. Let's get started!</p>
                  <div className="bg-gray-100 shadow-md rounded-xl p-6 ">
                  <h4 className="text-lg font-semibold font-sans text-gray-800 mb-2">Challenge:</h4>
                     <p>Can you draw Jupiter using a conditional?</p>
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
                              Declare a boolean variable called "show_rings" and set it to either True or False;
                              </li>
                              <li>
                              Use an if statement to check the value of "show_rings";
                              </li>
                              <li>
                              If "show_rings" is True, draw Jupiter with rings using the following code:
                              </li>
                              <li className="list-none">
                                 <code className="text-sm">
                              spaceship.penup();
                              spaceship.goto(0, 0);
                              spaceship.pendown();
                              spaceship.color("#FFA07A"); 
                              spaceship.circle(100);
                              spaceship.circle(110);
                              </code>
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
                        Ask Astro for guidance. You can paste your code and ask for any type of help. You can also ask for challenge 6 hint or challenge 6 solution.
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