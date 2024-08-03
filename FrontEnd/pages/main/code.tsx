import Navbar from '@/components/Nav/navbar'
import Start from '@/components/Buttons/start'

export default function Code() {

   return (
      <>
         <Navbar/>
         
         <main>
            <section className="bg-[#1a1a1a]   pt-24  px-6 md:px-12 lg:px-20 ">

               <div className=" flex justify-center">
                  <h1 className=" text-3xl font-semibold mb-8 text-gray-100  ">Challenges</h1>
               </div>
               <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  <div className="bg-[#1f1f1f] shadow1   rounded-md">
                     <div className="p-6 text-gray-100">
                        <h3 className="text-xl font-bold mb-2  ">Cosmic Variables Challenge</h3>
                        <p className=" ">Use variables to store crucial data for your space missions. Just like astronauts control their spacecraft, manage your code with variables to succeed in your mission. </p>
                     </div>

                     <Start href="/challenges/cvariable"></Start>   
                  </div>

                  <div className="bg-[#1a1a1a] shadow1  rounded-md">
                     <div className="p-6 text-gray-100">
                        <h3 className="text-xl font-bold mb-2 ">Galactic Data Types Challenge</h3>
                        <p className=" ">
                           Understand different kinds of data to classify space objects. From whole numbers to text and true/false values, use data types to make your space programs smart and efficient.
                        </p>
                     </div>
                     <Start href="/challenges/ctypes"></Start>   
                  </div>

                  <div className="bg-[#1f1f1f]  shadow1  rounded-md">
                     <div className="p-6 text-gray-100">
                        <h3 className="text-xl font-bold mb-2">Astro Math Challenge </h3>
                        <p className=" ">Use math to power your space journey! Perform calculations like addition, subtraction, and multiplication to navigate through space and achieve your objectives. </p>
                     </div>
                     <Start href="/challenges/cmath"></Start>   
                  </div>

                  <div className="bg-[#1f1f1f]   shadow1  rounded-md">
                     <div className="p-6 text-gray-100">
                        <h3 className="text-xl font-bold mb-2">Space Lists Challenge </h3>
                        <p className=" ">Organize data like a space explorer gathering samples. Learn to store multiple pieces of information and perform stellar operations with lists. </p>
                     </div>
                     <Start href="/challenges/clists"></Start>   

                  </div>

                  <div className="bg-[#1f1f1f]  shadow1 text-gray-100  rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Orbital Loops Challenge</h3>
                        <p className=" ">
                           Master loops to repeat actions and draw complex space shapes. Use loops to simplify your coding tasks and create stunning patterns.
                        </p>
                     </div>
                     <Start href="/challenges/cloops"></Start>   
                  </div>

                  <div className="bg-[#1f1f1f] text-gray-100 shadow1  rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Stellar If Statements Challenge </h3>
                        <p className=" ">
                           Guide your code to make decisions with if statements. Make your programs dynamic and interactive by responding to different space conditions.
                        </p>
                     </div>
                     <Start href="/challenges/cconditionals"></Start>   
                  </div>
                  <div className="bg-[#1f1f1f] text-gray-100 shadow1  rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Celestial Functions Challenge</h3>
                        <p className=" ">
                           Create functions to perform specific tasks during your space missions. Learn to organize and reuse your code efficiently by creating powerful functions.
                        </p>
                     </div>
                     <Start href="/challenges/cfunctions"></Start>   
                  </div>
                  <div className="bg-[#1f1f1f] text-gray-100  shadow1  rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Cosmic Art Challenge </h3>
                        <p className=" ">Use Python Turtle to draw stunning space-themed art. Explore the endless creative possibilities and create your own cosmic masterpieces with code.</p>
                     </div>
                     <Start href="/challenges/cdrawing"></Start>   
                  </div>
                 
               </div>

            </section>
         </main>
      </>
   );
}