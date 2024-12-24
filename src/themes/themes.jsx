
import firstimage from '/Users/mrerg/Desktop/React resume builder/src/themes/img/first.jpg'
import Secondimage from '/Users/mrerg/Desktop/React resume builder/src/themes/img/second.jpg'
import Thirdimage from '/Users/mrerg/Desktop/React resume builder/src/themes/img/third.jpg'
import Fourthimage from '/Users/mrerg/Desktop/React resume builder/src/themes/img/fourth.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// import { Outlet } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate();

  const handleThemeSelection = () => {
    // Mark theme as selected
    setThemeSelected(true);

    // Navigate to the forms page
    navigate('/forms');
  };

  
  return (
    <>
    <div>
      <header className="flex items-center justify-around w-full gap-10 px-20 py-5 shadow-md xl:gap-5 min-[320px]:justify-evenly md:justify-evenly lg:justify-around min-[320px]:px-0 dark:bg-gray-900 dark:text-white dark:border-b-slate-500 dark:border-2 dark:border-solid dark:border-l-0 dark:border-r-0 dark:border-t-0">
          <div>
            <p className="my-5 text-4xl transition-colors md:text-3xl lg:text-4xl lg:block min-[320px]:justify-center min-[320px]:text-xl ">
              Resume builder
            </p>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-10 text-2xl list-none dark:text-slate">
              <li className="flex items-center justify-center gap-2 cursor-pointer sm:lg:flex">
                <div>
                  <img
                    src="brightness.png"
                    alt="Light Mode"
                    className="w-6 dark:hidden"
                    id="darkModeSun"
                  />
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked=""
                    id="toggleMode"
                  />
                  <div className="shadow-xl relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>
                <div>
                  <img
                    src="night-mode.png"
                    alt="Light Mode"
                    className="w-6 dark:hidden"
                    id="darkModeMoon"
                  />
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex flex-col items-center justify-start min-h-screen gap-20 px-12 py-5 dark:bg-gray-900 dark:text-white">
          <div className="w-11/12  sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 swiper mySwiper min-h-[50vh] mx-auto ">
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
            >
              <SwiperSlide>
                <img src={firstimage} className="object-cover w-full h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Secondimage} className="object-cover w-full h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Fourthimage} className="object-cover w-full h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Thirdimage} className="object-cover w-full h-full" />
              </SwiperSlide>
            </Swiper>
          </div>

          <button 
          // onClick={() => {
          //   // navigate("/themes/forms")
          // }}
          onClick={handleThemeSelection}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-3xl sm:text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-10 py-5 sm:px-5 sm:py-2.5 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
              Build!
            </span>
          </button>
        </main>
    </div>
        {/* <Outlet /> */}
    </>
  );
}
