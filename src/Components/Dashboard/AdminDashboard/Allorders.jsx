import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Allorders = () => {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure(); // This should include the auth token

    useEffect(() => {
        const fetchAllOrders = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axiosSecure.get('/carts');
                setCarts(response.data);
            } catch (err) {
                console.error('Failed to fetch orders:', err);
                setError(err.response?.data?.message || 'Failed to load orders');
            } finally {
                setLoading(false);
            }
        };

        fetchAllOrders();
    }, [axiosSecure]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <span className="ml-4">Loading orders...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> {error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">All Orders</h2>
            
            {carts.length === 0 ? (
                <p className="text-gray-600">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Order ID</th>
                                <th className="py-3 px-4 text-left">User Email</th>
                                <th className="py-3 px-4 text-left">Items</th>
                                <th className="py-3 px-4 text-left">Total</th>
                                <th className="py-3 px-4 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((cart) => (
                                <tr key={cart._id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-3 px-4">{cart._id?.substring(0, 8)}...</td>
                                    <td className="py-3 px-4">{cart.email}</td>
                                    <td className="py-3 px-4">
                                        <ul className="list-disc list-inside">
                                            {cart.items?.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} (Qty: {item.quantity})
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="py-3 px-4">${cart.total?.toFixed(2)}</td>
                                    <td className="py-3 px-4">
                                        {new Date(cart.createdAt || Date.now()).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Allorders;