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

                    <Accordion collapseAll className='w-full '>
                        <AccordionPanel className='w-full '>
                            <AccordionTitle className='w-full focus:ring-0 focus:outline-none'>Name / Desired position</AccordionTitle>
                            <AccordionContent>
                                <div className='flex flex-row gap-5'>
                                    <div className="w-full mb-6 sm:w-3/5">
                                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="w-full mb-6 sm:w-3/5">
                                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired position</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </div>

                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel className='w-full '>
                            <AccordionTitle className='w-full focus:ring-0 focus:outline-none'>Contact</AccordionTitle>
                            <AccordionContent>
                                <div className='flex flex-row gap-5'>
                                    <div className="w-full lg:w-full">
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:1/2">
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel className='w-full'>
                            <AccordionTitle className='w-full focus:ring-0 focus:outline-none'>
                                Work experience
                            </AccordionTitle>
                            <AccordionContent>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:flex-row lg:gap-5">
                                    <div className="w-full mb-6 lg:w-3/5">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </div>
                                    <div className="w-full mb-6 lg:w-3/5">
                                    {/* <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired position</label> */}
                                    {/* <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-sm font-medium text-center text-gray-900 lg:text-left dark:text-white"
                                    >
                                        From to
                                    </label>
                                    <div
                                        id="date-range-picker"
                                        date-rangepicker=""
                                        className="flex items-center justify-center w-full"
                                    >
                                        <div className="relative">
                                        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                            <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <input
                                            id="datepicker-range-start"
                                            name="start"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                            placeholder="Select date start"
                                        />
                                        </div>
                                        <span className="mx-4 text-gray-500">to</span>
                                        <div className="relative">
                                        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                            <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <input
                                            id="datepicker-range-end"
                                            name="end"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Select date end"
                                        />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:flex-row lg:gap-5">
                                    <div className="w-full mb-6 lg:w-3/5">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </div>
                                    <div className="w-full mb-6 lg:w-3/5">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        What did you do
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel className='w-full'>
                            <AccordionTitle className='w-full focus:ring-0 focus:outline-none'>
                                Skills | Languages
                            </AccordionTitle>
                            <AccordionContent>
                                <div className="flex w-full gap-5">
                                    <div className="w-full mb-6">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Add skill
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </div>
                                    <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        Add
                                    </button>
                                    </div>
                                </div>
                                <div className="flex w-full gap-5">
                                    <div className="w-full mb-6">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Add Language
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </div>
                                    <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        Add
                                    </button>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel className='w-full'>
                            <AccordionTitle className='w-full focus:ring-0 focus:outline-none'>
                                Education
                            </AccordionTitle>
                            <AccordionContent>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:flex-row lg:gap-5">
                                        <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Univeristy/School name
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        </div>
                                        <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            From to
                                        </label>
                                        <div
                                            id="date-range-picker"
                                            date-rangepicker=""
                                            className="flex items-center justify-center w-full"
                                        >
                                            <div className="relative">
                                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                                <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                >
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <input
                                                id="datepicker-range-start"
                                                name="start"
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Select date start"
                                            />
                                            </div>
                                            <span className="mx-4 text-gray-500">to</span>
                                            <div className="relative">
                                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                                <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                >
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <input
                                                id="datepicker-range-end"
                                                name="end"
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Select date end"
                                            />
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:gap-5 lg:flex-row">
                                        <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Faculcy
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        </div>
                                        <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            GPA (optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        </div>
                                </div>
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