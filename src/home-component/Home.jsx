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
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
    </>
  )
}
export default home