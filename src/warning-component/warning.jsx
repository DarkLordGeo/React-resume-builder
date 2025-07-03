import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../toggle/ThemeContext";

function WarningComponent({shown}) {
  const navigate = useNavigate()
  
  const { darkMode } = useContext(ThemeContext);

  const [appear,setAppear] = useState(true)
  function hideWarning(){
    setAppear(false)
    navigate("/themes")
  }
  
  return (
    <div>
      {shown && (
        <div
          id="warningMessage"
          className={` ${appear ? 'visible' : 'invisible'}  fixed z-20 flex-col items-center justify-center w-4/5 p-5 transition-all transform -translate-x-1/2 -translate-y-1/2  border-2 rounded-md ${darkMode ? 'dark:bg-gray-900 dark:text-white !text-white' : 'bg-white text-slate-800'}  md:w-3/5 top-2/4 left-2/4 border-slate-500`}
        >
          <div className="flex justify-end w-full">
            <button
              id="closeButton"
              onClick={hideWarning}
              className="text-2xl text-slate-700 "
            >
              <FontAwesomeIcon icon={faX} className="text-2xl" />
            </button>
          </div>
          <div className="flex justify-center text-2xl">
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-500" />
          </div>
          <p className={`mt-6 mb-8 text-center `}>
            Please be aware that this Resume Builder is developed using JavaScript and styled with Tailwind CSS. It is a
            client-side application and does not interact with any backend server. All data entered will be stored temporarily
            in the session and cleared when the browser tab is closed or refreshed. Save your progress locally to avoid
            data loss. This tool is for demonstration purposes, and updates are under development.
          </p>
        </div>
      )}
    </div>
  )
}

export default WarningComponent;

