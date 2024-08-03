import TypingEffect from "@/components/Typing/typing"
import Image from 'next/image'
import Navbar from '@/components/Nav/navbar'
import Link from 'next/link'
import Rocket from '@/components/Animations/rocket'
import ChatCarousel from '@/components/Carousel/ChatCarousel'

export default function Home() {



   return (
      <>
         <Navbar />

         <main className=" text-white bg-[#1a1a1a]">

            <section>
               <div className="flex justify-center pt-24">
                  <Image src="/astronaut.png" width="180" height="180" className=" mr-1 " alt="rocket" />
               </div>
               <div className="mt-3 text-center">
                  <h1 className="text-5xl font-bold font-orbitron ">Welcome to Galaxcode</h1>
                  <p className="text-3xl mt-4 mb-8 font-semi-bold font-spacemono  text-purple-400">Create Planetary Patterns with Every Line of Code!</p>
                  <TypingEffect></TypingEffect>
               </div>
               <div className="gap-3 flex  justify-center mt-10">
                  <Link
                     href="/main/learn"
                     className=" inline-flex h-10 items-center justify-center rounded-md bg-purple-400  px-8 text-sm font-medium text-[#1a1a1a] shadow transition-colors hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                     prefetch={false}
                  >
                     Start Learning
                  </Link>
                  <Link
                     href="/main/code"
                     className="inline-flex h-10  items-center rounded-md border border-[#666] bg-[#1a1a1a] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"
                     prefetch={false}
                  >
                     Explore Challenges
                  </Link>
               </div>
            </section>

            <section className="mt-16 mb-20">
               <div className="grid justify-center mx-14 pt-24 ">
                  <div className="inline-flex justify-center gap-40">
                     <Image className="rounded-md shadow-white" alt="kid1" src="/kid1.jpg" width={280} height={250}></Image>
                     <Image className="rounded-md" alt="kid2" src="/kid2.jpg" width={280} height={250}></Image>
                  </div>
                  <div className="mt-14 text-center">
                     <p className="font-bold text-white text-4xl mb-4">Galactic coding adventures for ages 9-16!</p>
                     <p className="font-medium text-white text-lg px-60"> Our interactive platform makes learning Python fun for young explorers, bringing code to life with dynamic graphics and drawings. </p>
                  </div>
               </div>
            </section>


            <section className="grid grid-cols-2   pb-16 items-center justify-center  pl-6 md:pl-12 lg:pl-20 bg-[#1a1a1a]  ">
               <div className="pt-32  ">
                  <h2 className="mb-4 text-4xl font-bold text-white">Learn in <span className="text-purple-400">40+ Languages</span></h2>
                  <p className="text-gray-300 text-lg pr-20">We will guide you through the interactive lessons in 40+ languages, teaching everything you need to know to take on challenges and master Python. From basics to advanced techniques, our step-by-step lessons will have you creating stunning animations and designs in no time.</p>
                  <Link
                     href="/main/learn"
                     className="hover:bg-purple-500 pl-3 mt-6 inline-flex h-10 items-center justify-center rounded-md bg-purple-400  text-sm font-medium text-[#1a1a1a]  transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                     prefetch={false}
                  >
                     Learn Now
                     <div className="transform rotate-180 pr-2 pl-3">
                        <div className="rotate-90">
                           <img
                              src="../down2.png"
                              className="w-2.5 h-1.5"
                              alt="Down arrow"
                           />
                        </div>
                     </div>
                  </Link>


               </div>

               <div className="flex items-center  ">
                  <div className="grid gap-8 mt-20 justify-center">
                     <div className=" py-2 grid gap-1 opacity-95    items-center rounded-md outline outline-1.5   outline-purple-400 bg-[#1a1a1a] pr-4 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"

                     >
                        <div className="inline-flex  items-center  ">
                           <div className="mb-7  mr-11">
                              <Image src="/check.png" width={22} height={22} alt="lock" className="absolute ml-2 mt-1" ></Image>
                           </div>
                           <div className="mb-1 relative ">
                              <p> Lists</p>
                              <div className="px-28 h-2 bg-purple-400  rounded-full mt-0.5"></div>
                           </div>
                        </div>

                     </div>
                     <div className=" py-1.5 grid gap-1 opacity-85  items-center rounded-md outline outline-1.5   outline-purple-400 bg-[#1a1a1a] pr-4 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"

                     >
                        <div className="inline-flex  items-center  ">
                           <div className="mb-10  mr-11">
                              <Image src="/whiterocket.png" width={41} height={40} alt="lock" className="absolute" ></Image>
                           </div>
                           <div className="mb-1 relative ">
                              <p> Loops</p>
                              <div className="px-28 h-2 bg-gray-700 absolute z-[-1] mt-0.5 rounded-full "></div>
                              <div className="px-20  h-2  rounded-full bg-purple-400 mt-0.5 ">

                              </div>

                           </div>



                        </div>

                     </div>


                     <div className=" py-2 grid gap-1 opacity-75   items-center rounded-md outline outline-1.5   outline-purple-400 bg-[#1a1a1a] pr-4 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"

                     >
                        <div className="inline-flex  items-center  ">
                           <div className="mb-10 mr-12">
                              <Image src="/scales.png" width={38} height={40} alt="lock" className="absolute ml-1 " ></Image>
                           </div>
                           <div className="mb-1 relative ">
                              <p> If-Statements</p>
                              <div className="px-28 h-2 bg-gray-700 absolute z-[-1] mt-0.5 rounded-full "></div>
                              <div className="px-16 h-2 bg-purple-400  rounded-full mt-0.5"></div>
                           </div>
                        </div>

                     </div>

                     <div className=" py-2 grid gap-1 opacity-60   items-center rounded-md outline outline-1.5   outline-purple-400 bg-[#1a1a1a] pr-4 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"

                     >
                        <div className="inline-flex  items-center  ">
                           <div className="mb-7  mr-11">
                              <Image src="/settings.png" width={22} height={22} alt="lock" className="absolute ml-3 mt-1" ></Image>
                           </div>
                           <div className="mb-1 relative ">
                              <p> Functions</p>
                              <div className="px-28 h-2 bg-gray-700 absolute z-[-1] mt-0.5 rounded-full "></div>
                              <div className="px-8 h-2 bg-purple-400  rounded-full mt-0.5"></div>
                           </div>
                        </div>

                     </div>

                     <div className=" py-2 grid gap-1 opacity-45   items-center rounded-md outline outline-1.5   outline-purple-400 bg-[#1a1a1a] pr-4 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"

                     >
                        <div className="inline-flex  items-center  ">
                           <div className="mb-7  mr-11">
                              <Image src="/lock2.png" width={50} height={40} alt="lock" className="absolute" ></Image>
                           </div>
                           <div className="mb-1 relative ">
                              <p> Drawing Cosmic Art</p>
                              <div className="px-28 h-2 bg-gray-700  rounded-full mt-0.5"></div>

                           </div>
                        </div>

                     </div>


                  </div>
                  <div className="ml-12 mt-11">
                     <Image src="/thearrow.png" width={41} height={40} alt="crown" className="absolute rotate-180 " ></Image>
                  </div>

                  <div className="ml-20 mt-20 opacity-95 rounded-md outline outline-2   outline-purple-400 bg-[#1a1a1a] pr-10 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-purple-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-purple-400/50"

                  >
                     <div className=" grid items-center  ">
                        <div className="  pr-14 flex items-center">
                           <Image src="/crown.png" width={42} height={40} alt="crown"  ></Image>
                           <p className="mt-0.5"> Python Master</p>
                        </div>
                        <div className="mb-3.5 relative ml-3">

                           <div className="w-52 h-2 bg-gray-700 absolute z-[-1]  rounded-full "></div>
                           <div className="w-24 h-2 bg-purple-400  rounded-full "></div>
                        </div>
                     </div>

                  </div>
               </div>



            </section>



            <section className="grid grid-cols-2 gap-14 pb-28  px-6 md:px-12 lg:px-20 bg-[#1a1a1a]  ">
               <Rocket />

               <div className="pt-32">
                  <h2 className="mb-4 text-4xl font-bold text-white">Cosmic Quests</h2>
                  <p className="text-gray-300 text-lg pr-20">Command Your Rocket with Python! Complete exciting challenges, create stunning space art, and lead your crew through the galaxy!</p>
                  <Link
                     href="/main/code"
                     className="hover:bg-purple-500 pl-3 mt-6 inline-flex h-10 items-center justify-center rounded-md bg-purple-400  text-sm font-medium text-[#1a1a1a]  transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                     prefetch={false}
                  >
                     Start Missions
                     <div className="transform rotate-180 pr-2 pl-3">
                        <div className="rotate-90">
                           <img
                              src="../down2.png"
                              className="w-2.5 h-1.5"
                              alt="Down arrow"
                           />
                        </div>
                     </div>
                  </Link>


               </div>

            </section>

            <section className="grid grid-cols-2 gap-14 pb-28 mt-16   px-6 md:px-12 lg:px-20 bg-[#1a1a1a]  ">

               <div className="pt-44">
                  <h2 className="mb-4 text-4xl font-bold text-white"><span className="text-purple-400">Meet Astro,</span> Your AI assistant</h2>
                  <p className="text-gray-300 text-lg pr-20">Astro is here to guide you through the challenges, providing hints, answers, and helping you create amazing drawings with Python Graphics. With Astro by your side, the possibilities are endless!</p>
                  <Link
                     href="/main/playground"
                     className="hover:bg-purple-500 pl-3 mt-6 inline-flex h-10 items-center justify-center rounded-md bg-purple-400  text-sm font-medium text-[#1a1a1a]  transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                     prefetch={false}
                  >
                     Launch Astro
                     <div className="transform rotate-180 pr-2 pl-3">
                        <div className="rotate-90">
                           <img
                              src="../down2.png"
                              className="w-2.5 h-1.5"
                              alt="Down arrow"
                           />
                        </div>
                     </div>
                  </Link>


               </div>
               <ChatCarousel />

            </section>






            <section>
               <div className="grid justify-center items-center mt-10">
                  <h2 className="text-white font-bold text-4xl">Ready to Command Your Rocket?  </h2>
                  <p className="text-white text-lg text-center font-medium pt-5"><span className="text-purple-400">Explore Python</span> and create stunning  <span className="text-purple-400">planetary designs.</span></p>
                  <Link
                     href="/main/learn"
                     className="hover:bg-purple-500 pl-3 mt-4 mx-64 mb-16 inline-flex h-10 items-center justify-center rounded-md bg-purple-400  text-sm text-black font-medium   transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                     prefetch={false}
                  >
                     Start Now
                     <div className="transform rotate-180 pr-2 pl-3">
                        <div className="rotate-90">
                           <img
                              src="../down2.png"
                              className="w-2.5 h-1.5"
                              alt="Down arrow"
                           />
                        </div>
                     </div>
                  </Link>
               </div>
            </section>










         </main>

         <footer>
            <div className="flex items-center justify-center py-1.5 bg-[#1a1a1a] text-white  outline outline-1 outline-white shadow1">
               <Image src="/astronaut.png" width="48" height="48" className=" mr-1" alt="rocket" />
               <div className="text-xl font-bold font-orbitron ">GalaxCode</div>
            </div>
         </footer>


      </>
   );
}
