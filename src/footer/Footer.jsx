import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare,  faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

import { ThemeContext } from "../toggle/ThemeContext";
import { useContext, useEffect, useState } from "react";



function Footer() {
    
    const { darkMode } = useContext(ThemeContext);
    const date = new Date
    
    return(
        <>
        <footer className={` ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text'} flex flex-col items-center h-full gap-10 pt-12 pb-12 border-t border-slate-500 `}>
            <div className="text-xl font-medium text-center w-52">
            <p>All rights reserved {date.getFullYear()}.</p>
            <p>Lasha Ergeshidze.</p>
            </div>
            <div>
            <ul className="flex gap-10 text-5xl list-none">
                <a href="https://github.com/DarkLordGeo" target="_blank">
                <li className="cursor-pointer">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </li>
                </a>
                <a
                href="https://www.linkedin.com/in/lasha-ergeshidze-6822ba2a5/"
                target="_blank"
                >
                <li className="cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </li>
                </a>
            </ul>
            </div>
        </footer>
        </>
    )
}

export default Footer