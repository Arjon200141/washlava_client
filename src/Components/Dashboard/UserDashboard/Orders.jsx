import { MdDeleteForever } from "react-icons/md";
import { FaCalendarAlt, FaMapMarkerAlt, FaTshirt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Orders = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <div className='flex justify-center mb-12'>
                <h2 className='w-96 border-y-4 border-indigo-500 text-center py-3 text-4xl font-bold text-indigo-700'>MY BOOKINGS</h2>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-6 bg-white rounded-xl shadow-lg">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-600">Total Bookings</h2>
                    <p className="text-3xl font-bold text-indigo-600">{cart.length}</p>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-600">Total Amount</h2>
                    <p className="text-3xl font-bold text-green-600">{totalPrice} ৳</p>
                </div>
                {cart.length ? 
                    <Link to="/dashboard/payment">
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                            Proceed to Payment
                        </button>
                    </Link> :
                    <button disabled className="bg-gray-400 text-white font-bold py-3 px-8 rounded-full cursor-not-allowed">
                        Proceed to Payment
                    </button>
                }
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg">
                                <th>SL No</th>
                                <th>Service</th>
                                <th>Booking date</th>
                                <th>Clothes</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                    <th className="font-semibold text-gray-700">{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                                                    <img 
                                                        src={item.serviceIcon} 
                                                        alt={item.serviceName}
                                                        className="w-10 h-10 object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800">{item.serviceName}</h3>
                                                <p className="text-sm text-gray-500">{item.customerName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-indigo-500" />
                                                <span>{item.bookingDate}</span>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <FaTshirt className="text-purple-500" />
                                            <span className="font-medium">{item.clothCount} pcs</span>
                                            <span className="text-sm text-gray-500">({item.pricePerItem}৳/pc)</span>
                                        </div>
                                    </td>
                                    <td className="font-bold text-green-600">{item.totalPrice}৳</td>
                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            item.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(item._id)}
                                            className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50"
                                            title="Delete Booking"
                                        >
                                            <MdDeleteForever size={24} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {cart.length === 0 && (
                <div className="text-center py-16">
                    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" 
                            alt="No bookings"
                            className="w-32 h-32 mx-auto mb-6 opacity-70"
                        />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No Bookings Found</h3>
                        <p className="text-gray-500 mb-6">You haven't made any service bookings yet.</p>
                        <Link 
                            to="/services" 
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-full inline-block transition-colors"
                        >
                            Browse Services
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;