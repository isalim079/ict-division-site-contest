/* eslint-disable react/no-unescaped-entities */
import "./topBanner.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import image1 from "../../assets/bannerImg1.jpg";
import image2 from "../../assets/bannerImg2.jpg";
import logo from "../../assets/logo.png";

const TopBanner = () => {
    return (
        <div className="max-w-screen-xl mx-auto hidden md:block">
            <div className="shadow-lg">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        "--swiper-navigation-size": "15px",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 "
                >
                    <SwiperSlide className="relative ">
                        <img className="" src={image1} />
                        <div className="absolute top-4 right-[32%]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="md:w-[100px] w-[50px]">
                                    <img className="" src={logo} alt="" />
                                </div>
                                <h1 className="text-3xl font-black bg-white/70 px-4 py-1 rounded-md shadow-xl mb-3 mt-3">ICT Division</h1>
                                <p className="text-lg font-bold bg-white/70 px-4 py-1 rounded-md shadow-xl">
                                    Government of the people's Republic of
                                    Bangladesh
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img className="" src={image2} />
                        <div className="absolute top-4 right-[32%]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="md:w-[100px] w-[50px]">
                                    <img className="" src={logo} alt="" />
                                </div>
                                <h1 className="text-3xl font-black bg-white/70 px-4 py-1 rounded-md shadow-xl mb-3 mt-3">ICT Division</h1>
                                <p className="text-lg font-bold bg-white/70 px-4 py-1 rounded-md shadow-xl">
                                    Government of the people's Republic of
                                    Bangladesh
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopBanner;
