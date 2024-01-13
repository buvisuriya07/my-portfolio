/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.css";
import {motion, useScroll,useSpring, useTransform} from "framer-motion";

const item=[
    {
        id:1,
        title:"Ticketing system for query resolving",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrl3BHPo5aCMXVt0C7Z3f-QrNjc0JRWeYtm9vu0IabMav_mWCb0l4VSrgkkgk4Lr_eVZA&usqp=CAU",
        desc:"Designed a user-friendly React-based frontend with real-time communication features for support agents. Created a RESTful API with Node.js and Express.js for efficient ticket management and user authentication. Implemented MongoDB for database management, focusing on data validation and indexing for performance. Ensured system security through JWT-based user authentication and role based access control. Technologies Used: MERN stack, RESTful APIs, MongoDB, React, Node.js."
    },
    {
        id:2,
        title:"Nationalize API",
        img:"https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg",
        desc:"Developed a web application leveraging the Nationalize API to predict nationalities based on names. Implemented a clean and responsive UI using HTML, CSS, and JavaScript. Integrated real-time data retrieval for accurate nationality predictions."
    },
    {
        id:3,
        title:"three project",
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo quo nam modi nesciunt illo necessitatibus, deserunt magni laboriosam excepturi, cupiditate voluptatem iste, dolores corporis? Corporis illo ratione voluptas distinctio."
    },
    {
        id:4,
        title:"four project",
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo quo nam modi nesciunt illo necessitatibus, deserunt magni laboriosam excepturi, cupiditate voluptatem iste, dolores corporis? Corporis illo ratione voluptas distinctio.",
    }
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
            <button>Live Demo</button>
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