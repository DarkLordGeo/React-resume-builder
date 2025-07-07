import { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import DownloadTheme from "../DownloadTheme/ReadyToDownloadTheme";
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
                    <DownloadTheme />
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default DownloadPage