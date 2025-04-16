import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft, FaStar, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/reviews')
            .then(res => {
                setReviews(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                setLoading(false);
            });
    }, [axiosSecure]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 animate-pulse">
                    Loading Reviews...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4 sm:mb-6">
                        Customer Testimonials
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover what our valued customers say about their experiences with us.
                    </p>
                </motion.div>

                {reviews.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500 dark:text-gray-400">No reviews available yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-6 sm:p-8 rounded-2xl shadow-xl transform transition-all hover:scale-[1.02] hover:shadow-2xl min-h-[300px] sm:min-h-[350px] flex flex-col ${
                                    index % 3 === 0 
                                        ? 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/30 dark:to-gray-800 border-l-4 border-purple-500 dark:border-purple-400' 
                                        : index % 3 === 1 
                                            ? 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-800 border-l-4 border-blue-500 dark:border-blue-400' 
                                            : 'bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/30 dark:to-gray-800 border-l-4 border-teal-500 dark:border-teal-400'
                                }`}
                            >
                                <div className="flex items-center mb-4 sm:mb-6">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-lg mr-4 sm:mr-5 border-2 border-white dark:border-gray-600">
                                        {review.image ? (
                                            <img 
                                                src={review.image} 
                                                alt={review.reviewerName} 
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <FaUser className="text-purple-500 dark:text-purple-400 text-xl sm:text-2xl" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">{review.reviewerName}</h4>
                                        <div className="flex items-center mt-1">
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={review.rating}
                                                readOnly
                                                itemStyles={{
                                                    itemShapes: FaStar,
                                                    activeFillColor: '#f59e0b',
                                                    inactiveFillColor: '#d1d5db',
                                                }}
                                            />
                                            <span className="ml-2 text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                                                {review.rating.toFixed(1)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex-grow">
                                    <FaQuoteLeft className="text-gray-200 dark:text-gray-700 text-3xl sm:text-4xl absolute -top-1 -left-1" />
                                    <p className="text-gray-700 dark:text-gray-300 pl-6 sm:pl-8 italic text-sm sm:text-base md:text-lg leading-relaxed">
                                        {review.reviewDetails}
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium self-end">
                                    {review.createdAt && new Date(review.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-20 dark:opacity-10"
                        style={{
                            width: `${Math.random() * 200 + 100}px`,
                            height: `${Math.random() * 200 + 100}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `translate(-50%, -50%)`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllReviews;