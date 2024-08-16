/* eslint-disable react/no-unescaped-entities */
const Navbar = () => {
    return (
        <div className="pb-5">
            <div className="max-w-screen-xl mx-auto lg:rounded-lg py-5 shadow-lg bg-[#683091] text-white">
                <div className="flex justify-around items-center">
                    <div className="flex flex-row-reverse md:flex-row items-center space-x-4">
                        <div>
                            <a href="/">Bangladesh National Portal</a>
                        </div>
                        <div>
                            <div className="dropdown dropdown-hover z-50">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="px-3 py-1 bg-[#4a1e69] rounded-md mr-4 md:mr-0"
                                >
                                    Menus
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu rounded-box z-[1] p-2 shadow text-black bg-white"
                                >
                                    <li className="menu lg:menu-horizontal rounded-box">
                                        <details>
                                            <summary>About</summary>
                                            <ul>
                                                {/* ----------------- About division -------------------- */}
                                                <li>
                                                    <details>
                                                        <summary>
                                                            About Division
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                History &
                                                                Activities{" "}
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Vision & Mission
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Honorable
                                                                Adviser
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                List of
                                                                Ex-Ministers
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Secretary
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                List of
                                                                Ex-Secretaries
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Organogram
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Allocation of
                                                                Business
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Principal
                                                                Function
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Work
                                                                Distribution
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Member
                                                                Nomination
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* ----------------- Man Power -------------------- */}
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Manpower
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Officers
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Work
                                                                Distributions
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Information
                                                                Officer
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                GRS Officer
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Focal Point
                                                                Officers
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* ----------------- Service of divisions -------------------- */}
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Services of
                                                            Divisions
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Citizen Charter
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                List of Citizen
                                                                e-Services
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* ----------------- Committees of ministry -------------------- */}
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Committees of
                                                            Ministry
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Committees
                                                                Chaired by{" "}
                                                                <br /> Honorable
                                                                PM & Honorable{" "}
                                                                <br /> Minister
                                                                Regarding <br />{" "}
                                                                Ministry/
                                                                Division
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className="menu lg:menu-horizontal rounded-box">
                                        <details>
                                            <summary>
                                                Affiliated Officers
                                            </summary>
                                            <ul>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200 mt-2">
                                                    List of Offices
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className="menu lg:menu-horizontal rounded-box">
                                        <details>
                                            <summary>Project/Pro'me</summary>
                                            <ul>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Project
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                On Going
                                                                Projects
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Procurement
                                                                Plant
                                                            </li>
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Completed
                                                                Projects
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Programme
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Completed
                                                                Programme
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Gallery</summary>
                                            <ul className="space-y-2">
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Photo Gallery
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Video Gallery
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Acts/Policy</summary>
                                            <ul className="space-y-2">
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Acts
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Policy
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Guidelines
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Draft Acts
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>e-Services</summary>
                                            <ul className="space-y-2">
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Innovation
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Casual Leave
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Smart Dashboard
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Get Your Freelancer Id
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Fellowship
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    e-Nothi
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Web Mail
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Online Salary Submission
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    e-Tendering(e-GP)
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Mygov
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    GRP
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Project Monitoring System
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Online ACR
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    Online Requirement
                                                </li>
                                                <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                    EMPORIA
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Contact & Comment</summary>
                                            <ul>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Contact
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Office Address
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            Comment
                                                        </summary>
                                                        <ul className="space-y-2">
                                                            <li className="cursor-pointer hover:shadow-md hover:px-2 hover:py-1 hover:rounded-md transition-all ease-in-out duration-200">
                                                                Your Questions &{" "}
                                                                <br /> Comments
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className="block md:hidden mb-3">
                                        <select className="text-black px-2 py-1 rounded-md mb-2">
                                            <option value="">অফিসের ধরণ</option>
                                            <option value="">
                                                মন্ত্রণালয়/বিভাগ
                                            </option>
                                            <option value="">
                                                অধিদপ্তর বাতায়ন
                                            </option>
                                            <option value="">
                                                বিভাগীয় বাতায়ন
                                            </option>
                                            <option value="">
                                                জেলা বাতায়ন
                                            </option>
                                            <option value="">
                                                উপজেলা বাতায়ন
                                            </option>
                                            <option value="">
                                                ইউনিয়ন বাতায়ন
                                            </option>
                                            <option value="">অন্যান্য</option>
                                        </select>
                                        <button className="w-full text-white py-1 bg-green-500 rounded-md hover:bg-green-600">
                                            Go
                                        </button>
                                    </li>
                                    <li className="block md:hidden">
                                        <input
                                            className="px-2 py-1 text-black rounded-md mb-2"
                                            placeholder="Search..."
                                            type="search"
                                            name=""
                                            id=""
                                        />
                                        <button className="px-2 py-1 bg-green-500 rounded-md text-white hover:bg-green-600">
                                            Search
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex space-x-4 hidden">
                        <div className="space-x-3">
                            <select className="text-black px-2 py-1 rounded-md">
                                <option value="">অফিসের ধরণ</option>
                                <option value="">মন্ত্রণালয়/বিভাগ</option>
                                <option value="">অধিদপ্তর বাতায়ন</option>
                                <option value="">বিভাগীয় বাতায়ন</option>
                                <option value="">জেলা বাতায়ন</option>
                                <option value="">উপজেলা বাতায়ন</option>
                                <option value="">ইউনিয়ন বাতায়ন</option>
                                <option value="">অন্যান্য</option>
                            </select>
                            <button className="px-2 py-1 bg-green-500 rounded-md hover:bg-green-600">
                                Go
                            </button>
                        </div>
                        <div className="space-x-3">
                            <input
                                className="px-2 py-1 text-black rounded-md"
                                placeholder="Search..."
                                type="search"
                                name=""
                                id=""
                            />
                            <button className="px-2 py-1 bg-green-500 rounded-md hover:bg-green-600">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
