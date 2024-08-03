import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Typing1 from '@/components/Typing/chattyping1'
import Typing2 from '@/components/Typing/chattyping2'
import Typing3 from '@/components/Typing/chattyping3'
import Typing4 from '@/components/Typing/chattyping4'
const ChatCarousel = () => {

   const [showTyping1, setShowTyping1] = useState(false)
   const [showTyping2, setShowTyping2] = useState(false)
   const [showTyping3, setShowTyping3] = useState(false)
   const [showTyping4, setShowTyping4] = useState(false)

   var settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
   }

   const handleButtonClick1 = () => {
      setShowTyping1(true);
   }
   const handleButtonClick2 = () => {
      setShowTyping2(true);
   }
   const handleButtonClick3 = () => {
      setShowTyping3(true);
   }
   const handleButtonClick4 = () => {
      setShowTyping4(true);
   }
   return (
      <div className=" px-10 pb-24   mx-10 mb-2    rounded-md outline outline-1.5 outline-purple-400     bg-[#242424]       ">
         <Slider {...settings}>
            <div className="h-96 relative  mb-4 ">
               <div>
                  {showTyping1 && <Typing1 />}
               </div>

               <div className="grid justify-center ml-16 absolute  mt-44">
                  <div className="ml-0.5">
                     <div className="  py-4  px-3  hover:bg-[#333]  rounded-md  bg-[#242424] outline outline-1 outline-purple-400   ">

                        <p className="text-lg  text-white font-medium ">What can you help me with, Astro?</p>

                     </div>
                     <div className="">
                        <button
                           onClick={handleButtonClick1}
                           className="   hover:bg-purple-500 px-3 mt-4 ml-32  h-10   rounded-md bg-purple-400  text-sm font-medium text-[#242424]   hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "

                        >

                           Ask Astro

                        </button>
                     </div>

                  </div>
               </div>
            </div>


            <div className=" h-96 relative  mb-4">
               <div>
                  {showTyping2 && <Typing2 />}
               </div>

               <div className="grid justify-center absolute  mt-44 ml-16">

                  <div className=" py-4 px-3 hover:bg-[#333]  rounded-md  bg-[#242424] outline outline-1 outline-purple-400     ">
                     <p className="text-lg text-white font-medium ">What is the hint for Challenge 3?</p>

                  </div>
                  <div className="">
                     <button
                        onClick={handleButtonClick2}
                        className=" hover:bg-purple-500 px-3  mt-4 ml-32 h-10   rounded-md bg-purple-400  text-sm font-medium text-[#242424]  transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "

                     >

                        Ask Astro

                     </button>
                  </div>

               </div>
            </div>

            <div className=" h-96 mb-4 relative ">

               <div>
                  {showTyping3 && <Typing3 />}
               </div>
               <div className="grid justify-center ml-16 absolute  mt-44">
                  <div className="ml-0.5">
                     <div className=" py-4 px-3  hover:bg-[#333] rounded-md  bg-[#242424] outline outline-1 outline-purple-400  ">
                        <p className="text-lg text-white font-medium">Can you help me code a yellow sun?</p>

                     </div>
                     <div className="">
                        <button
                           onClick={handleButtonClick3}
                           className=" hover:bg-purple-500 px-3 mt-4 ml-32 h-10   rounded-md bg-purple-400  text-sm font-medium text-[#242424]  transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "

                        >

                           Ask Astro

                        </button>

                     </div>
                  </div>
               </div>
            </div>

            <div className=" h-96 mb-4 relative">

               <div>
                  {showTyping4 && <Typing4 />}
               </div>
               <div className="grid justify-center ml-16 absolute  mt-32">
                  <div className="ml-0.5">
                     <div className=" py-4 px-14 hover:bg-[#333]  rounded-md  bg-[#242424] outline outline-1 outline-purple-400    ">
                        <p className="text-lg text-white font-medium">Can you correct my code:  <br></br>
                           spaceship.color("blue"); <br></br>
                           spaceship.circle(100); <br></br>
                           spaceship.penup()</p>

                     </div>
                     <div className=" ">
                        <button
                           onClick={handleButtonClick4}
                           className=" hover:bg-purple-500 px-3 mt-4 ml-32 h-10   rounded-md bg-purple-400  text-sm font-medium text-[#242424]  transition-colors hover:shadow1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "

                        >

                           Ask Astro

                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </Slider>
      </div>
   )
}
export default ChatCarousel