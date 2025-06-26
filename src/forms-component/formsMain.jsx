import firstImage from '../themes/img/first.jpg'
import secondImage from '../themes/img/second.jpg'
import thirdImage from '../themes/img/third.jpg'
import fourthImage from '../themes/img/fourth.jpg'

import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { ThemeContext } from "../toggle/ThemeContext";

function FormsMain(){

    const { darkMode } = useContext(ThemeContext);
    
    const images = [firstImage,secondImage,thirdImage,fourthImage]
    const index = localStorage.getItem("index")
    
    // const [open,setOpen] = useState(false)

    // const openInput = () =>{
    //     setOpen(_ => !_)
    // }
    
    return(
        <>
            <main className={`flex flex-col justify-start ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text'} lg:flex-row lg:justify-center items-center px-2.5 py-5  lg:items-start lg:py-5 min-h-screen`}>
                
                <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 rounded-md shadow-xl">

{/* className="flex flex-col items-center justify-center gap-5 p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 sm:flex-row" */}
                    <Accordion collapseAll className='w-full'>
                        <AccordionPanel className='w-full'>
                            <AccordionTitle className='w-full'>Name / Desired position</AccordionTitle>
                            <AccordionContent className='flex flex-row gap-5'>
                                <div class="w-full mb-6 sm:w-3/5">
                                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
                                    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div class="w-full mb-6 sm:w-3/5">
                                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired position</label>
                                    <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                    dropdowns, modals, navbars, and more.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out this guide to learn how to&nbsp;
                                    <a
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                    get started&nbsp;
                                    </a>
                                    and start developing websites even faster with components on top of Tailwind CSS.
                                </p> */}
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                </div>

                <div className="flex flex-col items-center justify-center w-4/5 gap-5 px-5 py-12 min-[0px]:max-[469px]:px-0 min-[0px]:max-[469px]:py-3">
                    <div className="items-center justify-center hidden sm:flex">
                        <img
                        src={images[index]}
                        alt=""
                        className="w-4/5"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                        Download
                        </button>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default FormsMain