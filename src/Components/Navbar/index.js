import { useState } from 'react'
import { Link } from 'react-scroll'

import './index.css'
import { FaBars} from "react-icons/fa";

function Navbar() {
    const[state,setState]=useState(false);

  return (
    <div className='nav-wrap' id='nav'>
       

            {
                state ?<div onClick={()=>setState(false)} className='bar-bck'>
                    <ul className='lnk-bck' >

             <Link onClick={()=>setState(false)}  className='bar-lnk' spy={true} to="service" activeClass='active' smooth={true}>Services </Link>
             <Link onClick={()=>setState(false)}  className='bar-lnk' spy={true} to="exp" activeClass='active' smooth={true}> Experience</Link>
             <Link onClick={()=>setState(false)}   className='bar-lnk' spy={true} to="project" activeClass='active' smooth={true}>Porjects </Link>
             <Link  onClick={()=>setState(false)}  className='bar-lnk' spy={true} to="testimon" activeClass='active' smooth={true}>Testimonials </Link>
                         </ul>
                </div>:null
             
            }
             

    
        <div className='nav-left'>
            <div className='name'>Rhythm</div>
            <div onClick={()=>setState(true)} id="bars-btn" className='bars'><FaBars/></div>
           
        </div>  


        <div className='nav-right'>
            <div className='nav-list'>
                <ul style={{listStyleType:'none'}}>
                  
                    <Link  className='nav-lnk' spy={true} to="service" activeClass='active' smooth={true}>Services </Link>
                    <Link className='nav-lnk' spy={true} to="exp" activeClass='active' smooth={true}> Experience</Link>
                    <Link  className='nav-lnk' spy={true} to="project" activeClass='active' smooth={true}>Porjects </Link>
                    <Link  className='nav-lnk' spy={true} to="testimon" activeClass='active' smooth={true}>Testimonials </Link>
                </ul>
            </div>
            <Link  className='button' spy={true} to="cont" activeClass='active' smooth={true}>Contact</Link>
   
            
        </div>      
        
        

    </div>
  )
}

export default Navbar