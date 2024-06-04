import React from 'react';
import Typewriter from 'typewriter-effect'; 

export default function TypingEffect(){
return (
      <div className="font-sans font-semibold text-2xl text-white">
      <Typewriter
          options={{
              strings: [
                  'Start Your Space Adventure Now!',
                  'Command Your Spaceship with Code!',
                  'Bring Your Ideas to Life!',
                  'Paint the Sky with Python!',
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 40,
              pauseFor: 3000,
          }}
      />
  </div>
    );
  }
 
 
