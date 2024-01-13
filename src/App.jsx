import './App.css'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallex from './components/parallex/Parallex'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

function App() {

  return (
      <div>
           <Cursor/>
         <section id='Homepage'>
          <Navbar/>
          <Hero/>
         </section>
         <section id='Skills'><Parallex type="Services"/></section>
         <section><Services/></section>
         <section id='Project'><Parallex type="Portfolio"/></section>
         <Portfolio/>
         <section id="Contact">
          <Contact/>
         </section>
      
         
       
      </div>
    
  );
}

export default App;
