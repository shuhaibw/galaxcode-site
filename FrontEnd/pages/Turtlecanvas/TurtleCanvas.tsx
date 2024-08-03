import { useState } from 'react';
import { runCodeApi } from '@/pages/api/canvasapi';


const TurtleCanvas = () => {
 const [imageSrc, setImageSrc] = useState<string | null>(null);
 const [code, setCode] = useState('');


 const runCode = async () => {
   try {
     const codeString = code.trim();
     const body = JSON.stringify({ code: codeString });
     const response = await runCodeApi(body, codeString);


     setImageSrc(response);
   } catch (error) {
     console.error('Error running code:', error);
   }
 };

 

 return (
   <>
   <div className="bg-[#1f1f1f] shadow1 rounded-xl pt-6 pl-8 pr-8 pb-8 ">
     <h2 className="text-3xl font-semibold text-white mb-4 ">Drawing Canvas</h2>
     <div className="bg-white rounded-xl lg:pb-44 md:pb-2 sm:pb-2 ">
       {imageSrc && <img src={imageSrc} alt="Turtle Graphics" className="w-full h-[300px]" />}
     </div>
     <div className="grid mt-4">
       <textarea
         className="bg-gray-100 pb-28 rounded-lg p-4 text-gray-900 font-sourcecode flex-1 focus:outline-purple-400"
         placeholder="spaceship.circle(100)"
         value={code}
         onChange={(e) => setCode(e.target.value)}
       />
     </div>
     <div className="mt-4 grid">
       <button
         className="bg-gray-100 w-full hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-medium py-2 mt-1 rounded-lg"
         onClick={runCode}
       >
         Run Code
       </button>
     </div>
     </div>
   </>
 );
};


export default TurtleCanvas;




