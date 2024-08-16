import ReactPlayer from "react-player";
import videos from "../../assets/videos.png";
import anthem from "../../assets/anthem.png";
import polling from "../../assets/polling.png";
import opinion from "../../assets/opinion.png";
import accessibility from "../../assets/accessibility.png";
import dengue from "../../assets/dengue.jpg";
import dengue1 from "../../assets/dengue1.png";
import H5AudioPlayer from "react-h5-audio-player";
import nationalAnthem from "../../assets/anthem.mp3";
import "react-h5-audio-player/lib/styles.css";

const VideoPlayer = () => {
    return (
        <div className="max-w-screen-xl mx-auto lg:mt-36 mt-10 px-2 lg:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {/* --------------- */}
                <div className="flex flex-col justify-center items-center space-y-5">
                    <div className="flex flex-col items-center space-y-3 mb-5 lg:mb-0">
                        <img className="w-10 lg:w-20" src={videos} alt="" />
                        <h1 className="lg:text-lg font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md">
                            Important Videos
                        </h1>
                    </div>

                    <div>
                        <ReactPlayer
                            width={"100%"}
                            className="reactVideoPlayer"
                            url="https://www.youtube.com/watch?v=GT9ShGE_qjg&t=2s"
                        />
                    </div>
                </div>

                {/* ----------------- */}
                <div>
                    <div>
                        <div className="flex flex-col items-center space-y-3 mb-5 lg:mb-0">
                            <img className="w-10 lg:w-20" src={anthem} alt="" />
                            <h1 className="lg:text-lg font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md">
                                National Anthem
                            </h1>
                            <div className="md:w-[360px] shadow-md">
                                <H5AudioPlayer
                                    className=" rounded-md"
                                    src={nationalAnthem}
                                />
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col items-center cursor-pointer shadow-md p-2">
                                    <img className="w-12" src={polling} alt="" />
                                    <h1 className="font-black text-[#683091]">Polling</h1>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer shadow-md p-2">
                                    <img className="w-12" src={opinion} alt="" />
                                    <h1 className="font-black text-[#683091]">Opinion</h1>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer shadow-md p-2">
                                    <img className="w-12" src={accessibility} alt="" />
                                    <h1 className="font-black text-[#683091]">Accessibility</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ------------------ */}

                <div>
                    <div className="flex flex-col items-center space-y-3 mb-5 lg:mb-0">
                        <img className="w-10 lg:w-20" src={dengue1} alt="" />
                        <h1 className="lg:text-lg font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md">
                            To Prevent Dengue
                        </h1>
                        <img
                            className="rounded-md shadow-md"
                            src={dengue}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
