import React from 'react'
import "../Styles/About.css"
import { motion } from 'framer-motion'

const About = () => {
  const routeVariants = {
    initial: {
        transition: {  duration: 1, ease: [0.22, 1, 0.36, 1]  },
        opacity:0,
    },
    final: {
        opacity:1,
    }
  }
  return (
      <motion.div 
      className='Content' 
      variants={routeVariants} 
      initial="initial" 
      animate="final"  >
          <h1 className='Name'>Rahul Mishra</h1>
          <h2 className='Name1'>Full Stack Developer Based in India</h2>
      </motion.div>
  )
}

export default About

