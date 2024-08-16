
import emergency1 from "../../assets/emergency1.png";
import imp1 from "../../assets/imp1.jpg";
import imp2 from "../../assets/imp2.jpg";
import imp3 from "../../assets/imp3.jpg";
import imp4 from "../../assets/imp4.jpg";
import imp5 from "../../assets/imp5.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

const Emergency = () => {
    return (
        <div className="max-w-screen-xl mx-auto md:mt-36 mt-10 px-2 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-24">
                {/* ------------------- */}
                <div className="flex flex-col items-center space-y-5 mb-5 md:mb-0">
                  
                    <h1 className="md:text-base font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-md rounded-md">
                        Emergency Hotline
                    </h1>
                    <img className="cursor-pointer bg-none" src={emergency1} alt="" />
                </div>
                {/* ------------------- */}
               <div>
               <div className="flex flex-col items-center space-y-5 mb-5 md:mb-14">
                  
                  <h1 className="md:text-base font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-md rounded-md">
                      Important Address
                  </h1>
                  <img className="cursor-pointer bg-none" src={imp1} alt="" />
                  <img className="cursor-pointer bg-none" src={imp2} alt="" />
                  <img className="cursor-pointer bg-none" src={imp3} alt="" />
                  <img className="cursor-pointer bg-none" src={imp4} alt="" />
              </div>
               <div className="flex flex-col items-center space-y-5 mb-5 md:mb-0">
                  
                  <h1 className="md:text-base font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-md rounded-md">
                      Social Media
                  </h1>
                  <div className="grid grid-cols-3 gap-5">
                  <img className="cursor-pointer w-10" src={facebook} alt="" />
                  <img className="cursor-pointer w-10" src={twitter} alt="" />
                  <img className="cursor-pointer w-10" src={youtube} alt="" />
                  </div>
              </div>
               </div>
                {/* ------------------- */}
                <div className="flex flex-col items-center space-y-5 mb-5 md:mb-0">
               
                    <h1 className="md:text-base font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-md rounded-md">
                    বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০২০-২০২১ এর চূড়ান্ত মূল্যায়নে তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের প্রথম স্থান অর্জন
                    </h1>
                    <img className="cursor-pointer bg-none" src={imp5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Emergency;
