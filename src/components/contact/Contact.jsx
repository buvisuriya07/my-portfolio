import './Contact.css';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState,useRef } from 'react';


const variants={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,

    },
  },

};

const Contact = () => {
  const formRef= useRef();
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_b5qpngb', 'template_q4772ni', formRef.current, 'vokFN5LLL34Sa06Fs')
        .then(() => {
            setSuccess(true);
        }, 
        () => {
          setError(true);
        }
        );
    };
  
  return (
    <motion.div  className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
          <motion.h1>Let's Work Together</motion.h1>
        </motion.div>
        <div className="formContainer">
          <motion.form ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name='name'/>
            <input type="email" required placeholder="Email" name='email'/>
            <textarea rows={8} placeholder='Message' name='message'/>
            <button>Submit</button>
            {error&&"Error"}
            {success&&"Success"}
          </motion.form>
        </div>
    </motion.div>
  );
};

export default Contact;