
import Typewriter from 'typewriter-effect';

export default function Typing4() {
  

  return (
    <div
      className=" mt-6  hover:bg-[#333] mx-2 p-2  overflow-y-auto h-96  font-medium text-md overflow-hidden outline outline-1 outline-purple-400 rounded-md text-purple-400 text-start   "
      
    >
      <Typewriter
       options={{
         loop: false,
         delay: 10,
       }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`
            Whoops, it looks like your planet didn't quite turn out as planned! Don't worry, I'm here to help you. 
            <br> <br> Heres the corrected code:
            <br> <br>
            spaceship.color("blue"); <br>
            spaceship.penup(); <br>
            spaceship.pendown(); <br>
            spaceship.circle(100)
            
             `)
            .start()
        }}
        
      />
    </div>
  );
}