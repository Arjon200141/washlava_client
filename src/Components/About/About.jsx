import { FaShirt, FaTruck, FaLeaf, FaStar, FaPhone, FaEnvelope, FaGlobe, FaFacebook } from 'react-icons/fa6';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-16">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-washlavaBlue to-blue-800 text-gray-800 py-16 px-4 text-center rounded-b-3xl shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Washlava</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Your trusted laundry service partner in Bangladesh - making laundry simple, convenient, and stress-free
                </p>
            </header>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Who We Are */}
                <section className="bg-white rounded-xl shadow-md p-8 mb-10">
                    <h2 className="text-3xl font-bold text-washlavaBlue mb-6 flex items-center">
                        <FaShirt className="mr-3" /> Who We Are
                    </h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Welcome to <span className="font-semibold text-washlavaBlue">Washlava</span>, where we handle your daily clothes, office attire, or delicate fabrics with care, precision, and hygiene. Our professional service ensures your clothes are returned fresh, clean, and perfectly folded or ironed.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-washlavaBlue">
                            <h3 className="text-xl font-bold text-washlavaBlue mb-3">Our Mission</h3>
                            <p className="text-gray-700">
                                To revolutionize laundry care in Bangladesh by providing fast, affordable, and professional services that save our customers time and effort.
                            </p>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-washlavaOrange">
                            <h3 className="text-xl font-bold text-washlavaOrange mb-3">Our Vision</h3>
                            <p className="text-gray-700">
                                To become the most trusted and customer-loved laundry service brand in the country, known for innovation and excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="bg-white rounded-xl shadow-md p-8 mb-10">
                    <h2 className="text-3xl font-bold text-washlavaBlue mb-8">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <FaStar className="text-2xl" />, title: "Quality First", desc: "Premium detergents & advanced machines" },
                            { icon: <FaShirt className="text-2xl" />, title: "Customer-Centric", desc: "Your satisfaction is our priority" },
                            { icon: <FaLeaf className="text-2xl" />, title: "Eco-Friendly", desc: "Sustainable washing practices" },
                            { icon: <FaTruck className="text-2xl" />, title: "Convenience", desc: "Doorstep pickup & delivery" },
                            { icon: <FaStar className="text-2xl" />, title: "Transparency", desc: "No hidden charges" },
                            { icon: <FaShirt className="text-2xl" />, title: "Fast Service", desc: "Same-day options available" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all">
                                <div className="text-washlavaBlue mb-3">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services & Contact */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Services */}
                    <section className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-3xl font-bold text-washlavaBlue mb-6">Our Services</h2>
                        <ul className="space-y-4">
                            {[
                                "🧺 Wash & Fold - Perfect for everyday laundry",
                                "👔 Wash & Iron - Crisp and wrinkle-free clothes",
                                "🧥 Dry Wash - Gentle care for delicate fabrics",
                                "🚗 Doorstep Pickup & Delivery - Hassle-free service",
                                "⏳ Express Delivery - Need it fast? We've got you covered"
                            ].map((service, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-3 text-washlavaOrange">{service.split(' ')[0]}</span>
                                    <span>{service.substring(service.indexOf(' ') + 1)}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Contact */}
                    <section className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-3xl font-bold text-washlavaBlue mb-6">Contact Us</h2>
                        <div className="space-y-5">
                            <div className="flex items-center">
                                <FaPhone className="text-washlavaBlue mr-4 text-xl" />
                                <span>+880169696969</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-washlavaBlue mr-4 text-xl" />
                                <span>support@washlava.com</span>
                            </div>
                            <div className="flex items-center">
                                <FaGlobe className="text-washlavaBlue mr-4 text-xl" />
                                <span>www.washlava.com</span>
                            </div>
                            <div className="flex items-center">
                                <FaFacebook className="text-washlavaBlue mr-4 text-xl" />
                                <span>facebook.com/washlava</span>
                            </div>
                        </div>
                        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-washlavaBlue mb-3">Location</h3>
                            <p className="text-gray-700">📍 2/7, Rajapur, Pabna-6600, Bangladesh</p>
                            <p className="text-gray-600 mt-2">Currently serving selected areas with plans to expand soon!</p>
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-washlavaBlue to-blue-700 text-gray-800 rounded-xl shadow-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join the Washlava Family!</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We're more than just a laundry service—we're your laundry partner. Try us today!
                    </p>
                    <button className="bg-washlavaOrange hover:bg-orange-600 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition-all">
                        Book a Pickup Now
                    </button>
                </section>
            </div>
        </div>
    );
};

export default About;