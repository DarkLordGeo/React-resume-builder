// import firstImage from '../themes/img/first.jpg'
// import secondImage from '../themes/img/second.jpg'
// import thirdImage from '../themes/img/third.jpg'
// import fourthImage from '../themes/img/fourth.jpg'

import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { ThemeContext } from "../toggle/ThemeContext";
import { FormData } from "./formContext.jsx";
import { useNavigate } from 'react-router-dom';
import ThemeComponent from '../themeComponent/ThemeComponent.jsx';


function FormsMain() {


    const { darkMode } = useContext(ThemeContext);

    // Top first
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [about, setAbout] = useState("")
    const aboutChange = (e) => {
        setAbout(e.target.value)
    }

    // set image url
    const [url, setUrl] = useState()
    const updateImage = (img) => {
        setUrl(URL.createObjectURL(img.target.files[0]))
    }
    const nameChange = (name) => {
        setName(name.target.value)
    }
    const positionChange = (position) => {
        setPosition(position.target.value)
    }


    // Contacts

    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [website, setWebsite] = useState("")

    const phoneChange = (e) => {
        setPhone(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const addressChange = (e) => {
        setAddress(e.target.value)
    }
    const websiteChange = (e) => {
        setWebsite(e.target.value)
    }




    // skills
    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState("")
    const [editSkill, seteditSkill] = useState(null);

    const skillChange = (e) => {
        setSkill(e.target.value)
    }
    const updateSkills = () => {
        if (skill.trim() === "") return
        setSkills([...skills, skill.trim()])
        setSkill("")
    }
    const changeSkill = (e, index) => {
        const updatedSkills = [...skills]
        updatedSkills[index] = e.target.value
        setSkills(updatedSkills)
    }

    const skillContainer = skills.map((content, index) => {
        return (
            <div key={index} className="flex items-center justify-center w-full gap-5">
                <div className="w-full">
                    <input
                        value={content}
                        onChange={(e) => changeSkill(e, index)}
                        disabled={editSkill !== index}
                        className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => {
                            const updated = [...skills]
                            updated.splice(index, 1)
                            setSkills(updated)
                        }}
                        type="button"
                        className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                    >
                        Remove
                    </button>
                    <button
                        onClick={() => {
                            if (editSkill === index) {
                                seteditSkill(null)
                            } else {
                                seteditSkill(index)
                            }
                        }}
                        type="button"
                        className={`ml-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                    >
                        {editSkill === index ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        )
    })


    // languages
    const [languages, setLanguages] = useState([])
    const [language, setLanguage] = useState("")
    const [editLanguage, setEditLanguage] = useState(null)

    const languageChange = (e) => {
        setLanguage(e.target.value)
    }

    const updateLanguages = () => {
        if (language.trim() === "") return
        setLanguages([...languages, language.trim()])
        setLanguage("")
    }

    const changeLanguage = (e, index) => {
        const updatedLanguages = [...languages]
        updatedLanguages[index] = e.target.value
        setLanguages(updatedLanguages)
    }

    const languageContainer = languages.map((content, index) => {
        return (
            <div key={index} className="flex items-center justify-center w-full gap-5">
                <div className="w-full">
                    <input
                        value={content}
                        onChange={(e) => changeLanguage(e, index)}
                        disabled={editLanguage !== index}
                        className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => {
                            const updated = [...languages]
                            updated.splice(index, 1)
                            setLanguages(updated)
                        }}
                        type="button"
                        className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                    >
                        Remove
                    </button>
                    <button
                        onClick={() => {
                            if (editLanguage === index) {
                                setEditLanguage(null)
                            } else {
                                setEditLanguage(index)
                            }
                        }}
                        type="button"
                        className={`ml-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                    >
                        {editLanguage === index ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        )
    })


    // Work experience crud
    const [workExperience, setWorkExperience] = useState({
        company: "",
        from: "",
        to: "",
        position: "",
        experience: ""
    })

    const [workExperiences, setWorkExperiences] = useState([])
    const [editExperience, setEditExperience] = useState(null)

    function updateWorkExperience(e) {
        const { name, value } = e.target
        setWorkExperience(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEditChange = (index, e) => {
        const { name, value } = e.target;
        setWorkExperiences(prev => {
            const newExperiences = [...prev];
            newExperiences[index] = {
                ...newExperiences[index],
                [name]: value
            };
            return newExperiences;
        });
    };

    const saveWorkExperience = () => {
        const emptyWorkExp =
            !workExperience.company.trim() &&
            !workExperience.from.trim() &&
            !workExperience.to.trim() &&
            !workExperience.position.trim() &&
            !workExperience.experience.trim()

        if (emptyWorkExp) return

        setWorkExperiences([...workExperiences, workExperience])
        setWorkExperience({
            company: "",
            from: "",
            to: "",
            position: "",
            experience: ""
        });
    }

    const removeWorkExperience = (indexToRemove) => {
        setWorkExperiences(prev =>
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    const workExperiencesContainer = workExperiences.map((content, index) => {
        return (
            <>
                <div className="flex flex-col items-center justify-center w-full gap-5 mt-5">
                    <div className="flex flex-col w-full gap-4">
                        <div className="w-full">
                            <input
                                maxLength={15}
                                name="company"
                                onChange={(e) => handleEditChange(index, e)}
                                disabled={editExperience !== index}
                                value={content.company}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>

                        <div className="w-full">
                            <input
                                maxLength={10}
                                name="from"
                                onChange={(e) => handleEditChange(index, e)}
                                disabled={editExperience !== index}
                                value={content.from}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>

                        <div className="w-full">
                            <input
                                maxLength={10}
                                name="to"
                                onChange={(e) => handleEditChange(index, e)}
                                disabled={editExperience !== index}
                                value={content.to}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>
                        <div className="w-full">
                            <input
                                maxLength={20}
                                name="position"
                                onChange={(e) => handleEditChange(index, e)}
                                disabled={editExperience !== index}
                                value={content.position}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>
                        <div className="flex w-full gap-2">
                            <input
                                maxLength={30}
                                name="experience"
                                onChange={(e) => handleEditChange(index, e)}
                                disabled={editExperience !== index}
                                value={content.experience}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />

                        </div>
                    </div>

                    <div className="flex items-end justify-end w-full">
                        <button
                            onClick={() => removeWorkExperience(index)}
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => {
                                if (editExperience === index) {
                                    setEditExperience(null)
                                } else {
                                    setEditExperience(index)
                                }
                            }}

                            type="button"
                            className={`ml-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                        >
                            {editExperience === index ? "Save" : "Edit"}

                        </button>
                    </div>

                </div>
            </>
        )
    })

    const [achievments, setAchievments] = useState([])

    const [achievment, setAchievment] = useState("")

    const achievmentChange = (e) => {
        setAchievment(e.target.value)
    }





    // Education crud
    const [education, setEducation] = useState({
        university: "",
        fromEdu: "",
        toEdu: "",
        faculcy: "",
        // gpa: ""
    })
    const [educations, setEducations] = useState([])
    const [editEducation, setEditEducation] = useState(null)

    function updateEducation(e) {
        const { name, value } = e.target
        setEducation(props => ({
            ...props,
            [name]: value
        }))
    }

    const handleEducationEditChange = (index, e) => {
        const { name, value } = e.target
        setEducations(prev => {
            const newEducations = [...prev]
            newEducations[index] = {
                ...newEducations[index],
                [name]: value
            }
            return newEducations;
        })

    }

    const saveEducation = () => {
        const emptyEduc =
            !education.university.trim() &&
            !education.fromEdu.trim() &&
            !education.toEdu.trim() &&
            !education.faculcy.trim()

        if (emptyEduc) return

        setEducations([...educations, education])
        setEducation({
            university: "",
            fromEdu: "",
            toEdu: "",
            faculcy: "",
            // gpa: ""
        })
    }
    const removeEducation = (indexToRemove) => {
        setEducations(prev =>
            prev.filter((_, index) => index !== indexToRemove)
        )
    }

    const educationContainer = educations.map((content, index) => {
        return (
            <>
                <div className="flex flex-col items-center justify-center w-full gap-5 mt-5">
                    <div className="flex flex-col w-full gap-4">

                        <div className="w-full">
                            <input
                                maxLength={15}
                                name="university"
                                onChange={(e) => handleEducationEditChange(index, e)}
                                disabled={editEducation !== index}
                                value={content.university}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>

                        <div className="w-full">
                            <input
                                maxLength={10}
                                name="fromEdu"
                                onChange={(e) => handleEducationEditChange(index, e)}
                                disabled={editEducation !== index}
                                value={content.fromEdu}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>

                        <div className="w-full">
                            <input
                                maxLength={10}
                                name="toEdu"
                                onChange={(e) => handleEducationEditChange(index, e)}
                                disabled={editEducation !== index}
                                value={content.toEdu}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>

                        <div className="w-full">
                            <input
                                maxLength={20}
                                name="faculcy"
                                onChange={(e) => handleEducationEditChange(index, e)}
                                disabled={editEducation !== index}
                                value={content.faculcy}
                                className={`w-full outline-none bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                            `}
                            />
                        </div>

                    </div>

                    <div className="flex items-end justify-end w-full">
                        <button
                            onClick={() => removeEducation(index)}
                            type="button"
                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => {
                                if (editEducation === index) {
                                    setEditEducation(null)
                                } else {
                                    setEditEducation(index)
                                }
                            }}

                            type="button"
                            className={`ml-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                        >
                            {editEducation === index ? "Save" : "Edit"}

                        </button>
                    </div>

                </div>
            </>
        )
    })

    const inputData = {
        url: url || "",
        name: name,
        position: position,
        about: about,

        phone: phone,
        email: email,
        address: address,
        website: website,


        skills: skills,
        languages: languages,

        experiences: workExperiences,
        education: educations,

    }

    const { inputProps, setInputProps } = useContext(FormData)

    const navigate = useNavigate()
    function navigateDownloadPage() {
        setInputProps(inputData)
        navigate("/download")
    }


    const isFormComplete = Object.values(inputData).every(
        val => val && val.toString().trim() !== ""
    )


    const index = localStorage.getItem("index")


    return (
        <>
            <main className={`flex flex-col justify-start ${darkMode ? 'dark:bg-gray-900 ' : 'bg-light-bg text-light-text'} lg:flex-row lg:justify-center items-center px-2.5 py-5  lg:items-start lg:py-5 min-h-screen`}>

                <div className="flex flex-col items-center justify-center w-full gap-5 px-5 py-10 rounded-md shadow-xl lg:w-3/4">

                    <Accordion collapseAll className='w-full '>



                        {/* Name/Positiion */}
                        <AccordionPanel className='w-full '>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none 
                            ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : ' hover:!bg-slate-100 !text-black !bg-white'}`}>
                                Name / Position
                            </AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className='flex flex-col gap-5 sm:flex-row'>
                                    <div className="flex items-center justify-center w-full lg:w-2/4">
                                        <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ${darkMode ? 'bg-black  dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600' : 'dark:border-gray-600 bg-gray-50 !text-black hover:bg-gray-100'} `}>
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG  (RECOMENDED  100x100px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" onChange={updateImage} required />
                                        </label>
                                    </div>

                                    <div className='w-full sm:w-3/6'>
                                        <div className="w-full mb-6 sm:w-full">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Name/Surname</label>
                                            <input
                                                maxLength={25}
                                                onChange={nameChange}
                                                type="text" id="default-input"
                                                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                        `}
                                            />
                                        </div>
                                        <div className="w-full mb-6 sm:w-full">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Position</label>
                                            <input
                                                maxLength={25}
                                                onChange={positionChange}
                                                type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                        `}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        {/* Contact */}
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
                                            <input
                                                maxLength={25}
                                                onChange={phoneChange}
                                                type="tel"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                required
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Address</label>
                                            <input
                                                maxLength={25}
                                                onChange={addressChange}
                                                type="text" id="default-input"
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
                                            <input
                                                maxLength={25}
                                                onChange={emailChange}
                                                type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                        <div className="w-full mb-6">
                                            <label htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >Website</label>
                                            <input
                                                maxLength={25}
                                                onChange={websiteChange}
                                                type="text" id="default-input"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        {/* About */}
                        <AccordionPanel className='w-full'>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none
                                ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : 'hover:!bg-slate-100 !text-black !bg-white'}
                            `}>
                                About
                            </AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:flex-row lg:gap-5">
                                    <div className="w-full mb-6 ">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Bio
                                        </label>
                                        <textarea
                                            maxLength={120}
                                            onChange={aboutChange}
                                            type="text"
                                            id="default-input"
                                            className={`outline-none w-full h-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 
                                            ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                </div>

                            </AccordionContent>
                        </AccordionPanel>

                        {/* Work experience */}
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
                                            maxLength={13}
                                            name="company"
                                            value={workExperience.company}
                                            onChange={updateWorkExperience}
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
                                            className="flex items-center justify-center w-full"
                                        >
                                            <div className="relative w-full">
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
                                                    maxLength={10}
                                                    name="from"
                                                    onChange={updateWorkExperience}
                                                    value={workExperience.from}
                                                    id="datepicker-range-start"
                                                    type="text"
                                                    className={`pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                    `}
                                                    placeholder="Select date start"
                                                />
                                            </div>
                                            <span className="mx-4 text-gray-500">to</span>
                                            <div className="relative w-full">
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
                                                    maxLength={10}
                                                    name="to"
                                                    onChange={updateWorkExperience}
                                                    value={workExperience.to}
                                                    id="datepicker-range-end"
                                                    type="text"
                                                    className={`pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                    ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                    `}
                                                    placeholder="Select date end"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:gap-5">
                                    <div className="w-full mb-6 ">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Position
                                        </label>
                                        <input
                                            maxLength={50}
                                            name="position"
                                            onChange={updateWorkExperience}
                                            value={workExperience.position}
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="flex w-full gap-4">
                                        <div className="w-full mb-3">
                                            <label
                                                htmlFor="default-input"
                                                className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                            >
                                                Experience
                                            </label>
                                            <input
                                                maxLength={50}
                                                name="experience"
                                                onChange={updateWorkExperience}
                                                value={workExperience.experience}
                                                type="text"
                                                id="default-input"
                                                className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-end w-full">
                                    <button
                                        onClick={saveWorkExperience}
                                        type="button"
                                        className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-col w-full gap-5">
                                    {workExperiencesContainer}
                                </div>
                            </AccordionContent>
                        </AccordionPanel>


                        {/* Skills/language */}
                        <AccordionPanel className='w-full'>
                            <AccordionTitle className={`w-full focus:ring-0 focus:outline-none 
                                ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                                    : 'hover:!bg-slate-100 !text-black !bg-white'}
                                `}>
                                Skills | Languages
                            </AccordionTitle>
                            <AccordionContent className={`${darkMode ? 'bg-black' : '!bg-white !text-black'}`}>
                                <div className="flex w-full gap-5">
                                    <div className="w-full mb-7">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Add skill
                                        </label>
                                        <input
                                            maxLength={25}
                                            value={skill}
                                            onChange={skillChange}
                                            type="text"
                                            id="default-input"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            onClick={updateSkills}
                                            type="button"
                                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 mb-6">
                                    {skillContainer}
                                </div>
                                <div className="flex w-full gap-5">
                                    <div className="w-full mb-7">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Add Language
                                        </label>
                                        <input
                                            maxLength={25}
                                            value={language}
                                            onChange={languageChange}
                                            type="text"
                                            id="default-input"
                                            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            onClick={updateLanguages}
                                            type="button"
                                            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 mb6">
                                    {languageContainer}
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                        {/* Education */}
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
                                            maxLength={25}
                                            name="university"
                                            value={education.university}
                                            onChange={updateEducation}
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

                                            <div className="relative w-full">
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
                                                    maxLength={10}
                                                    name="fromEdu"
                                                    value={education.fromEdu}
                                                    onChange={updateEducation}
                                                    id="datepicker-range-start"
                                                    type="text"
                                                    className={`pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                `}
                                                    placeholder="Select date start"
                                                />
                                            </div>
                                            <span className={`mx-4 text-gray-500
                                                ${darkMode ? 'text-gray-500' : '!text-black'}
                                                `}>to</span>
                                            <div className="relative w-full">
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
                                                    maxLength={10}
                                                    name="toEdu"
                                                    onChange={updateEducation}
                                                    value={education.toEdu}
                                                    id="datepicker-range-end"
                                                    type="text"
                                                    className={`pl-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                                `}
                                                    placeholder="Select date end"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center w-full gap-0 lg:gap-5 lg:flex-row">
                                    <div className="w-full mb-6 ">
                                        <label
                                            htmlFor="default-input"
                                            className={`block mb-2 text-sm font-medium text-gray-900 ${darkMode ? 'dark:text-white' : 'text-black'} `}
                                        >
                                            Faculcy
                                        </label>
                                        <input
                                            maxLength={25}
                                            name="faculcy"
                                            value={education.faculcy}
                                            onChange={updateEducation}
                                            type="text"
                                            id="default-input"
                                            className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                                ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : "focus:outline-1 outline-slate-300"}
                                            `}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-end justify-end w-full">
                                    <button
                                        onClick={saveEducation}
                                        type="button"
                                        className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-col w-full gap-5">
                                    {educationContainer}
                                </div>
                            </AccordionContent>
                        </AccordionPanel>


                    </Accordion>

                </div>

                <div className="flex flex-col items-center justify-center w-3/6 gap-5 px-4 py-10 sm:px-6">
                    <ThemeComponent {...inputData} />
                    <div className="flex justify-center">
                        {isFormComplete ?
                            <button
                                onClick={navigateDownloadPage}
                                type="button"
                                className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                            >
                                Go to download page
                            </button>
                            :
                            <>
                                <p
                                    className={`select-none text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ${darkMode ? 'dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' : 'bg-white text-black '}`}
                                >Fill Out Forms</p>
                            </>
                        }
                    </div>
                </div>

            </main>
        </>
    )
}

export default FormsMain