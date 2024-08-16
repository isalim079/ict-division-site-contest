import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import circular from '../../assets/circular.png'

const Circular = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto mt-10 md:mt-0 px-2 md:px-0">
                <div className="md:flex justify-center gap-20 items-center">
                    <div className="flex flex-col items-center space-y-3 mb-5 md:mb-0">
                    <img className="w-12 md:w-20" src={circular} alt="" data-aos="fade-left" />
                        <h1 className="md:text-2xl font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md" data-aos="fade-right">Circular</h1>
                    </div>
                    <div className="space-y-4 border-r-2 border-[#683091] pr-5 rounded-md">
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                                Notification/Circular
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-down">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Office Orders/Government Orders
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            News Notifications
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" >
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            Tender/Recruitment Notice
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Circular;