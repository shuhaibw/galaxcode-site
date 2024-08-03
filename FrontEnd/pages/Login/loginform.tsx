import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

const Loginform = () => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")

   const router = useRouter()

   const handleSubmit = async (e: any) => {
      e.preventDefault()

      try {
         const res = await fetch("/api/auth/signin", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
         });

         const data = await res.json();

         if (res.status === 200) {
            setError("")
            router.push("/")
         } else {

            setError(data.message || "Error, try again");
         }
      }
      catch (err) {
         setError("Invalid username or password")
      }
   }

   const handleInputChange = (e: any) => {
      const { name, value } = e.target
      if (name === "username") {
         setUsername(value)
      }
      else if (name === "password") {
         setPassword(value)
      }
   }

   return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#1a1a1a]">
         <form onSubmit={handleSubmit} className="bg-[#1f1f1f] px-12 pb-12 pt-10 max-w-md w-full rounded-lg shadow1">
            <div className="text-center">
               <h1 className="font-orbitron text-white font-bold text-2xl mb-4">
                  Sign In to Galaxcode
               </h1>
               <p className="text-purple-400 font-spacemono text-sm">
                  Create stunning planetary patterns with Python Turtle Graphics.
               </p>
            </div>


            <div className="mt-6">
               <p className="text-sm mb-1.5 font-spacemono text-white">Username</p>
               <input onChange={handleInputChange} name="username" type="text" value={username} className="text-black w-full pl-2 py-2 rounded-md text-sm shadow-[0_0_20px_4px_rgba(128,90,213,0.5)] focus:shadow-purple-400 focus:outline-none" />
               <p className="text-sm mt-4 mb-1.5 font-spacemono text-white">Password</p>
               <input onChange={handleInputChange} name="password" value={password} type="password" className="text-black w-full pl-2 py-2 rounded-md text-sm shadow-[0_0_20px_4px_rgba(128,90,213,0.5)] focus:shadow-purple-400 focus:outline-none" />
            </div>


            <div>
               {error && <p className="text-purple-400 text-sm font-medium pt-4">{error}</p>}
               <button type="submit" className="bg-purple-400 py-2 w-full mt-8 rounded-md text-sm text-white active:bg-purple-300"> Sign in</button>
               <p className="text-white text-sm mt-5 text-center font-medium">Need an account? <span className="text-purple-400 cursor-pointer"><Link href="/Login/signupform">Sign up</Link></span></p>
            </div>
         </form>
      </div>
   );

};

export default Loginform;
