import React from 'react'
import './index.css'
import { AiFillGithub,AiFillLinkedin,AiFillInstagram,AiOutlineMail} from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from 'react-scroll';



function Footer() {


  return (
    <div className='footer'>


       <Link className='upScroll' to="nav" smooth={true} > <BsFillArrowUpCircleFill /></Link>
       
        <p className='ftr-email'>rhythmkumawat2207@gmail.com</p>
       

       
           <div className='ftr-icons'>
              <a href='https://github.com/rkrockss' target="blank"><span className='ftr-icon' ><AiFillGithub /></span></a>
               <a target="blank" href='https://www.linkedin.com/in/rhythm-kumawat-408094233/?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'>
               <span className='ftr-icon'><AiFillLinkedin /></span>
                </a> 
                <a href='https://www.instagram.com/rhythm_kumawat_/?hl=en' target="blank">  <span className='ftr-icon'><AiFillInstagram /></span> </a>
                
                
             </div>


    </div>
  )
}

export default Footer