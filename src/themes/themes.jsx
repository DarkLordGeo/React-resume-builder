// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// const Themes = () => {
//     return (
//         <>
//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//             </Swiper>

//             <header className="flex items-center justify-around w-full h-auto gap-10 px-20 py-5 shadow-md xl:gap-5 min-[320px]:justify-evenly md:justify-evenly lg:justify-around min-[320px]:px-0 dark:bg-gray-900 dark:text-white dark:border-b-slate-500 dark:border-2 dark:border-solid dark:border-l-0 dark:border-r-0 dark:border-t-0">
//                 <div>
//                     <p className="my-5 text-4xl transition-colors md:text-3xl lg:text-4xl lg:block min-[320px]:justify-center min-[320px]:text-xl">
//                         Resume builder
//                     </p>
//                 </div>
//                 <div className="">
//                     <ul className="flex items-center justify-center gap-10 text-2xl list-none dark:text-slate">
//                         <li className="flex items-center justify-center gap-2 cursor-pointer sm:lg:flex">
//                             <div>
//                                 <img
//                                     src={require('../images/brightness.png')}
//                                     alt="Light Mode"
//                                     className="w-6 dark:hidden"
//                                     id="darkModeSun"
//                                 />
//                             </div>
//                             <label className="inline-flex items-center cursor-pointer">
//                                 <input
//                                     type="checkbox"
//                                     className="sr-only peer"
//                                     defaultChecked=""
//                                     id="toggleMode"
//                                 />
//                                 <div className="shadow-xl relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
//                             </label>
//                             <div>
//                                 <img
//                                     src={require('../images/night-mode.png')}
//                                     alt="Night Mode"
//                                     className="w-6 dark:hidden"
//                                     id="darkModeMoon"
//                                 />
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </header>
//             <main
//                 style={{ height: "100%" }}
//                 className="flex flex-col items-center justify-start gap-20 px-12 py-5 dark:bg-gray-900 dark:text-white"
//             >
//                 <div className="w-11/12 mx-auto sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 swiper mySwiper">
//                     <div className="swiper-wrapper">
//                         <div className="flex items-center justify-center rounded-md swiper-slide">
//                                 <img src={require("/Users/mrerg/Desktop/React resume builder/src/themes/img/first.jpg")} alt="First" />
//                             </div>
//                             <div className="flex items-center justify-center rounded-md swiper-slide">
//                                 <img src={require("/Users/mrerg/Desktop/React resume builder/src/themes/img/second.jpg")} alt="Second" />
//                             </div>
//                             <div className="flex items-center justify-center rounded-md swiper-slide">
//                                 <img src={require("/Users/mrerg/Desktop/React resume builder/src/themes/img/third.jpg")} alt="Third" />
//                             </div>
//                             <div className="flex items-center justify-center rounded-md swiper-slide">
//                                 <img src={require("/Users/mrerg/Desktop/React resume builder/src/themes/img/fourth.jpg")} alt="Fourth" />
//                             </div>
//                         </div>
//                     </div>
//                 <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-3xl sm:text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//                     <span className="relative px-10 py-5 sm:px-5 sm:py-2.5 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
//                         Build!
//                     </span>
//                 </button>
//             </main>
//         </>
//     );
// };

// export default Themes;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Themes = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <header className="flex items-center justify-around w-full h-auto gap-10 px-20 py-5 shadow-md xl:gap-5 min-[320px]:justify-evenly md:justify-evenly lg:justify-around min-[320px]:px-0 dark:bg-gray-900 dark:text-white dark:border-b-slate-500 dark:border-2 dark:border-solid dark:border-l-0 dark:border-r-0 dark:border-t-0">
                <div>
                    <p className="my-5 text-4xl transition-colors md:text-3xl lg:text-4xl lg:block min-[320px]:justify-center min-[320px]:text-xl">
                        Resume builder
                    </p>
                </div>
                <div className="">
                    <ul className="flex items-center justify-center gap-10 text-2xl list-none dark:text-slate">
                        <li className="flex items-center justify-center gap-2 cursor-pointer sm:lg:flex">
                            <div>
                                <img
                                    src={require('../images/brightness.png')}
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
                                    src={require('../images/night-mode.png')}
                                    alt="Night Mode"
                                    className="w-6 dark:hidden"
                                    id="darkModeMoon"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <main
                style={{ height: "100%" }}
                className="flex flex-col items-center justify-start gap-20 px-12 py-5 dark:bg-gray-900 dark:text-white"
            >
                <div className="w-11/12 mx-auto sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="flex items-center justify-center rounded-md swiper-slide">
                            <img src={require('../images/first.jpg')} alt="First" />
                        </div>
                        <div className="flex items-center justify-center rounded-md swiper-slide">
                            <img src={require('../images/second.jpg')} alt="Second" />
                        </div>
                        <div className="flex items-center justify-center rounded-md swiper-slide">
                            <img src={require('../images/third.jpg')} alt="Third" />
                        </div>
                        <div className="flex items-center justify-center rounded-md swiper-slide">
                            <img src={require('../images/fourth.jpg')} alt="Fourth" />
                        </div>
                    </div>
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-3xl sm:text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-10 py-5 sm:px-5 sm:py-2.5 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
                        Build!
                    </span>
                </button>
            </main>
        </>
    );
};

export default Themes;