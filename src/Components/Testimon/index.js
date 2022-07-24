import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import profile1 from '../../assests/profile1.png'
import profile2 from '../../assests/profile2.png'
import { Pagination , Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimon() {
   const clients=[
       { img: profile1,
        review:"Thank you for making it painless, pleasant and most of all hassle free! The best on the net! I will recommend you to my colleagues. Not able to tell you how happy I am with music production. - Norman K."
        
        },
        { img: profile2,
            review:"Web design is worth much more than I paid. The best on the net! Web design is exactly what our business has been lacking. Not able to tell you how happy I am with web design. - Kay D."
            
            },

            { img: profile2,
                review:"Software development is worth much more than I paid. I could probably go into sales for you"
                
                },
        
    ]
  return (
    <div className='test' id='testimon'>
         <div className='up-blur test-blr'></div>
        <div className='test-heading'>
            <span>See What </span>
            <span style={{fontWeight:"bold" ,color:"var(--green)"}}>Clients Say </span>
            <span>About Me ! </span>
        </div>
        <div className='test-slide'>

         <Swiper

         slidesPerView={1}
         modules={[Pagination,Navigation]}
         pagination={{ clickable: true }}
        
         
    
         > 
         {
            clients.map((client,index)=>{

                return(
                    <div className='test-slide'>
                        <SwiperSlide  key={index} >
                        <img src={client.img}/>
                        <p style={{color:"var(--grey)",marginBottom:"4rem"}}>{client.review}</p>

                    </SwiperSlide>
                    </div>
                    

                )
                    
                
            }
            )
         }
        
         </Swiper>
     
      
            

        </div>






    </div>
  )
}

export default Testimon