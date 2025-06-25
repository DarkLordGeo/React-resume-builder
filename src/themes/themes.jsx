import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Header from '../header/header';
import { ThemeContext } from '../toggle/ThemeContext';
import ThemesMain from './themesMain';
import { useContext, useEffect, useState } from 'react';

function Themes() {

    const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem("darkMode");
      return saved === "true"; 
    });
  
    useEffect(() => {
      localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);
  
  return (
    <>
    <div>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <Header />
        <ThemesMain />
        {/* <main className="flex flex-col items-center justify-start min-h-screen gap-20 px-12 py-5 dark:bg-gray-900 dark:text-white">
            <Slider />
        </main> */}
      </ThemeContext.Provider>
    </div>
    </>
  );
}

export default Themes