import Chat from "@/pages/chat/Chat"
import TurtleCanvas from "@/pages/Turtlecanvas/TurtleCanvas"
import Navbar from '@/components/Nav/navbar'
import Image from 'next/image'

const Playgroundpage = () => {
   return (
      <>
      <div className=" relative min-h-screen">

         <Navbar/>
         
         <Image className="w-full fixed top-0 z-[-1] " alt = "galaxy" src= '/thegalaxy.jpg' width = {1200} height = {1400}></Image>
        
         <div className=" absolute px-7 pt-14   w-full">
            <div className="text-center pt-8 ">
               <h1 className=" py-1 rounded-lg  bg-[#1f1f1f] shadow1  text-3xl font-bold text-white font-orbitron ">Welcome to the Cosmic Playground</h1>
            </div>

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-8 ">
               <div className="pt-7 ">
               
                     <TurtleCanvas/>
                 
               </div>

               <div className="pt-7">
                 
                     <Chat/>
                  
                </div> 
            </div>
         </div>
      </div>
        


      </>
   );
};
export default Playgroundpage;


