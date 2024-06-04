
export default function About(){
return(
   <>
     <header className="flex items-center justify-between
    bg-purple-900 text-white px-6 py-3 shadow-4xl ">
      <div className="flex items-center">
      <img src="../rocket.jpg" className="w-7 h-7 mr-2"></img>
      <h1 className="text-xl font-bold font-orbitron">GalaxCode</h1>
      </div>
      <nav className="flex flex-wrap md:pl-20 sm:pl-16 ">
         {/* add hrefs */}
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Home</a>
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Learn</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Code</a>
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Playground</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Community</a>
         <a className="bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 text-gray-700 " href="#">About Our AI Copilot</a>
      </nav>
    </header>
   <main>
     <section className="bg-gray-100   py-10 px-6 md:px-12 lg:px-20">
       <div className="max-w-6xl mx-auto">
         <div className="flex flex-col items-center mb-4 ">
           <h1 className="text-3xl font-bold">Meet Astro, Your AI Coding Assistant!</h1>
           <p className="text-[#475569] mt-2 mb-4">Our AI Copilot is Here to Help You Code with Python Turtle Graphics</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white shadow-md rounded-md p-6">
             <h3 className="text-xl font-bold mb-2">Get Unstuck with Hints and Tips</h3>
             <p className="text-[#475569]">
               Hints: If you're not sure what to do next, just ask for a hint. The AI will give you a gentle nudge in
               the right direction.
               <br />
               Tips: Learn better ways to approach your coding tasks with helpful tips.
             </p>
           </div>
           <div className="bg-white shadow-md rounded-md p-6">
             <h3 className="text-xl font-bold mb-2">Optimize Your Code</h3>
             <p className="text-[#475569]">
               Efficiency Suggestions: The AI can suggest ways to make your code run faster or use fewer lines.
               <br />
               Readability Improvements: Get tips on how to make your code easier to read and understand.
             </p>
           </div>
           <div className="bg-white shadow-md rounded-md p-6">
             <h3 className="text-xl font-bold mb-2">Find and Fix Mistakes</h3>
             <p className="text-[#475569]">
               Error Detection: The AI will point out any errors in your code, whether they are small typos or bigger
               logic mistakes.
               <br />
               Corrections: Not only will the AI highlight mistakes, but it will also suggest how to fix them.
             </p>
           </div>
           <div className="bg-white shadow-md rounded-md p-6">
             <h3 className="text-xl font-bold mb-2">Provide Corrected Code</h3>
             <p className="text-[#475569]">
               Corrections: When you're really stuck, the AI can show you the corrected code.
             </p>
           </div>
           <div className="bg-white shadow-md rounded-md p-6">
             <h3 className="text-xl font-bold mb-2">Start Exploring</h3>
             <p className="text-[#475569]">
               Experience our AI Coding Assistant as you complete our interactive challenges.
             </p>
             <div className="mt-4 flex justify-between items-center">
               <a
                 className="inline-flex items-center justify-center rounded-md border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-200 active:bg-white  disabled:pointer-events-none disabled:opacity-50"
                 href="#"
               >
                 Start Coding ->
                 
               </a>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section className="px-20 py-10 bg-gray-100"></section>
   </main>
 </>
);
}