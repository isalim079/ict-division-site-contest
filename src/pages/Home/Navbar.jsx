const Navbar = () => {
    return (
        <div className="pb-5">
            <div className="max-w-screen-xl mx-auto md:rounded-lg py-5 shadow-lg bg-[#683091] text-white">
                <div className="flex justify-around items-center">
                    <div className="flex items-center space-x-4">
                        <div>
                            <a href="/">Bangladesh National Portal</a>
                        </div>
                        <div>
                            <div className="dropdown dropdown-hover z-50">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="px-3 py-1 bg-[#4a1e69] rounded-md"
                                >
                                    Menus
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black"
                                >
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Affiliated Officers/Institutions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">Project</a>
                                    </li>
                                    <li>
                                        <a href="/">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/">Acts/Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">e-Services</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex space-x-4 hidden">
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
