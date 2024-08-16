import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import notice from '../../assets/notice.png'


const NoticeBoard = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div>
            <div className="max-w-screen-xl mx-auto lg:mt-36 mt-10 px-2 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="flex flex-col items-center space-y-3 mb-5 lg:mb-0">
                        <img className="md:w-20 w-12" src={notice} alt="" data-aos="fade-left" />
                        <h1 className="md:text-4xl font-black text-[#683091] border-2 border-[#683091] md:px-4 md:py-2 px-2 py-1 shadow-lg rounded-md" data-aos="fade-right">Notice Board</h1>
                    </div>
                    <div className="space-y-4 border-l-2 border-[#683091] pl-5 rounded-md">
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                                প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ,
                                প্রোগ্রামার ও সহকারী প্রোগ্রামার, তথ্য ও
                                যোগাযোগ প্রজুক্তি)
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-down">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            অফিস আদেশ (দায়িত্ব বণ্টন)
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-up">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            ২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" data-aos="fade-down">
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            e-Tender For Procurement of Food and Refreshment for Aspire to Innovate (a2i) Progress.
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 py-3 px-4 rounded-md shadow-md hover:bg-green-500 hover:text-white cursor-pointer hover:shadow-sm transition-all duration-300 ease-in-out" >
                            <IoMdArrowDroprightCircle className="text-green-500 hidden md:block" />{" "}
                            <span>
                            অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;
