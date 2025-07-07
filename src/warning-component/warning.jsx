import { useState, useContext } from "react";
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
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-400" />
          </div>
          <p className={`mt-6 mb-8 text-center `}>
        This Resume Builder is built with JavaScript and Tailwind CSS. It runs entirely on the client side, with no backend—your data is stored temporarily in the session and will be lost if the page is refreshed or closed. Please save your progress locally. This tool is for demo purposes and still under development.
          </p>
        </div>
      )}
    </div>
  )
}

export default WarningComponent;

