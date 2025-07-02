import { useContext, useEffect, useState } from "react";
import Toggle from "../toggle/toggle";
import { ThemeContext } from "../toggle/ThemeContext";

function Header(){


    const {darkMode,setDarkMode} = useContext(ThemeContext)
    const toggleChecked = () => {
        setDarkMode(_ => !_)
    }
    
    return (
        <>
            <header className={`
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
                    <Toggle onToggle={toggleChecked} darkMode={darkMode}/>
                    </li>
                </ul>
                </div>
            </header>
        </>
    )
}

export default Header