
import Card from '../Card'
import './index.css'
import MusicLogo from '../../assests/music.png'
import WebLogo from '../../assests/webDev.png'
import resume from '../../myfile.pdf'


function Service() {

  return (
    <div className='Service' id='service'>
   <div className='up-blur service-blr'></div>
    

        <div className='service-left'>
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>I create awesome responsive websites  <br/>I  also work as a freelancer sound engineer.</span>
            </div>
            <a href={resume} download>
            <button  className='button Cv-btn'>Download CV</button>
            </a>
            


        </div>
        <div className='service-right'>
       
         <Card 
         emoji={MusicLogo} 
         heading={'Music'}
         detail={'Digital Recording And Studio   Live Concerts  Guitarist   Backtrack Making '}
        /*  popUp={<div className='popup'>  <p>We provide recording, scripting and voice casting services catering to the artist, filmmakers, TV shows and events. Our Services are Audio
           Recording, Audio Editing, Audio Mixing, Audio Mastering, Live Recording, Audio Dubbing, Voiceover, song recording and mixing for Movies, TV Shows, Documentaries, Songs, Jingles,
           TVCs, Radio Spots and more on a turnkey basis.</p> </div>}  */
         
         
         />

        <Card 
         emoji={WebLogo} 
         heading={'Web Development'}
         detail={'Full Responsive Website  FrontEnd Development  Web Design    '}
        
         />
         
       

        </div>

    </div>
  )
}

export default Service