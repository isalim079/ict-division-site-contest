/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import budget from '../../assets/budget.png'
import ICTPolicy from "./ICTPolicy";

const Budget = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto mt-10 lg:mt-36 px-2 lg:px-0">
                <div className="lg:flex justify-between items-center">
                <div className="lg:flex justify-center gap-10 items-center">
                    <div className="flex flex-col items-center space-y-3 mb-5 lg:mb-0">
                    <img className="w-12 lg:w-20" src={budget} alt="" data-aos="fade-left" />
                        <h1 className="lg:text-2xl font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md" data-aos="fade-right">Budget & Projects</h1>
                    </div>
                    <div className="space-y-4 border-r-2 border-[#683091] pr-5 rounded-md">
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Annual Procurement Plan
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-down">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Budget & MTBF Budget
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Budget Reports/ Office Orders
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" >
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Important Implemented Projects
                            </span>
                        </div>
                        
                    </div>
                </div>
                <ICTPolicy />
                </div>
            </div>
        </div>
    );
};

export default Budget;