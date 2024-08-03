import Link from 'next/link';
import { useState } from "react"
import { useRouter } from "next/navigation"

const Signupform = () => {

   const [error, setError] = useState("")

   const router = useRouter()

   const isValidUsername = (username: string) => {
      const userRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
      return userRegex.test(username)
   }
   const handleSubmit = async (e: any) => {
      e.preventDefault()
      const username = e.target[0].value
      const password = e.target[1].value

      console.log("Submitting data:", { username, password })

      if (!isValidUsername(username)) {
         setError("Invalid username")
         return
      }

      if (!password || password.length < 5) {
         setError("Password must be at least 5 characters")
         return
      }

      try {
         const res = await fetch("/api/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               username,
               password
            })
         })
         if (res.status === 400) {
            setError("user is already registered")
         }
         else if (res.status === 200) {
            setError("")
            router.push("/Login/loginform")
         }
      }
      catch (error) {
         console.error('Fetch error:', error)
         setError("Error, try again")
      }

   }
   return (
      <div className="bg-[#1a1a1a] w-full min-h-screen flex items-center justify-center">
         <form onSubmit={handleSubmit} className="bg-[#1f1f1f] px-12 pb-12 pt-10 max-w-md w-full rounded-lg shadow1">
            <div className="text-center">
               <h1 className="font-orbitron text-white font-bold text-2xl mb-4">Welcome to Galaxcode</h1>
               <p className="text-purple-400 font-spacemono text-sm">Create stunning planetary patterns with Python Turtle Graphics.</p>
            </div>


            <div className="mt-6">

               <p className="text-sm mb-1.5 mt-4 font-spacemono text-white">Username</p>
               <input
                  name="username"

                  type="text"
                  className="text-black w-full pl-2 py-2 shadow-[0_0_20px_4px_rgba(128,90,213,0.5)] focus:shadow-purple-400 focus:outline-none rounded-md text-sm"
               />
               <p className="text-sm mt-4 mb-1.5 font-spacemono text-white">Password</p>
               <input
                  name="password"

                  type="password"
                  className="text-black w-full pl-2 py-2 shadow-[0_0_20px_4px_rgba(128,90,213,0.5)] focus:shadow-purple-400 focus:outline-none rounded-md text-sm"
               />
            </div>


            <div>
               {error && <p className="text-purple-400 text-sm font-medium pt-4">{error}</p>}
               <button type="submit" className="bg-purple-400 py-2 w-full mt-6 rounded-md text-sm text-white active:bg-purple-300">
                  Sign up
               </button>
               <p className="text-white text-sm mt-4 text-center font-medium">
                  Already have an account?{' '}
                  <span className="text-purple-400 cursor-pointer">
                     <Link href="/Login/loginform">Sign in</Link>
                  </span>
               </p>
            </div>
         </form>
      </div>
   );
};


export default Signupform;