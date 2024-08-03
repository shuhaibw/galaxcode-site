
import Typewriter from 'typewriter-effect';

export default function Typing1() {


   return (
      <div
         className=" mt-6  mx-2 p-2 hover:bg-[#333]  overflow-y-auto h-96    font-medium text-md overflow-hidden outline outline-1 outline-purple-400 rounded-md text-purple-400 text-start "

      >
         <Typewriter
            options={{
               loop: false,
               delay: 10,
            }}
            onInit={(typewriter) => {
               typewriter
                  .typeString(
                     `Ask me for: <br> <br>
            Hints to get you unstuck<br> <br>
            Tips to improve your coding skills<br> <br>
            Code optimization suggestions for efficiency and readability <br> <br>
            Error detection and corrections to fix mistakes <br> <br>
            Even fully corrected code if you're really struggling! <br> <br>
            I'm your AI coding assistant, Astro, and I'm here to guide you through any challenges you face with Python Turtle Graphics. Just ask me anything, and I'll do my best to assist you! `)
                  .start()
            }}

         />
      </div>
   );
}
