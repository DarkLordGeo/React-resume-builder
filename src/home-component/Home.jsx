import Header from "../header/header";
import Main from "../homeMain/Main.jsx";
import Footer from "../footer/Footer";
import { ThemeContext } from "../toggle/ThemeContext";
import { useEffect, useState } from "react";

function home(){

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; 
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return(
    <>
    <div className="font-sans bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      
     
      {/* <header className={`
      flex 
      items-center
      justify-around
      w-full h-auto 
      gap-10 px-20 py-5  
      shadow-md xl:gap-5 min-[320px]:justify-evenly md:justify-evenly lg:justify-around min-[320px]:px-0"
     ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text'}
     dark:border-b-slate-500 dark:border-2 dark:border-solid dark:border-l-0 dark:border-r-0 dark:border-t-0`}>
        <div>
          <p className="my-5 text-4xl transition-colors  md:text-3xl lg:text-4xl lg:block min-[320px]:justify-center min-[320px]:text-xl ">
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
              <Toggle onToggle={toggleChecked} darkMode={darkMode}/>
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
      </header> */}
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <Header />
        <Main />
        <Footer />
        {/* <Warning shown={clicked}/> */}
      </ThemeContext.Provider>
      
    </div>
    </>
  )
}
export default home