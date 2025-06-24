import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare,  faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react";

import Toggle from "../toggle/toggle";
import Warning from "../warning-component/warning"

function home(){

  // stating darkmode in localstorage
  const [darkMode, setDarkMode] = useState(() =>{
    const saved = localStorage.getItem("darkMode")
    return saved === "true"
  });
  
  // toggling darkmode
  const toggleChecked = () => setDarkMode(prev => !prev);
  useEffect(() =>{
    localStorage.setItem("darkMode",darkMode.toString())
  },[darkMode])

  // warning component
  const [clicked,setClicked] = useState(false)
  function showWarning() {
    setClicked(true)
  }

  // Copyright
  const date = new Date

  return(
    <>
    <div className="font-sans bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      
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
              <div>
                <img
                  src="brightness.png"
                  alt="Light Mode"
                  className="w-6 dark:hidden"
                  id="darkModeSun"
                />
              </div>
              <Toggle onToggle={toggleChecked} darkMode={darkMode}/>
              {/* <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked=""
                  id="toggleMode"
                />
                <div className="shadow-xl relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500  peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              </label> */}
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
      </header>

      <main className={`flex flex-col items-center w-full gap-16 pt-24 pb-24 md:justify-center ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text'} `}>
        <div className="flex items-center justify-center w-4/5 text-3xl font-medium text-center sm:text-5xl md:text-4xl lg:text-6xl ">
          <h1 className="min-[320px]:sm:w-4/5 align-middle">
            Build your resume with passion
          </h1>
        </div>
        <div
          className={`min-[320px]:px-5 min-[320px]:py-4 flex flex-row items-center justify-center gap-16 p-10 m-auto text-xl shadow-xl rounded-xl  ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text dark:shadow-xl'}    lg:w-4/5 md:w-4/5 min-[320px]:flex-col md:flex-row min-[320px]:gap-10 min-[320px]:w-4/5 min-[320px]:text-lg  `}
        >
          <div className={`w-4/5 text-center ${darkMode ? "text-slate-300" : "text-black-300"}`}>
            <p>
              "Build Your Resume with Passion is a user-friendly platform designed
              to help you create a professional resume effortlessly. With an
              intuitive interface and modern design powered by Tailwind CSS, this
              tool lets you showcase your skills and experience, making the
              resume-building process quick and enjoyable."
            </p>
          </div>
          <div className="h-48 border-l border-slate-500 lg:h-72 min-[320px]:h-0 min-[320px]:md:h-72 min-[320px]:w-4/5 min-[320px]:border-t min-[320px]:lg:w-0 min-[320px]:md:w-0"></div>
          <div className={`w-4/5 text-center ${darkMode ? "text-slate-300" : "text-black-300"}`}>
            <p>
              "Whether you're a seasoned professional or just starting your career,
              Build Your Resume with Passion ensures that your resume stands out.
              Tailwind CSS's responsive design ensures a seamless experience across
              all devices, so you can create, customize, and download your resume
              anytime, anywhere."
            </p>
          </div>
        </div>
        <div className={`${darkMode ? "text-slate-300" : "text-black-300"} flex items-center justify-center gap-10 p-10 shadow-xl rounded-xl min-[320px]:sm:p-5 md:p-8 lg:p-10 min-[320px]:p-5 min-[320px]:flex-col min-[320px]:gap-5 sm:flex-row md:flex-row lg:flex-row `}>
            <button
              onClick={showWarning}
              id="buttonWarning"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-2xl min-[320px]:sm:text-xl md:text-2xl  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  focus:ring-4 focus:outline-none dark:bg-slate-700 dark:hover:bg-blue-700"
              >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-900 hover:text-white rounded-md group-hover:bg-opacity-0">
                Build now!
              </span>
            </button>
          <div className="h-16 border-l border-slate-500 lg:h-16 min-[320px]:h-0 min-[320px]:md:h-16 min-[320px]:sm:h-16 min-[320px]:border-t min-[320px]:lg:w-0 min-[320px]:md:w-0 min-[320px]:w-4/5 min-[320px]:sm:w-0"></div>
          <span>
            <a
              href="https://github.com/DarkLordGeo/React-resume-builder"
              className="text-2xl cursor-pointer hover:underline min-[320px]:sm:text-xl md:text-xl"
              target="_blank"
            >
              View code on Github
            </a>
          </span>
        </div>
      </main>
      
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

      <Warning shown={clicked}/>

    </div>
    </>
  )
}
export default home