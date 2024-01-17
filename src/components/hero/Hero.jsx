import './Hero.css';
import {motion} from 'framer-motion';
import Contact from '../contact/Contact'

 const textVariants={
   initial:{
    x:-500,
    opacity:0,
   },
   animate:{
    x:0,
    opacity:1,
    transition:{
         duration:1,
         staggerChildren:0.1,
    },
   },
   scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
   }
};


const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>Hello,I'm</motion.h2>
            <motion.h1 variants={textVariants}>BUVISURIYA</motion.h1>
            <motion.h2 variants={textVariants}>FullStack Web Developer</motion.h2>
            <motion.div  variants={textVariants}className="buttons">
                <motion.button variants={textVariants} >
                  <a href="https://drive.google.com/file/d/1NgVe2vmxwWlZF8tg_OyD6esMwfZ11HLg/view?usp=sharing" target='_blank'  rel="noreferrer">Download CV</a>
                  </motion.button>
      
            </motion.div>
           
        </motion.div>
        </div>
        <div className="imageContainer">
            <img src="/hero.png" alt=''/>
        </div>
    </div>
  )
}

export default Hero