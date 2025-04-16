import { useContext } from "react";
import { MdOutlineShoppingCart, MdPayments, MdRateReview, MdPerson, MdEmail } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data;
        }
    })

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews', user.displayName],
        queryFn: async () => {
            const res = await axiosSecure.get(`reviews/${user.displayName}`);
            return res.data;
        }
    });

    // Calculate total spent
    const totalSpent = payments.reduce((sum, payment) => sum + payment.price, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-12">
                    Welcome Back, <span className="text-indigo-600">{user.displayName}</span>!
                </h2>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Profile Card */}
                    <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                            <h2 className="text-2xl font-bold text-white">My Profile</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-center -mt-16">
                                <div className="avatar">
                                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg">
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
                                    <MdPerson className="text-indigo-600 text-2xl mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Name</p>
                                        <p className="font-semibold text-gray-800">{user.displayName}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
                                    <MdEmail className="text-indigo-600 text-2xl mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-semibold text-gray-800">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Activities Section */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        {/* Orders Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6">
                                <div className="flex items-center">
                                    <MdOutlineShoppingCart className="text-white text-3xl mr-3" />
                                    <h2 className="text-xl font-bold text-white">Your Orders</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-4xl font-bold text-blue-600">{cart.length}</p>
                                        <p className="text-gray-600">Your Booked Services</p>
                                    </div>
                                    <div className="bg-blue-100 p-4 rounded-full">
                                        <MdOutlineShoppingCart className="text-blue-600 text-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Reviews Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                                <div className="flex items-center">
                                    <MdRateReview className="text-white text-3xl mr-3" />
                                    <h2 className="text-xl font-bold text-white">Your Reviews</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-4xl font-bold text-purple-600">{reviews.length}</p>
                                        <p className="text-gray-600">Reviews submitted</p>
                                    </div>
                                    <div className="bg-purple-100 p-4 rounded-full">
                                        <MdRateReview className="text-purple-600 text-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Payments Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-6">
                                <div className="flex items-center">
                                    <MdPayments className="text-white text-3xl mr-3" />
                                    <h2 className="text-xl font-bold text-white">Your Payments</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-4xl font-bold text-green-600">{payments.length}</p>
                                        <p className="text-gray-600">Total transactions</p>
                                        <p className="text-xl font-semibold mt-2">{totalSpent.toFixed(2)} Tk spent</p>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-full">
                                        <MdPayments className="text-green-600 text-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;