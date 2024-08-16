import AboutUs from "./AboutUs";
import CitizenCharter from "./CitizenCharter";
import NationalIntegrity from "./NationalIntegrity";
import Navbar from "./Navbar";
import NoticeBoard from "./NoticeBoard";
import Policies from "./Policies";
import RightToInformation from "./RightToInformation";
import ServiceProcess from "./ServiceProcess";
import TopBanner from "./TopBanner";

const Home = () => {
    return (
        <div className="bg-gray-100 py-12">
            <Navbar />
            <TopBanner />
            <NoticeBoard />
            <AboutUs />
            <Policies />
            <CitizenCharter />
            <NationalIntegrity />
            <RightToInformation />
            <ServiceProcess />
        </div>
    );
};

export default Home;