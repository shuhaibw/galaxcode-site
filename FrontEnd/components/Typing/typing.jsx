import { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
  const [currentText, setCurrentText] = useState('');

  return (
    <div
      className="font-semibold text-2xl py-2 px-2 rounded-md bg-purple-400 "
      style={{  display: 'inline-block', paddingRight: `${currentText.length * 15}px`, transition: 'padding-right 0.1s' }}
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(70)
            .changeDeleteSpeed(40)
            
            .typeString('Start Your Space Adventure Now!')
            .callFunction(() => setCurrentText(''))
            .pauseFor(3000)
            .deleteAll()
            .typeString('Command Your Spaceship with Code!')
            .callFunction(() => setCurrentText(''))
            .pauseFor(3000)
            .deleteAll()
            .typeString('Bring Your Ideas to Life!')
            .callFunction(() => setCurrentText(''))
            .pauseFor(3000)
            .deleteAll()
            .typeString('Paint the Sky with Python!')
            .callFunction(() => setCurrentText(''))
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
        options={{
          loop: true,
          delay: 70,
          deleteSpeed: 40,
          onStringTyped: (char, instance) => {
            const currentString = instance.strings[instance.arrayPos];
            const typedLength = instance.position + 1;
            setCurrentText(currentString.substring(0, typedLength));
          },
        }}
      />
    </div>
  );
}

