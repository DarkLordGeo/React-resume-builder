// import home from "../home-component/Home"
import React, {useState} from "react"

function warningComponent(){


    return(
        <>
            {warning &&(
                <div
                id="warningMessage"
                className="absolute flex-col items-center justify-center w-4/5 p-5 transition-all transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-md dark:bg-gray-900 dark:text-white md:w-3/5 top-1/2 left-1/2 border-slate-500"
              >
                <div className="flex justify-end w-full">
                  <div className="flex">
                    <span />
                  </div>
                  <div id="closeButtonParent">
                    <button
                      id="closeButton"
                      onClick={hideWarning}
                      className="text-2xl text-slate-700 dark:bg-gray-900 dark:text-white"
                    >
                      <FontAwesomeIcon icon={faX} 
                      className="text-2xl text-slate-700 dark:bg-gray-900 dark:text-white"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center text-2xl">
                  <div id="warningIcon" className="text-yellow-500">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                  </div>
                </div>
                <div>
                  <p
                    className="mt-6 mb-8 text-center text-slate-800 dark:bg-gray-900 dark:text-white"
                  >
                    Please be aware that this Resume Builder is developed using JavaScript
                    and styled with Tailwind CSS. It is a client-side application and does
                    not interact with any backend server. As such, all data entered
                    (including form inputs, text, and file uploads) will be stored
                    temporarily in the session and will be cleared when the browser tab is
                    closed or refreshed. To ensure your data is not lost, we recommend
                    manually saving any progress locally before ending your session. This
                    tool is intended for demonstration purposes only, and additional
                    features and updates are under development.
                  </p>
                </div>
                </div>
            )}
        </>
    )
}


export default warningComponent