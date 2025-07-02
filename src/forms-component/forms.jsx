

import Header from '../header/header'
import FormsMain from './formsMain'

import { ThemeContext } from "../toggle/ThemeContext";
import { useEffect, useState } from "react";


function Forms() {
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header />
        <FormsMain />
      </ThemeContext.Provider>
    </>
  )
}
export default Forms