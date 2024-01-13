import { useRef } from 'react';
import './Services.css';
import {motion} from 'framer-motion';

const variants={
    initial:{
      x:-500,
      y:100,
      opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
          duration:1,
          staggerChildren:0.1,
        },
    }
}

const Services = () => {

    const ref=useRef()

  return (
    <motion.div className='skills' variants={variants} initial="initial" whileInView="animate" ref={ref}>
        <motion.div className="textContainer" variants={variants}>
        </motion.div>
        <motion.div className="titleContainer"variants={variants}>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Explore My Skills </motion.b>
                 </h1>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Frontend Development</h2>
                <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>HTML</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>CSS</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>JAVASCRIPT</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>BOOTSTRAP</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>REACT JS</h3>
                                <p>Experience</p>
                            </div>
                        </article>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
                <h2>Backend Development</h2>
                <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>NODE JS</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>EXPRESS JS</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>MySQL</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>MONGODB</h3>
                                <p>Experience</p>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>AWS</h3>
                                <p>Experience</p>
                            </div>
                        </article>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" ,color:"black"}}>
                <h2>Tools</h2>
                <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>Visual Studio Code</h3>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>MongoDB Compass</h3>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>Git & Github</h3>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>MySQL Workbench</h3>
                            </div>
                        </article>
                        <article>
                            <img src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>Adobe XD </h3>
                            </div>
                        </article>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services