import { cloneElement, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { IoIosPricetags } from "react-icons/io";

const Services = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [bookingInfo, setBookingInfo] = useState({
        customerName: "",
        email: "",
        location: "",
        bookingDate: "",
        clothCount: 1
    });

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateTotal = () => {
        if (!selectedService) return 0;
        return bookingInfo.clothCount * selectedService.price; // Use the service's price per cloth
    };

    const handleBookService = () => {
        if (!bookingInfo.location || !bookingInfo.bookingDate || !bookingInfo.clothCount) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the required fields!',
            });
            return;
        }

        const cartItem = {
            serviceId: selectedService._id,
            serviceName: selectedService.title,
            serviceIcon: selectedService.icon,
            customerName: bookingInfo.customerName,
            email: bookingInfo.email,
            location: bookingInfo.location,
            bookingDate: bookingInfo.bookingDate,
            clothCount: bookingInfo.clothCount,
            pricePerItem: selectedService.price, // Store the price per cloth
            totalPrice: calculateTotal(),
            status: 'pending'
        };

        axiosSecure.post("/carts", cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Service booked successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                    setSelectedService(null);
                    setBookingInfo({
                        customerName: user?.displayName || "",
                        email: user?.email || "",
                        location: "",
                        bookingDate: "",
                        clothCount: 1
                    });
                }
            })
            .catch(error => {
                console.error('Error booking service:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to book service. Please try again.',
                });
            });
    };

    const handleAddToCart = (service) => {
        setSelectedService(service);
        setBookingInfo({
            customerName: user?.displayName || "",
            email: user?.email || "",
            location: "",
            bookingDate: "",
            clothCount: 1
        });
    };

    const benefits = [
        {
            id: 1,
            title: "Fast Turnaround",
            description: "Most orders completed within 24 hours with our express service option.",
            icon: (
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bgColor: "bg-sky-100",
            textColor: "text-sky-700"
        },
        {
            id: 2,
            title: "Quality Guarantee",
            description: "If you're not satisfied, we'll rewash your items for free.",
            icon: (
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            bgColor: "bg-emerald-100",
            textColor: "text-emerald-700"
        },
        {
            id: 3,
            title: "Eco-Friendly",
            description: "We use biodegradable detergents and energy-efficient machines.",
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            bgColor: "bg-purple-100",
            textColor: "text-purple-700"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 to-white">
    {/* Vibrant Banner Section */}
    <div className="relative h-64 md:h-[450px] w-full overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Laundry Services Banner"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    Premium Laundry Services
                </h1>
                <p className="text-xl text-white opacity-90 max-w-2xl mx-auto bg-sky-800/30 backdrop-blur-sm rounded-full py-2 px-6">
                    Professional care for your clothes with fast turnaround and eco-friendly products
                </p>
            </div>
        </div>
    </div>

    {/* Colorful Services Section */}
    <div className="py-16 px-4 md:px-10 lg:px-32">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-16 relative">
            Our Premium Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 to-sky-400 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">
            {services.map((service) => (
                <div
                    key={service._id}
                    className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-6 p-8 border-t-4 ${service.borderColor} transform hover:-translate-y-2 group`}
                >
                    <div className={`${service.bgColor} p-6 rounded-full group-hover:rotate-12 transition-transform duration-500`}>
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className={`text-2xl font-semibold ${service.textColor} mb-2`}>{service.title}</h3>
                        <p className="text-gray-600 mb-4">
                            {service.description}
                        </p>
                        <ul className="list-disc text-gray-500 pl-6 space-y-1 mb-6">
                            {service.features.map((feature, index) => (
                                <li key={index} className="hover:text-sky-600 transition-colors">{feature}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <p className="flex items-center text-gray-600 gap-2 text-lg font-medium">
                                <IoIosPricetags className="text-purple-500 text-xl" />
                                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
                                    {service.price} BDT Per cloth
                                </span>
                            </p>
                            <button
                                onClick={() => user ? handleAddToCart(service) : navigate("/login", { state: { from: location } })}
                                className={`bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-gray-600 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:scale-105`}
                            >
                                {service.buttonText || "Book Now"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Animated Benefits Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
                <div
                    key={benefit.id}
                    className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-b-4 border-sky-200"
                >
                    <div className={`${benefit.bgColor} w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-md hover:animate-pulse`}>
                        {cloneElement(benefit.icon, { className: "text-3xl text-white" })}
                    </div>
                    <h3 className={`text-xl font-bold ${benefit.textColor} mb-3`}>{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                </div>
            ))}
        </div>
    </div>

    {/* Enhanced Booking Modal */}
    {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden">
                <div className="bg-gradient-to-r from-sky-500 to-purple-500 p-4 text-white">
                    <h3 className="text-2xl font-bold">Book {selectedService.title}</h3>
                </div>
                <div className="px-6 ">
                    <div className="">
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                value={bookingInfo.customerName}
                                onChange={handleBookingChange}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Customer Email</label>
                            <input
                                type="email"
                                name="email"
                                value={bookingInfo.email}
                                onChange={handleBookingChange}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Location*</label>
                            <input
                                type="text"
                                name="location"
                                value={bookingInfo.location}
                                onChange={handleBookingChange}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Booking Date*</label>
                            <input
                                type="date"
                                name="bookingDate"
                                value={bookingInfo.bookingDate}
                                onChange={handleBookingChange}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Number of Clothes*</label>
                            <input
                                type="number"
                                name="clothCount"
                                min="1"
                                value={bookingInfo.clothCount}
                                onChange={handleBookingChange}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">Price: {selectedService.price} Tk per cloth</p>
                        </div>
                        <div className="pt-3">
                            <p className="text-xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                                Total Price: {calculateTotal()} Tk
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleBookService}
                            className="px-6 py-2 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-lg hover:from-sky-600 hover:to-purple-600 transition-all shadow-md font-medium"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>
    );
};

export default Services;