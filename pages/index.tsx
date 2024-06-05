import TypingEffect from "@/components/typing"


export default function Home() {
  return (
   <>
   

   <header className="flex items-center justify-between
    bg-purple-900 text-white px-6 py-3 shadow-4xl ">
      <div className="flex items-center">
      <img src="../rocket.jpg" className="w-7 h-7 mr-2"></img>
      <h1 className="text-xl font-bold font-orbitron">GalaxCode</h1>
      </div>
      <nav className="flex flex-wrap md:pl-20 sm:pl-16 ">
         {/* add hrefs */}
         <a className ="bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 text-gray-700" href="/">Home</a>
         <a className ="hover:bg-gray-100  px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="learn">Learn</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="code">Code</a>
         <a className ="hover:bg-gray-200 px-2 py-1 rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="playground">Playground</a>
         <a className ="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-6 hover:text-gray-700" href="community">Community</a>
         <a className="hover:bg-gray-200 px-2 py-1  rounded-sm text-sm  font-spacemono mr-2 hover:text-gray-700 " href="about">About Our AI Copilot</a>
      </nav>
    </header>
   
   <main>
   <section className="relative text-white py-20 md:px-12 lg:px-20 bg-cover bg-center" style={{backgroundImage: "url('../universe.jpg')"}}>
    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 bg-black bg-opacity-40 p-6 rounded-lg">
        <h1 className="text-4xl font-bold font-orbitron">Welcome to GalaxCode</h1>
        <p className="font-spacemono text-lg">Create Planetary Patterns with Every Line of Code! Learn to code with Python Turtle Graphics and explore the beauty of the cosmos.</p>
        <div className="flex justify-center gap-4 text-white">
            <a className="cursor-pointer px-6 py-3 rounded-md bg-violet-700 text-sm transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg active:bg-violet-600" href="learn">Learn</a>
            <a className="cursor-pointer px-6 py-3 rounded-md bg-gray-700  text-sm transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg active:bg-gray-600" href="code">Start Coding</a>
        </div>
    </div>
    <div className="absolute inset-0 "></div>
</section>


      <section className="grid grid-cols-2 gap-12 py-16 px-6 md:px-12 lg:px-20 bg-violet-500">
         <div className="space-y-6 text-shadow shadow-xl rounded-xl pl-2 pr-5 pb-5">
               
               <TypingEffect></TypingEffect>
            
            <p  className="text-white ">Dive into the world of coding with Python Turtle Graphics, a fun and 
            interactive way for kids to learn programming! Using the popular and powerful Python
             programming language, we teach young learners to draw planetary shapes and explore the wonders of space through 
             code. By writing simple instructions, kids can create colorful drawings, intricate patterns, and exciting 
             animations inspired by the cosmos.
            <br></br>
            <br></br>
            Our approach not only introduces important coding concepts such as loops, conditionals, and 
            functions but also stimulates creativity and problem-solving skills. Throughout the learning process, we guide our 
            young coders with clear examples and engaging challenges, ensuring they understand each concept fully. As they 
            draw swirling Jupiter storms, Saturn's rings, or Martian landscapes, they'll build a strong foundation in 
            programming that will benefit their future learning and career opportunities.
            </p>
           
         </div>
         {/* change image */}
         <img
            alt="Python Turtle Graphics"
            className="rounded-xl shadow-xl"
            height="400"
            src="../turtle-star.png"
            style={{
              aspectRatio: "500/400",
              objectFit: "cover",
            }}
            width="500"
          />
      </section>

      <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="text-shadow shadow-xl p-6 rounded-xl">
            <h2 className="font-bold text-2xl">Interactive Challenges</h2>
                    
               <p className="text-[#475569] mt-2">Click on the 'Code' tab to begin exciting adventures where you'll apply your newfound coding knowledge through Python graphics. Explore, learn, and conquer challenges that will sharpen your programming abilities while having fun along the way.</p> 
          </div>

          <div className="text-shadow shadow-xl p-6 rounded-xl">
            <h2 className="font-bold text-2xl">Explore Your Skills</h2>
            <p className="text-[#475569] mt-2">Unleash your creativity at the Coding Playground! Here, you can explore their coding skills by drawing anything they imagine. With Python graphics, the possibilities are endless.</p>
          </div>
          
          <div className="text-shadow shadow-xl p-6 rounded-xl">
            <h2 className="font-bold text-2xl">Learn in 100+ Languages</h2>
            <p className="text-[#475569] mt-2">Our Learn page and AI assistant are available in 100+ languages, making our site available to an extensive audience.</p>
          </div>
          <div className="text-shadow shadow-xl p-6 rounded-xl">
            <h2 className="font-bold text-2xl "> AI Coding Assistant</h2>
            <p className="text-[#475569] mt-2 pr-16  ">Astro, Our AI-powered coding assistant, enhances the learning experience by providing helpful suggestions, corrections, and code snippets.</p>
            
          </div>
          
          </div>
      </section>

      <section className="bg-violet-500 py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 ">
                <h3 className="text-xl font-bold mb-4 text-black">Our Mission</h3>
                <ul className="space-y-2">
                  <li>
                    <p className=" text-[#475569]" >
                    Our mission is to ignite a passion for coding in kids by making learning fun, engaging, and accessible. We aim to empower young minds to explore the limitless possibilities of technology through interactive challenges, creative projects, and a supportive community. Join us in building the next generation of innovators and problem-solvers!
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-black">Upcoming Workshops</h3>
                <ul className="space-y-2">
                  <li>
                    <p className=" text-[#475569]" >
                    Join us for exciting workshops in Fremont, CA, hosted at the IKIC Community Center. These workshops are designed to inspire and educate young coders with one-on-one learning and engaging projects.
                    </p>
                   <p className=" text-gray-600 mt-5">Upcoming:</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-black">Why Learn Python Turtle?</h3>
                <ul className="space-y-2">
                  <li>
                    <p className=" text-[#475569]" >
                    Discover the joy of coding with Python Turtle! It's a fun and interactive way to learn programming concepts while creating amazing visual art. Perfect for beginners, Python Turtle helps you understand the basics of Python and develop problem-solving skills, all while having a blast drawing shapes and patterns.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-black">Contact Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a className=" text-[#475569]" >
                      galaxcode0@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
   </main>
    
   
   
   </>
  );
}
