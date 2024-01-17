/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.css";
import {motion, useScroll,useSpring, useTransform} from "framer-motion";

const item=[
    {
        id:1,
        title:"Ticketing system for query resolving",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrl3BHPo5aCMXVt0C7Z3f-QrNjc0JRWeYtm9vu0IabMav_mWCb0l4VSrgkkgk4Lr_eVZA&usqp=CAU",
        desc:"Designed a user-friendly React-based frontend with real-time communication features for support agents. Created a RESTful API with Node.js and Express.js for efficient ticket management and user authentication. Implemented MongoDB for database management, focusing on data validation and indexing for performance. Ensured system security through JWT-based user authentication and role based access control. Technologies Used: MERN stack, RESTful APIs, MongoDB, React, Node.js.",
        link:"https://main--deft-gumdrop-e7c631.netlify.app/",
        links:"https://github.com/buvisuriya07/Capstone-project1.git"
    },
    {
        id:2,
        title:"Nationalize API",
        img:"https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg",
        desc:"Developed a web application leveraging the Nationalize API to predict nationalities based on names. Implemented a clean and responsive UI using HTML, CSS, and JavaScript. Integrated real-time data retrieval for accurate nationality predictions. Technologies Used: HTML, CSS, JAVASCRIPT, RESTful APIs, ",
        link:"https://buvisuriya07.github.io/NationalizeAPI/",
        links:"https://github.com/buvisuriya07/NationalizeAPI.git"
    },
    {
        id:3,
        title:"Bulk Email Tool",
        img:"https://www.easygosms.com/images/services-img/Bulk-Email-Service.png",
        desc:"Bulk Email Tools utilizes the MERN stack (MongoDB, Express.js, React.js, Node.js) for efficient email campaign management. With features like real-time tracking through Socket.io and secure authentication via JWT, the project ensures a robust and user-friendly solution. Nodemailer and Mongoose further enhance email sending and database interactions for seamless functionality.",
        link:"https://bulk-emailtool.netlify.app/login",
        links:"	"
    },
  
];


const Single =({item})=>{
const ref= useRef();
 const {scrollYProgress}= useScroll({target:ref, offset:["start start","end start"]});

 const y= useTransform(scrollYProgress,[0,1],["0%","-300%"]);

 return(
    <section ref={ref}>
     <div className="container">
        <div className="wrapper">
         <div className="imageContainer">
         <img src={item.img}alt=""/>
         </div>
        <motion.div className="textConatiner"style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target='_blank'  rel="noreferrer"> <button>Live Demo</button></a>
            <a href={item.links} target='_blank'  rel="noreferrer"> <button>Github</button></a>
        </motion.div>
     </div>
     </div>
   

    </section>
 )
};

const Portfolio = () => {
    const ref=useRef();

const {scrollYProgress}= useScroll({target:ref,offset:["end end","start start"]});

const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
});

  return<div className='project'ref={ref}>
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
        {item.map(item =>(
           <Single item ={item} key={item.id}/>
        ))} 
  
 
    </div>
  
};

export default Portfolio