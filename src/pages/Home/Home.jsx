import AboutUs from "./AboutUs";
import Advisor from "./Advisor";
import Budget from "./Budget";
import CitizenCharter from "./CitizenCharter";
import Emergency from "./Emergency";
import Footer from "./Footer";
import InternalService from "./InternalService";
import Miscellaneous from "./Miscellaneous";
import NationalIntegrity from "./NationalIntegrity";
import Navbar from "./Navbar";
import NoticeBoard from "./NoticeBoard";
import Policies from "./Policies";
import RightToInformation from "./RightToInformation";
import ServiceProcess from "./ServiceProcess";
import TopBanner from "./TopBanner";
import TopBanner2 from "./TopBanner2";
import VideoPlayer from "./VideoPlayer";

const Home = () => {
    return (
        <div className="bg-gray-100 lg:pt-10 lg:pb-20 overflow-x-hidden">
            <Navbar />
            <TopBanner />
            <TopBanner2 />
            <NoticeBoard />
            <AboutUs />
            <Policies />
            <CitizenCharter />
            <NationalIntegrity />
            <RightToInformation />
            <ServiceProcess />
            <Budget />
            <Miscellaneous />
            <VideoPlayer />
            <Advisor />
            <InternalService />
            <Emergency />
            <Footer />
        </div>
    );
};

export default Home;