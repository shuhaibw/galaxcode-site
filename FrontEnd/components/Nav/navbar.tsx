import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect} from 'react'


const Navbar = () => {
   const router = useRouter()
   const { pathname } = router
   
   const [loggedIn, setLoggedIn] = useState<boolean>(false)

   useEffect(() => {
      const fetchSessionStatus = async () => {
         const res = await fetch('/api/check-session')
         const data = await res.json()
         setLoggedIn(data.loggedIn)
       };
       fetchSessionStatus()
   }, [])

   const handleLogout = async () => {
      try {
         await fetch('/api/signout', {method: 'POST'})
         setLoggedIn(false)
         router.push('/')
         } 
         
      catch (error) {
            console.error('Logout error', error)
      }
   }

return (
   <header className="flex items-center justify-between fixed w-full z-[15] opacity-95 bg-[#1a1a1a] text-white px-4 py-1.5 outline outline-1 outline-white shadow1">
       <Link href="/main/home" className="flex items-center">
           <Image src="/astronaut.png" width="48" height="48" className="mr-1" alt="rocket" />
           <div className="text-xl font-bold font-orbitron">GalaxCode</div>
       </Link>
       <nav className="flex flex-wrap md:pl-20 sm:pl-16">
           <Link href="/main/learn" className={`${pathname === '/main/learn' ? 'outline outline-1 outline-gray-200 shadow1' : 'hover:outline hover:outline-1 hover:outline-gray-200'} px-2 py-1 rounded-sm text-sm font-spacemono mr-6`}>
               Learn
           </Link>
           <Link href="/main/code" className={`${pathname === '/main/code' ? 'outline outline-1 outline-gray-200 shadow1' : 'hover:outline hover:outline-1 hover:outline-gray-200'} px-2 py-1 rounded-sm text-sm font-spacemono mr-6`}>
               Code
           </Link>
           <Link href="/main/playground" className={`${pathname === '/main/playground' ? 'outline outline-1 outline-gray-200 shadow1' : 'hover:outline hover:outline-1 hover:outline-gray-200'} px-2 py-1 rounded-sm text-sm font-spacemono mr-6`}>
               Playground
           </Link>
           

           {loggedIn ? ( 
               <button
               className="hover:outline hover:outline-1 hover:outline-gray-200' px-2 py-1 rounded-sm text-sm font-spacemono mr-6" 
               onClick= {handleLogout}  
               >
                   Logout
               </button>
           ) : (
               <Link href="/Login/loginform"  className="  hover:outline hover:outline-1 hover:outline-gray-200' px-2 py-1 rounded-sm text-sm font-spacemono mr-6">
                   Login
               </Link>
           )}
          
       </nav>
   </header>
);
};

export default Navbar;
