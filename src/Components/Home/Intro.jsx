import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Intro = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="my-8 md:my-16 px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="flex justify-center mb-8 md:mb-16">
                <h2 className='text-center text-gray-800 dark:text-white border-y-4 border-[#0C9DCA] py-4 w-full md:w-96 text-3xl md:text-5xl font-bold'>
                    WHO WE ARE
                </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
                        Simple, Reliable Laundry Care <br className="hidden sm:block" /> 
                        for Everyday Life
                    </h1>
                    
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p className="text-base sm:text-lg">
                            At <span className="font-semibold text-[#0C9DCA]">Washlava</span>, we take the hassle out of laundry so you can focus on what matters most. Whether you need a quick Wash & Fold, crisp Wash & Iron, or a thorough Dry Wash, we make it easy to keep your everyday clothes fresh and ready to wear.
                        </p>
                        <p className="text-base sm:text-lg">
                            Using <span className="font-semibold">high-quality detergents</span> and <span className="font-semibold">modern machines</span>, we treat your laundry with care—just like you would at home, but without the work. We're here for busy people who want clean clothes without the chore.
                        </p>
                        <p className="text-base sm:text-lg">
                            No complicated processes, no extra fuss—just drop off your laundry and let us handle the rest. Affordable, dependable, and hassle-free, Washlava is your go-to for everyday laundry done right.
                        </p>
                    </div>

                    <Link onClick={scrollToTop} to="/about">
                    <button className="mt-6 md:mt-8 flex items-center group text-lg font-semibold text-[#0C9DCA] hover:text-[#0a87b0] transition-colors duration-300">
                        Read More
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    </Link>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 relative group">
                    <div className="mt-10 overflow-hidden rounded-xl lg:rounded-2xl shadow-xl">
                        <img 
                            src="https://i.ibb.co.com/KzszCPK9/who.jpg" 
                            alt="Washlava laundry service" 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-[#0C9DCA] w-24 h-24 rounded-xl z-[-1] hidden lg:block"></div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-20 max-w-5xl mx-auto">
                {[
                    { number: "10K+", label: "Happy Customers" },
                    { number: "24/7", label: "Support" },
                    { number: "99%", label: "Satisfaction" },
                    { number: "1Hr", label: "Express Delivery" }
                ].map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                        <p className="text-2xl sm:text-3xl font-bold text-[#0C9DCA] mb-2">{stat.number}</p>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Intro;