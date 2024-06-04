export default function Community(){
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
            <a className ="bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 text-gray-700" href="#">Community</a>
            <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="#">About Our AI Copilot</a>
         </nav>
       </header>

       </>
   );
   }