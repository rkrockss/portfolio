import React from 'react'
import './index.css'
import myPhoto1 from '../../assests/my-photo.png'
import { AiFillGithub,AiFillLinkedin,AiFillInstagram} from "react-icons/ai";
import { Link } from 'react-scroll';





function Intro() {
 
  
  return (
    <div className='intro'>
      
      <div className='up-blur'></div>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hello! I Am</span>
                <span>Rhythm Kumawat</span>
                <span>Front-End Developer In Web Designing.  </span>
                <span>Music Design And Production</span>
            </div>
            <Link  className='button hire-btn' spy={true} to="cont" activeClass='active' smooth={true}>Hire Me</Link>
          


            <div className='i-icons'>
              <a href='https://github.com/rkrockss' target="blank"><span className='i-icon' ><AiFillGithub /></span></a>
               <a target="blank" href='https://www.linkedin.com/in/rhythm-kumawat-408094233/?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'>
               <span className='i-icon'><AiFillLinkedin/></span>
                </a> 
                <a href='https://www.instagram.com/rhythm_kumawat_/?hl=en' target="blank">  <span className='i-icon'><AiFillInstagram /></span> </a>
             </div>
            

        </div>

        <div className='i-right'>
          <img
           src={myPhoto1}/>
          
            </div>

    </div>
  )
}

export default Intro