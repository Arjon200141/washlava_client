import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purole-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white py-32 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">🧼 Contact Washlava</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                    Have questions or feedback? We're here to help with all your laundry needs!
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Location Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div className="bg-blue-400 p-4 text-white flex items-center">
                            <FaMapMarkerAlt className="text-2xl mr-3" />
                            <h2 className="text-xl font-bold">Our Location</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4 flex items-center">
                            <IoLocationOutline /> 2/7, Rajapur, Pabna-6600, Bangladesh
                            </p>
                            <a
                                href="https://www.google.com/maps/place/Pabna+University+of+Science+and+Technology/@24.0109381,89.2248143,17z/data=!3m1!4b1!4m6!3m5!1s0x39fe9b7a00000001:0x5a1b2a1b1b1b1b1b!8m2!3d24.0109381!4d89.2273892!16s%2Fg%2F11b8z8z8z8?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                            >
                                View on Google Maps
                            </a>
                        </div>
                        <div className="h-48 bg-gray-200 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.073260745917!2d89.2248143!3d24.0109381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b7a00000001%3A0x5a1b2a1b1b1b1b1b!2sPabna%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Washlava Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div className="bg-orange-400 p-4 text-white flex items-center">
                            <FaPhone className="text-xl mr-3" />
                            <h2 className="text-xl font-bold">Contact Information</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-start">
                                <FaPhone className="text-blue-400 mt-1 mr-3" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-gray-700">+880 1700-000000</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaEnvelope className="text-blue-400 mt-1 mr-3" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-700">support@washlava.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaClock className="text-blue-400 mt-1 mr-3" />
                                <div>
                                    <h3 className="font-semibold">Support Hours</h3>
                                    <p className="text-gray-700">Saturday – Thursday (10:00 AM - 8:00 PM)</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                                <h3 className="font-semibold mb-3">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-blue-500 hover:text-blue-700">
                                        <FaFacebook className="text-2xl" />
                                    </a>
                                    <a href="#" className="text-pink-500 hover:text-pink-700">
                                        <FaInstagram className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden md:col-span-2 lg:col-span-1 transition-transform duration-300 hover:scale-105">
                        <div className="bg-green-400 p-4 text-white flex items-center">
                            <FaEnvelope className="text-xl mr-3" />
                            <h2 className="text-xl font-bold">Send Us a Message</h2>
                        </div>
                        <div className="p-6">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-medium shadow-md hover:shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Why Contact Us Section */}
                <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">📌 Why Contact Washlava?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Service Availability</h3>
                                <p className="text-gray-600">Check if we serve your area</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-orange-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Urgent Requests</h3>
                                <p className="text-gray-600">Schedule emergency pickups/deliveries</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Order Support</h3>
                                <p className="text-gray-600">Get help with your orders</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Business Opportunities</h3>
                                <p className="text-gray-600">Franchise and partnership inquiries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;