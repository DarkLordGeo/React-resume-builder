import { useContext, useRef, useState } from 'react';
import { ThemeContext } from "../toggle/ThemeContext";
import { useNavigate } from 'react-router-dom';



function ThemeComponent() {
    const navigate = useNavigate()
    const { darkMode } = useContext(ThemeContext);
    
    const index = localStorage.getItem("index")
    function navigateDownloadPage() {
        navigate("/download")
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-2xl gap-5 px-5 min-[0px]:max-[469px]:px-0 min-[0px]:max-[469px]:py-3">
                <div className="w-[794px] h-[1123px] bg-white" >
                    <div className="flex flex-col items-center justify-center h-full shadow-xl ">
                        <div className="flex items-center justify-center w-full px-0 py-16 bg-costum-blue ">
                            <div className="flex flex-col items-start justify-center mt-8 text-white ml-36">
                                <div className="text-4xl font-bold ">
                                    <h1>Name Surname</h1>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-thin">position</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-stretch justify-center w-full h-full ">
                            <div className="flex flex-col items-start flex-1 w-full px-5 py-5 bg-costum-gray">
                                <div className="flex items-center justify-center w-auto -mt-36">
                                    <img
                                        className="rounded-full border-white border-4 w-[200px] h-[200px] object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-start w-full h-full gap-8 mt-5">
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col items-start justify-start gap-3">
                                            <div className="w-full border-t-0 border-b-2 border-l-0 border-r-0 border-costum-blue">
                                                <h1 className="text-2xl font-bold tracking-[5px] text-costum-blue pb-[15px]">
                                                    CONTACT
                                                </h1>
                                            </div>
                                            <div className="flex flex-col items-start justify-start gap-3 font-normal mt-[10px] text-[15px]">
                                                <div className="flex items-end justify-start gap-1">
                                                    <div className="fill-costum-blue">
                                                        <svg width={"20px"} height={"20px"}
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"></path></g></svg>
                                                    </div>
                                                    <div className="-mt-[25px] absolute top-[596px] ml-[20px]">
                                                        <p>(715) 333-2541</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-end justify-center gap-1">
                                                    <div className="fill-costum-blue">
                                                        <svg width={"20px"} height={"20px"}
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="email"> <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"></path> </g> </g> </g></svg>
                                                    </div>
                                                    <div>
                                                        <p>john8702@goldinbox.net</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-end justify-center gap-1">
                                                    <div className="fill-costum-blue" >
                                                        <svg width={"20px"} height={"20px"}
                                                            viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-106.000000, -413.000000)" > <path d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z" id="location" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                                                    </div>
                                                    <div>
                                                        <p>774 Harvest Laney</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-end justify-center gap-1">
                                                    <div className="fill-costum-blue">
                                                        <svg width={"20px"} height={"20px"}
                                                            viewBox="0 0 512 512" id="_x30_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z"></path></g></svg>
                                                    </div>
                                                    <div>
                                                        <a href="youtube.com">mywebsite.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full skillsHeader">
                                        <div className="flex flex-col items-start justify-center ">
                                            <div className="w-full border-t-0 border-b-2 border-l-0 border-r-0 border-costum-blue">
                                                <h1 className="text-2xl font-bold tracking-[5px] text-costum-blue pb-[15px]">
                                                    SKILLS
                                                </h1>
                                            </div>
                                            <div>
                                                <ul className="px-5 font-normal list-disc text-costum-blue mt-[10px] text-[15px]">
                                                    <li>HTML</li>
                                                    <li>Arduino</li>
                                                    <li>PCB Design</li>
                                                    <li>Penetration Testing</li>
                                                    <li>React</li>
                                                    <li>Power Electronics</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full Languagesr">
                                        <div className="flex flex-col items-start justify-center">
                                            <div className="w-full border-t-0 border-b-2 border-l-0 border-r-0 border-costum-blue">
                                                <h1 className="w-full text-2xl font-bold  text-costum-blue pb-[15px] tracking-[5px]">
                                                    LANGUAGES
                                                </h1>
                                            </div>
                                            <div>
                                                <ul className="px-5 font-normal list-disc text-costum-blue mt-[10px] text-[15px]">
                                                    <li>JavaScript</li>
                                                    <li>C</li>
                                                    <li>Python</li>
                                                    <li>Rust</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full px-4 bg-white ">
                                <div className="px-4 py-5">
                                    <ol className="relative border-costum-blue border-s">
                                        <li className="flex flex-row gap-1 mb-10">
                                            <div className="flex flex-row align-middle justify-items-start -ml-[11px]">
                                                <div className="w-[25px] mt-[5px]">
                                                    <span className="flex items-center justify-center p-[5px] rounded-full ring-8 ring-white bg-custom-blue w-[25px] h-[25px] bg-costum-blue  fill-white">
                                                        <svg width={"20px"} height={"20px"}
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <h3 className="pb-2 text-xl font-bold border-b-2 border-b-costum-blue text-costum-blue">
                                                    Profile
                                                </h3>
                                                <p className="mt-4 font-normal text-costum-blue text-[15px] ">
                                                    Get access to over 20+ pages including a dashboard layout, charts,
                                                    kanban board, calendar, and pre-order E-commerce &amp; Marketing
                                                    pages.
                                                </p>
                                            </div>



                                        </li>

                                        <li className="flex flex-row gap-1 mb-10">
                                            <div className="flex flex-row align-middle justify-items-start -ml-[11px]">
                                                <div className="w-[25px] mt-[5px]">
                                                    <span className=" flex items-center justify-center p-[5px] rounded-full ring-8 ring-white bg-custom-blue w-[25px] h-[25px] bg-costum-blue  fill-white">
                                                        <svg width={"20px"} height={"20px"}
                                                            viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>suitcase1</title> <path d="M27 29h-23c-1.105 0-2-0.896-2-2v-12c0 0 5.221 2.685 10 3.784v1.216c0 0.553 0.447 1 1 1h5c0.552 0 1-0.447 1-1v-1.216c4.778-1.099 10-3.784 10-3.784v12c0 1.104-0.896 2-2 2zM17 17c0.552 0 1 0.447 1 1v1c0 0.553-0.448 1-1 1h-3c-0.553 0-1-0.447-1-1v-1c0-0.553 0.447-1 1-1h3zM19 17c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1v0.896c-4.779-1.132-10-3.896-10-3.896v-4c0-1.104 0.895-2 2-2h6v-2c0-1.104 0.896-2 2-2h7c1.104 0 2 0.896 2 2v2h6c1.104 0 2 0.896 2 2v4c0 0-5.222 2.764-10 3.896v-0.896zM19 7c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1h7c0 0 0-0.448 0-1z"></path> </g></svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <h3 className="pb-2 text-2xl font-bold border-b-2 border-b-costum-blue text-costum-blue">
                                                    Work Experience
                                                </h3>
                                                <div>
                                                    <div className="flex justify-between w-full mt-3 text-costum-blue">
                                                        <div className="flex flex-row gap-2">
                                                            <div>
                                                                <div className="text-lg font-medium">
                                                                    <p>Borcelle studio</p>
                                                                </div>
                                                                <div className="text-sm font-semibold">
                                                                    <p>Marketing manager </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="font-base">
                                                            <p>2004 - present</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 ml-8 font-normal">
                                                        <ul className="list-disc text-costum-blue">
                                                            <li>Boosted nvidia sales</li>
                                                            <li>Boosted nvidia sales</li>
                                                            <li>Boosted nvidia sales</li>
                                                            <li>Boosted nvidia sales</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="flex flex-row gap-1 mb-10">
                                            <div className="flex flex-row align-middle justify-items-start -ml-[11px]">
                                                <div className="w-[25px] mt-[5px]">
                                                    <span className="flex items-center justify-center p-[5px] rounded-full ring-8 ring-white bg-custom-blue w-[25px] h-[25px] bg-costum-blue  fill-white">
                                                        <svg width={"20px"} height={"20px"}
                                                            version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31,26c-0.6,0-1-0.4-1-1V12c0-0.6,0.4-1,1-1s1,0.4,1,1v13C32,25.6,31.6,26,31,26z"></path> </g> <g> <path d="M16,21c-0.2,0-0.3,0-0.5-0.1l-15-8C0.2,12.7,0,12.4,0,12s0.2-0.7,0.5-0.9l15-8c0.3-0.2,0.6-0.2,0.9,0l15,8 c0.3,0.2,0.5,0.5,0.5,0.9s-0.2,0.7-0.5,0.9l-15,8C16.3,21,16.2,21,16,21z"></path> </g> <path d="M17.4,22.6C17,22.9,16.5,23,16,23s-1-0.1-1.4-0.4L6,18.1V22c0,3.1,4.9,6,10,6s10-2.9,10-6v-3.9L17.4,22.6z"></path> </g></svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <h3 className="pb-2 text-2xl font-bold border-b-2 border-b-costum-blue text-costum-blue">
                                                    Education
                                                </h3>
                                                <div className="flex justify-between w-full mt-3 text-costum-blue">
                                                    <div className="flex flex-row gap-2">
                                                        <div className="text-lg font-medium">
                                                            <p>SEO university</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-normal">
                                                            <p>2004 - present</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-costum-blue">
                                                    <h5>Bachelor of normality</h5>
                                                    <p className="font-bold">GPA: <span className="font-normal">3.5</span></p>
                                                </div>

                                                <div className="flex justify-between w-full mt-3 text-costum-blue">
                                                    <div className="flex flex-row gap-2">
                                                        <div className="text-lg font-medium">
                                                            <p>IT step academy</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-normal">
                                                            <p>2024 - 2025</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-costum-blue">
                                                    <h5>Front end programming</h5>
                                                    <p className="font-bold"><span className="font-normal"></span></p>
                                                </div>

                                                <div className="flex justify-between w-full mt-3 text-costum-blue">
                                                    <div className="flex flex-row gap-2">
                                                        <div className="text-lg font-medium">
                                                            <p>IT step academy</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-normal">
                                                            <p>2024 - 2025</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-costum-blue">
                                                    <h5>Front end programming</h5>
                                                    <p className="font-bold"><span className="font-normal"></span></p>
                                                </div>
                                            </div>
                                        </li>


                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={navigateDownloadPage}
                        type="button"
                        className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                    >
                        Go to download page
                    </button>
                </div>
            </div>
        </>
    )
}

export default ThemeComponent