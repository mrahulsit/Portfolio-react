import React from 'react'
import Navbar from '../Components/Navbar'
import About from './About'
import '../Styles/home.css'
import image from '../assests/images/portimg.JPG'
import { motion} from 'framer-motion'
import Background from '../Components/Background'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Background/>
      
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }} className='rounded-[50%] 
      w-[440px] 
      h-[440px]  
      absolute 
      left-12 
      top-32 
      ml-12 
      mt-3 
      Box '>
          <img className='w-[387px] h-[387px] rounded-[50%] absolute top-[6%] left-[6%]' src={image} alt='image.jpg'/>
      </motion.div>
      

      <About/>
    </div>
  )
}
