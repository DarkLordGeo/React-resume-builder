import { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import Theme1 from "../theme1/Theme1";
import { ThemeContext } from "../toggle/ThemeContext";


function DownloadPage() {

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
                <div className={`flex flex-col items-center justify-center w-full gap-12 h-max  pb-0 sm:pb-44 ${darkMode ? 'dark:bg-gray-900 ' : 'bg-light-bg text-light-text'} overflow-hidden`}>
                    <Header />
                    <Theme1 />
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default DownloadPage