// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

import Header from '../header/header';
import ThemesMain from './themesMain';

import { ThemeContext } from '../toggle/ThemeContext';
import { useEffect, useState } from 'react';

function Themes() {

    const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem("darkMode");
      return saved === "true"; 
    })
  
    useEffect(() => {
      localStorage.setItem("darkMode", darkMode);
    }, [darkMode])
  
  return (
    <>
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <Header />
        <ThemesMain />
      </ThemeContext.Provider>
    </>
  );
}

export default Themes