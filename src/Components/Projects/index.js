import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import teraIntezar1 from'../../assests/tera.png'
import map1 from'../../assests/MAP.png'
import food1 from'../../assests/food.png'
import snake1 from'../../assests/snake.png'
import ecom1 from '../../assests/ecom.png'
import chatapp1 from '../../assests/chatapp.png'

function Project() {
  return (
    <div className='project' id="project">
        <div className='up-blur project-blr'></div>

            <div className='project-heading'>
               Recent Projects
            </div>

            <div className='swipe'>
            <Swiper

            
      spaceBetween={10}
      slidesPerView={2.5}

     
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide>

<div className='slide'>
  <img src={ecom1}/>
  <span className='slideName'>E-Commerce</span>

  <a href='https://github.com' target='blank'>
      <button className='button demoBtn'>Live </button>
  </a>
  </div>
</SwiperSlide>
      <SwiperSlide>

      <div className='slide'>
        <img src={map1}/>
        <span className='slideName'>Accomodation Analysis</span>

        <a href='https://github.com' target='blank'>
            <button className='button demoBtn'>Link</button>
        </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className='slide'>
        <img src={food1}/>
        <span className='slideName'>Food | Weather</span>
        <a href='https://github.com' target='blank'>
            <button className='button demoBtn'>Link</button>
        </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className='slide'>
        <img src={snake1}/>
        <span className='slideName'>Snake Game</span>

        <a href='https://github.com' target='blank'>
            <button className='button demoBtn'>Link</button>
        </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>

<div className='slide'>
  <img src={chatapp1}/>
  <span className='slideName'>Chat App</span>

  <a href='https://github.com' target='blank'>
      <button className='button demoBtn'>Live </button>
  </a>
  </div>
</SwiperSlide>
<SwiperSlide>
        <div className='slide'>
        <img src={teraIntezar1}/>
        <span className='slideName'>Original Album</span>

        <a href='https://www.youtube.com/watch?v=XAY1FYevdTw' target='blank'>
            <button className='button demoBtn'>Link</button>
        </a>
        </div>
      


      </SwiperSlide>
   
    </Swiper>
            </div>



    </div>
  )
}

export default Project