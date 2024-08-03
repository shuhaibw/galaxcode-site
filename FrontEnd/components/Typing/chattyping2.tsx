
import Typewriter from 'typewriter-effect';

export default function Typing2() {
  

  return (
    <div
      className=" mt-6 hover:bg-[#333]  mx-2 p-2 overflow-y-auto h-96  font-medium text-md overflow-hidden outline outline-1 outline-purple-400 rounded-md text-purple-400 text-start "
      
    >
      <Typewriter
       options={{
         loop: false,
         delay: 10,
       }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`The hint for Challenge 3 is as follows: <br> <br>

            Hint: <br> <br>
            Use the variables to draw Neptune and its ring.<br> <br> Remember to: <br> <br>
            - Use spaceship.penup() and spaceship.goto(x, y) to move the spaceship to the desired coordinates <br>
            - Use spaceship.pendown() to start drawing <br>
            - Use spaceship.color(variable_name) to set the color <br>
            - Use spaceship.circle(variable_name) to draw the planet and its ring <br>
            - Make sure to use the correct variables for the size and color of Neptune and its ring! <br>`)
            .start()
        }}
        
      />
    </div>
  );
}