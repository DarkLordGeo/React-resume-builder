import { useContext } from "react";
import Slider from "../slider-component/slider"
import { ThemeContext } from "../toggle/ThemeContext";

function ThemesMain(){
    const { darkMode } = useContext(ThemeContext);
    
    return(
        <>
            <main className={`flex flex-col items-center justify-start min-h-screen gap-20 px-12 py-5   ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text'}`}>
                <Slider />
            </main>
        </>
    )
}

export default ThemesMain