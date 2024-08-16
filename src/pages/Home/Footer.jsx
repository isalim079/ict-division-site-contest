import technicalSupport from '../../assets/technicalSupport.png'

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0">
            <footer className="footer bg-gray-200 text-base-content p-10 rounded-xl lg:mt-36 mt-10 shadow-lg">
                <nav>
                    <h6 className="footer-title">Info</h6>
                    <a className="link link-hover">Sitemap</a>
                    <a className="link link-hover">Secrecy Policy</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">ব্যবহারের শর্তাবলি</a>
                    <a className="link link-hover text-xs"> Site was last updated: 2024-08-15 12:38:50</a>
                </nav>
                <nav>
                <h6 className="footer-title">Others</h6>
                <a className="link link-hover">Planning and Implementation</a>
                <a className="link link-hover">Cabinet Division</a>
                <a className="link link-hover">a2i</a>
                <a className="link link-hover">BCC</a>
                <a className="link link-hover">BASIS</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Technical Support</h6>
                    <div className="grid grid-flow-col gap-4">
                       <img src={technicalSupport} alt="" />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
