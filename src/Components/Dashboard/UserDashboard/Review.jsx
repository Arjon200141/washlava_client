import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProviders";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const Review = () => {
    const axiosPublic = useAxiosPublic();
    const { user, loading } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [hoverRating, setHoverRating] = useState(0);

    const onSubmit = data => {
        if (!user) return;

        const reviewInfo = {
            reviewerName: user?.displayName || 'Anonymous',
            image: user?.photoURL || '',
            reviewDetails: data.description,
            rating: parseFloat(data.rating),
        }
        
        axiosPublic.post('/reviews', reviewInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        title: "Thank You!",
                        text: "Your feedback means the world to us! ✨",
                        icon: "success",
                        background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)',
                        color: '#0369a1',
                        confirmButtonColor: '#0284c7',
                        confirmButtonText: 'Awesome!',
                        customClass: {
                            popup: 'shadow-2xl rounded-2xl border border-sky-200'
                        }
                    });
                }
            })
            .catch(error => console.error(error));
    };

    if (loading || !user) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full border-4 border-sky-500 border-t-transparent"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='flex justify-center mb-12'
                >
                    <h2 className='text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>
                        Share Your Experience
                    </h2>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-xl border border-sky-100 backdrop-blur-sm bg-opacity-90"
                >
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {/* User Info Section */}
                        <div className="flex items-center gap-4 p-4 bg-sky-50 rounded-xl">
                            <div className="relative">
                                <img 
                                    src={user?.photoURL || 'https://ui-avatars.com/api/?name='+user?.displayName} 
                                    alt={user?.displayName} 
                                    className="w-14 h-14 rounded-full border-2 border-sky-300 object-cover"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-sky-900">{user?.displayName || 'Anonymous'}</h3>
                                <p className="text-sm text-sky-600">Posting as {user?.email}</p>
                            </div>
                        </div>

                        {/* Rating Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-sky-800">Your Rating</span>
                            </label>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon
                                        key={star}
                                        className={`h-10 w-10 cursor-pointer transition-colors duration-200 ${
                                            (hoverRating || register("rating").value) >= star 
                                                ? 'text-yellow-400 fill-yellow-400' 
                                                : 'text-gray-300 fill-gray-300'
                                        }`}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => {
                                            register("rating").onChange({ target: { value: star } });
                                        }}
                                    />
                                ))}
                                <input 
                                    type="hidden" 
                                    {...register("rating", {
                                        required: "Please select a rating",
                                        min: { value: 1, message: "Please select at least 1 star" },
                                    })} 
                                />
                            </div>
                            {errors.rating && (
                                <span className="text-rose-500 text-sm mt-1 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.rating.message}
                                </span>
                            )}
                        </div>

                        {/* Review Text */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-sky-800">Your Feedback</span>
                            </label>
                            <div className="relative">
                                <textarea 
                                    {...register("description", { 
                                        required: "Please share your experience",
                                        minLength: { value: 20, message: "Please write at least 20 characters" }
                                    })} 
                                    placeholder="Tell us about your experience..."
                                    className="textarea textarea-bordered w-full h-40 p-4 text-lg bg-sky-50 border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 resize-none"
                                />
                                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                                    {register("description").value?.length || 0}/500
                                </div>
                            </div>
                            {errors.description && (
                                <span className="text-rose-500 text-sm mt-1 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {errors.description.message}
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <motion.div 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="pt-4"
                        >
                            <button 
                                type="submit"
                                className="btn w-full py-4 text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 border-none shadow-lg rounded-xl transition-all duration-300"
                            >
                                <span className="drop-shadow-md">Submit Review</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Floating decorative elements */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                    <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
                    <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"></div>
                </div>
            </div>

            {/* Add animation styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .animate-float { animation: float 8s ease-in-out infinite; }
                .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
                .animate-float-slow { animation: float 12s ease-in-out infinite 1s; }
            `}</style>
        </div>
    );
};

export default Review;