
export default function Playground(){
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
           <a className ="bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 text-gray-700" href="#">Playground</a>
           <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="#">Community</a>
           <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="#">About Our AI Copilot</a>
        </nav>
      </header>

      

{/* add imported image */}

<div className="w-full p-8 mx-auto h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(../thegalaxy.jpg)' }}>
<div className="text-center mb-8 ">
    <h1 className=" py-1 rounded-lg  bg-gradient-to-br from-violet-700 to-[#0f172a]  text-3xl font-bold text-white font-orbitron ">Welcome to the Cosmic Playground</h1>
</div>
  <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-7 w-full">
    <div className=" bg-gradient-to-br from-violet-700 to-[#0f172a] rounded-xl overflow-hidden  p-8 md:p-10 lg:p-10">
      
        <h2 className=" ml-6 mb--2 text-3xl font-semibold text-white ">Drawing Canvas</h2>
      
      <div className="p-4 flex-1 ">
        <div className="aspect-[16/9] bg-white rounded-xl mb-6"></div>
        <textarea
          placeholder="Enter your code here..."
          className="bg-gray-100 rounded-lg p-4 text-base text-gray-900 resize-none w-full mb-4 focus:outline-violet-500"
          rows={7}
        />
        <button className="bg-gray-100 w-full hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-semibold py-2  rounded-lg">Run Code</button>
      </div>
    </div>
    <div className="bg-gradient-to-br from-violet-700 to-[#0f172a]  rounded-lg overflow-hidden  p-8 md:p-8 lg:p-66 flex flex-col ">
      
        <h2 className="text-3xl text-white font-semibold">Ask Astro</h2>
      
      <div className="p-90 mt-4 flex-1 flex flex-col gap-5">
        <div className="bg-white rounded-lg p-4 text-base text-gray-900 flex-1 overflow-auto" id="ai-answer">
          <p className="text-gray-900">AI's answer will appear here...</p>
        </div>
        <textarea
          placeholder="Enter your question here..."
          className="bg-gray-100 rounded-lg p-4 text-base text-gray-900 resize-none  flex-shrink-0 focus:outline-violet-500"
          rows={6}
          id="ai-question"
        />
        <button className="bg-gray-100 w-full hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-semibold py-3  rounded-lg ">Ask Astro</button>
        {/* removed a onClick={clearChat} from button below */}
        <button className="bg-gray-100 w-full hover:bg-gray-200 active:bg-gray-100 text-gray-700 font-semibold py-3  rounded-lg" >Clear Chat</button>
      </div>
    </div>
  </div>
</div>

{/*  
<script>
  function clearChat() {
    document.getElementById('ai-answer').innerHTML = '<p class="text-white">AI\'s answer will appear here...</p>';
    document.getElementById('ai-question').value = '';
  }
</script>
*/}
    </>
  );
};


