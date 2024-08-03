import Navbar from '@/components/Nav/navbar'
import Begin from '@/components/Buttons/begin'

export default function Learn() {
   return (
      <>
         <Navbar/>

         <main className="relative">
            <section className="bg-[#1a1a1a]  pt-24   px-6 md:px-12 lg:px-20 ">

               <div className=" flex justify-center">
                  <h1 className=" text-3xl font-semibold mb-8 text-white ">Coding Concepts</h1>
               </div>
               <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  <div className="bg-[#1f1f1f] text-gray-100 shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Blast Off with Variables! 💫</h3>
                        <p className=" ">Learn how to use variables to store important information for your spaceship missions. Just like astronauts use control panels to manage their spacecraft, you'll use variables to control your code. </p>
                     </div>
                     <Begin href="/concepts/variable"></Begin>
                  </div>

                  <div className="bg-[#1f1f1f] text-gray-100 shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Discover the Universe of Data Types! 🌌 </h3>
                        <p className=" ">
                           Just like astronauts need to understand different planets and stars, you'll learn about different kinds of information you can use in your code. From whole numbers to text, and true/false values, mastering data types is essential for making your programs smart and powerful.
                        </p>
                     </div>
                     <Begin href="/concepts/types"></Begin>
                  </div>

                  <div className="bg-[#1f1f1f] text-gray-100 shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Blast Off with Coding Math Basics! 🚀</h3>
                        <p className=" ">Discover how math powers up your programs! Just like rockets need precise calculations to soar into space, you'll learn how to use numbers, add, subtract, multiply, and more to make your code do incredible things! </p>
                     </div>
                     <Begin href="/concepts/math"></Begin>
                  </div>

                  <div className="bg-[#1f1f1f] text-gray-100 shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Explore the Galaxy with Lists 📝 </h3>
                        <p className=" ">Gather and organize your data like a pro astronaut collecting space samples. Learn how to store multiple pieces of information, access them easily, and perform out-of-this-world operations. </p>
                     </div>
                     <Begin href="/concepts/lists"></Begin>

                  </div>

                  <div className="bg-[#1f1f1f] text-gray-100  shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Discover Loops! 🌠 </h3>
                        <p className=" ">
                           Master the power of repetition! Learn to use loops to make the rocket ship repeat actions and draw complex shapes easily.
                        </p>
                     </div>
                     <Begin href="/concepts/loops"></Begin>
                  </div>

                  <div className="bg-[#1f1f1f] text-gray-100 shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Explore Your Code with If Statements! ⭐️ </h3>
                        <p className=" ">
                           if statements help your program choose different actions based on certain conditions. Learn how to guide your code to respond smartly to different situations and make your programs more dynamic and interactive. Get ready to master the power of decision-making in coding!
                        </p>
                     </div>
                     <Begin href="/concepts/conditionals"></Begin>
                  </div>
                  <div className="bg-[#1f1f1f] text-gray-100 shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Boost your Rocket with Functions! 🎆</h3>
                        <p className=" ">
                           Just like rockets have engines to propel them forward, functions have blocks of code that perform specific tasks whenever you call them. Explore how to create functions, pass information to them, and get results back.
                        </p>
                     </div>
                     <Begin href="/concepts/functions"></Begin>
                  </div>
                  <div className="bg-[#1f1f1f] text-gray-100  shadow1 rounded-md">
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Create Cosmic Art with Python Turtle! 🖌️ </h3>
                        <p className=" ">Learn how to use Python Turtle to draw amazing pictures and patterns. Just like an astronaut explores space, you'll explore the endless possibilities of what you can create with code!</p>
                     </div>
                     <Begin href="/concepts/drawing"></Begin>
                  </div>

               </div>

            </section>
         </main>
      </>
   );
}