/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import information from '../../assets/information.png'
import Innovative from "./Innovatice";

const RightToInformation = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto mt-10 md:mt-36 px-2 md:px-0">
                <div className="md:flex justify-between items-center">
                <div className="md:flex justify-center gap-10 items-center">
                    <div className="flex flex-col items-center space-y-3 mb-5 md:mb-0">
                    <img className="w-12 md:w-20" src={information} alt="" data-aos="fade-left" />
                        <h1 className="md:text-2xl font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md" data-aos="fade-right">Information</h1>
                    </div>
                    <div className="space-y-4 border-r-2 border-[#683091] pr-5 rounded-md">
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Designated Officer & Appellate Authority
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-down">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Application and appeal forms
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Self Expressible Information/Progress Report
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" >
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Laws /Rules /Workplan /Reports 
                            </span>
                        </div>
                        
                    </div>
                </div>
                <Innovative />
                </div>
            </div>
        </div>
    );
};

export default RightToInformation;