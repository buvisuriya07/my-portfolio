import Sidebar from '../sidebar/Sidebar';
import './Navbar.css';
import {motion} from 'framer-motion';

const Navbar = () => {
  return (
    <div className='Navbar'>
    <Sidebar/>
    <div className="Wrapper">
        <motion.span 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}} 
        transition={{duration:0.5}}
        >
        Buvisuriya</motion.span>
        <div className="social">
            <a href='https://github.com/buvisuriya07'><img src='/github.png' alt='github img'/></a>
            <a href='https://www.linkedin.com/in/buvi-suriya-153677214/'><img src='/linkedin.png' alt='linked img'/></a>
            <a href='https://leetcode.com/problemset/'><img src='data:image/png;base64,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' alt='linked img'/></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar