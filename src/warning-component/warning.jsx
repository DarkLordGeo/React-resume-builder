
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faX, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

// function WarningComponent({ warning, hideWarning }) {
//   if (!warning) return null;

//   return (
//     <div
//       id="warningMessage"
//       className="absolute flex-col items-center justify-center w-4/5 p-5 transition-all transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-md dark:bg-gray-900 dark:text-white md:w-3/5 top-1/2 left-1/2 border-slate-500"
//     >
//       <div className="flex justify-end w-full">
//         <button
//           id="closeButton"
//           onClick={hideWarning}
//           className="text-2xl text-slate-700 dark:bg-gray-900 dark:text-white"
//         >
//           <FontAwesomeIcon icon={faX} className="text-2xl" />
//         </button>
//       </div>
//       <div className="flex justify-center text-2xl">
//         <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-500" />
//       </div>
//       <p className="mt-6 mb-8 text-center text-slate-800 dark:bg-gray-900 dark:text-white">
//         Please be aware that this Resume Builder is developed using JavaScript and styled with Tailwind CSS. It is a
//         client-side application and does not interact with any backend server. All data entered will be stored temporarily
//         in the session and cleared when the browser tab is closed or refreshed. Save your progress locally to avoid
//         data loss. This tool is for demonstration purposes, and updates are under development.
//       </p>
//     </div>
//   );
// }

// export default WarningComponent;


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Warning({ hideWarning }) {
  return (
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
            <FontAwesomeIcon
              icon={faX}
              className="text-2xl text-slate-700 dark:bg-gray-900 dark:text-white"
            />
          </button>
        </div>
      </div>
      <p>Warning message goes here</p>
    </div>
  )
}

export default Warning