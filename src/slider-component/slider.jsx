import firstImage from '../themes/img/first.jpg'
import secondImage from '../themes/img/second.jpg'
import thirdImage from '../themes/img/third.jpg'
import fourthImage from '../themes/img/fourth.jpg'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Slider() {

  const images = [firstImage, secondImage, thirdImage, fourthImage]
  const [activeSlide, setActiveSlide] = useState(0)


  const slide = images.map((src, key) => {
    return (
      <SwiperSlide key={key}>
        <img src={src} alt={`Slide ${key}`} />
      </SwiperSlide>
    )
  })

  

  const navigate = useNavigate()

  function navigateForms() {
    localStorage.setItem("index", activeSlide)
    navigate('/forms')
  }

  return (
    <>
      <div className="w-11/12  sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 swiper mySwiper min-h-[50vh] mx-auto shadow-2xl">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="h-full"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          {slide}
        </Swiper>
      </div>
      <button
        onClick={navigateForms}
        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-3xl sm:text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-10 py-5 sm:px-5 sm:py-2.5 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
          Build!
        </span>
      </button>
    </>

  )

}

export default Slider