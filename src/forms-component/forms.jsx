
function Forms(){
    return(
        <>
            <header className="flex items-center justify-around w-full h-auto gap-10 px-20 py-5  shadow-md xl:gap-5 min-[320px]:justify-evenly md:justify-evenly lg:justify-around min-[320px]:px-0 dark:bg-gray-900 dark:text-white dark:border-b-slate-500 dark:border-2 dark:border-solid dark:border-l-0 dark:border-r-0 dark:border-t-0">
                <div>
                <p className="my-5 text-4xl transition-colors  md:text-3xl lg:text-4xl lg:block min-[320px]:justify-center min-[320px]:text-xl ">
                    Resume builder
                </p>
                </div>
                <div className="">
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
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked=""
                        id="toggleMode"
                        />
                        <div className="shadow-xl relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
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
            <main className="flex flex-col justify-start lg:flex-row lg:justify-center items-center px-2.5 py-5 dark:bg-gray-900 dark:text-white lg:items-start lg:py-5 min-h-screen">
                <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 rounded-md shadow-xl">
                {/* first accordion */}
                <div id="accordion-collapse" data-accordion="collapse" className="w-full">
                    {/* Name desired position */}
                    <h2 id="accordion-collapse-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rtl:text-right rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                    >
                        <span>Name | Desired job position</span>
                        <svg
                        data-accordion-icon=""
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                        </svg>
                    </button>
                    </h2>
                    <div
                    id="accordion-collapse-body-1"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                    >
                    <div className="flex flex-col items-center justify-center gap-5 p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 sm:flex-row">
                        <div className="w-full mb-6 sm:w-3/5">
                        <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Name{" "}
                        </label>
                        <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                        <div className="w-full mb-6 sm:w-3/5">
                        <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Desired position
                        </label>
                        <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                    </div>
                    </div>
                    {/* contact */}
                    <h2 id="accordion-collapse-heading-2">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right 0 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                    >
                        <span>Contact</span>
                        <svg
                        data-accordion-icon=""
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                        </svg>
                    </button>
                    </h2>
                    <div
                    id="accordion-collapse-body-2"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-2"
                    >
                    <div className="flex flex-col items-center justify-start gap-5 p-5 border border-gray-200 dark:border-gray-700 lg:flex-row rounded-b-xl">
                        <div className="w-full lg:w-full">
                        <div className="w-full mb-6">
                            <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Phone
                            </label>
                            <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="w-full mb-6">
                            <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Address
                            </label>
                            <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        </div>
                        <div className="w-full lg:1/2">
                        <div className="w-full mb-6">
                            <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Email
                            </label>
                            <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="w-full mb-6">
                            <label
                            htmlFor="default-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Website
                            </label>
                            <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* second accordion */}
                <div id="accordion-collapse" data-accordion="collapse" className="w-full">
                    {/* Work experience */}
                    <h2 id="accordion-collapse-heading-3">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rtl:text-right rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-3"
                    >
                        <span>Work experience</span>
                        <svg
                        data-accordion-icon=""
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                        </svg>
                    </button>
                    </h2>
                    <div
                    id="accordion-collapse-body-3"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-3"
                    >
                    <div className="flex flex-col items-center justify-center p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
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
                    </div>
                    </div>
                    {/* Skills */}
                    <h2 id="accordion-collapse-heading-4">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right 0 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-4"
                    >
                        <span>Skills | Languages</span>
                        <svg
                        data-accordion-icon=""
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                        </svg>
                    </button>
                    </h2>
                    <div
                    id="accordion-collapse-body-4"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-4"
                    >
                    <div className="flex flex-col items-center justify-start p-5 border border-gray-200 dark:border-gray-700 ">
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
                    </div>
                    </div>
                    {/* education */}
                    <h2 id="accordion-collapse-heading-5">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right 0 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-5"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-5"
                    >
                        <span>Education</span>
                        <svg
                        data-accordion-icon=""
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                        </svg>
                    </button>
                    </h2>
                    <div
                    id="accordion-collapse-body-5"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-5"
                    >
                    <div className="flex flex-col items-center justify-center p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
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
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center w-4/5 gap-5 px-5 py-12 min-[0px]:max-[469px]:px-0 min-[0px]:max-[469px]:py-3">
                <div className="items-center justify-center hidden sm:flex">
                    <img
                    src="Blue and Gray Simple Professional CV Resume.jpg"
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
export default Forms