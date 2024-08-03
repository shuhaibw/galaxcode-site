import styles from '@/components/Animations/rocket.module.css'
import {useState} from 'react'
import Image from 'next/image'


const Rocket = () => {

   const [launch, setLaunch] = useState(false)
   const [button, setButton] = useState(true)

   const handleLaunch = () => {
      setLaunch(true)
      setButton(false)
      
      setTimeout(() => {
         setLaunch(false)
         setButton(true)
         
       }, 2300)
       
      
   }
   
   return (
      <div className="grid justify-center items-end">
         {launch && (
          <div className= {`relative  ${styles.animatefly}`}>
            <Image src="/rocket2.png" alt="Rocket" height={220} width={220} className="" />
          </div>
        )}
      <div className=" active:translate-y-2" >
         {button && (
           <button onClick = {handleLaunch}   className =  {`${styles.boxshadows} shadow1    px-3  pb-8  pt-4    bg-purple-400  rounded-full transform transition-transform duration-100  outline  outline-purple-300 outline-1  `}>
              <div className="text-lg font-bold  mt-3   ">Launch</div>
           </button>
          )}
      </div> 
           
      </div>
   )

}
export default Rocket