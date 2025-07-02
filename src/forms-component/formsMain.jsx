import firstImage from '../themes/img/first.jpg'
import secondImage from '../themes/img/second.jpg'
import thirdImage from '../themes/img/third.jpg'
import fourthImage from '../themes/img/fourth.jpg'

import { usePDF } from 'react-to-pdf'


import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';

import Theme1 from '../theme1/Theme1.jsx'

import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { ThemeContext } from "../toggle/ThemeContext";

import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

function FormsMain() {
    const { toPDF, targetRef } = usePDF({filename: 'test.pdf'});

    const { darkMode } = useContext(ThemeContext);

    const images = [firstImage, secondImage, thirdImage, fourthImage]
    const index = localStorage.getItem("index")


    return (
        <>
            <main className={`flex flex-col justify-start ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-light-bg text-light-text'} lg:flex-row lg:justify-center items-center px-2.5 py-5  lg:items-start lg:py-5 min-h-screen`}>

                <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 rounded-md shadow-xl">

                    <Accordion collapseAll className='w-full '>

                        <AccordionPanel className='w-full '>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none 
                            ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : ' hover:!bg-slate-100 !text-black !bg-white'}`}>
                                Name / Desired position</AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className='flex flex-col gap-5 sm:flex-row'>
                                    <div className="flex items-center justify-center w-full sm:w-3/6">
                                        <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ${darkMode ? 'bg-black  dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600' : 'dark:border-gray-600 bg-gray-50 !text-black hover:bg-gray-100 '}`}>
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <div className='w-full sm:w-3/6'>
                                        <div className="w-full mb-6 sm:w-full">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Name </label>
                                            <input type="text" id="default-input"
                                                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                        `}
                                            />
                                        </div>
                                        <div className="w-full mb-6 sm:w-full">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Desired position</label>
                                            <input type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                        `}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel className='w-full '>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none 
                                 ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : ' hover:!bg-slate-100 !text-black !bg-white'}
                                `}>Contact</AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className='flex flex-row gap-5'>
                                    <div className="w-full lg:w-full">
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Phone</label>
                                            <input type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Address</label>
                                            <input type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:1/2">
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Email</label>
                                            <input type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Website</label>
                                            <input type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel className='w-full'>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none
                                ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : 'hover:!bg-slate-100 !text-black !bg-white'}
                            `}>
                                Work experience
                            </AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:flex-row lg:gap-5">
                                    <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Company name
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
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
                                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                    `}
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
                                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                    `}
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
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Position
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Experience
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel className='w-full'>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none 
                                ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : 'hover:!bg-slate-100 !text-black !bg-white'}
                                
                                `}>
                                Skills | Languages
                            </AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className="flex w-full gap-5">
                                    <div className="w-full mb-6">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Add skill
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="button"
                                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <div className="flex w-full gap-5">
                                    <div className="w-full mb-6">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Add Language
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="button"
                                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel className='w-full'>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none
                                ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : 'hover:!bg-slate-100 !text-black !bg-white'}
                                `}>
                                Education
                            </AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:flex-row lg:gap-5">
                                    <div className={`w-full mb-6 lg:w-3/5
                                        `}>
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white
                                            ${darkMode ? 'text-slate-50' : '!text-black'}
                                                `}
                                        >
                                            Univeristy/School name
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                `}
                                        />
                                    </div>
                                    <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white
                                                ${darkMode ? 'text-slate-50' : '!text-black'}
                                                `}
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
                                                        className={`w-4 h-4 text-gray-500 dark:text-gray-400`}
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
                                                    className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                `}
                                                    placeholder="Select date start"
                                                />
                                            </div>
                                            <span className={`mx-4 text-gray-500
                                                ${darkMode ? 'text-gray-500' : '!text-black'}
                                                `}>to</span>
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
                                                    className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                `}
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
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Faculcy
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="w-full mb-6 lg:w-3/5">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            GPA (optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="default-input"
                                            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                    </Accordion>

                </div>
{/* className='w-[794px] h-[1123px]' */}
                <div className="flex flex-col items-center justify-center w-2xl gap-5 px-5 py-10 min-[0px]:max-[469px]:px-0 min-[0px]:max-[469px]:py-3">
                    <div ref={targetRef} >
                          <Theme1/>  
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => toPDF()}
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
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