
import Typewriter from 'typewriter-effect';

export default function Typing3() {
  

  return (
    <div
      className="  mx-2 p-2 overflow-y-auto h-96 mt-6   font-medium text-md overflow-hidden outline outline-1 outline-purple-400 rounded-md hover:bg-[#333] text-purple-400 text-start   "
      
    >
      <Typewriter
       options={{
         loop: false,
         delay: 10,
       }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`Sure, I can help you with that! Let's blast off into the world of Python Turtle Graphics and create a yellow sun using the Spaceship object. <br> <br> 
            Here's the code to make it happen:
            <br> <br> 
             
            spaceship.color("yellow"); <br>
            spaceship.shapesize(5); <br>

            spaceship.penup(); <br>
            spaceship.goto(0, -200); <br>
            spaceship.pendown(); <br>

            spaceship.begin_fill(); <br>
            spaceship.circle(200) 
            
            `)
            .start()
        }}
        
      />
    </div>
  );
}