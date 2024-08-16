import advisor from '../../assets/advisor.jpg'
import secretary from '../../assets/secretary.jpg'

const Advisor = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-0 mt-10 lg:mt-36">
            <div>
                <div className='md:flex justify-center gap-10 md:gap-36'>
                <div className="flex flex-col items-center space-y-5 mb-5 md:mb-0">
                        <h1
                            className="md:text-lg font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md"
                            
                        >
                            Honorable Advisor
                        </h1>
                        <img className="rounded-md shadow-md w-60" src={advisor} alt="" />
                        <h1 className='font-black text-xl text-[#683091]'>Md.Nahid Islam</h1>
                        <button className='bg-green-500 hover:bg-green-600 text-white transition-all ease-in-out duration-200 px-5 py-2 rounded-md shadow-md'>More</button>
                    </div>
                <div className="flex flex-col items-center space-y-5 mb-5 md:mb-0">
                        <h1
                            className="md:text-lg font-black text-[#683091] border-2 border-[#683091] px-4 py-2 shadow-lg rounded-md"
                            
                        >
                            Secretary
                        </h1>
                        <img className="rounded-md shadow-md w-60" src={secretary} alt="" />
                        <h1 className='font-black text-xl text-[#683091]'>Md.Shamsul Arefin</h1>
                        <button className='bg-green-500 hover:bg-green-600 text-white transition-all ease-in-out duration-200 px-5 py-2 rounded-md shadow-md'>More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advisor; 