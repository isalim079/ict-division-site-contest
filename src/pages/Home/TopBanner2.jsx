/* eslint-disable react/no-unescaped-entities */
import logo from '../../assets/logo.png'

const TopBanner2 = () => {
    return (
        <div className="max-w-screen-xl mx-auto block lg:hidden px-2 ">
            <div className='flex space-x-4 md:space-x-10 justify-center items-center border-2 border-[#683091] rounded-md p-2 md:p-4 shadow-md'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className='font-black'>ICT Division</h1>
                    <p className='text-sm'>Government of the People's Republic Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default TopBanner2;