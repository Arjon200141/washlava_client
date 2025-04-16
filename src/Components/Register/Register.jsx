import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogIn from "../SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId)
                                    reset();
                                Swal.fire({
                                    title: "Congratulations!",
                                    text: "User Created Successfully!!!",
                                    icon: "success"
                                });
                                navigate(from, { replace: true });
                            })
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center py-20"
            style={{
                backgroundImage: `url(https://i.ibb.co.com/mCrgf2hV/register.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Or{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            sign in to your existing account
                        </Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register("name", { required: true })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-600">Name is required</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", { required: true })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                placeholder="you@example.com"
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-600">Email is required</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", { required: true })}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                placeholder="••••••••"
                            />
                            {errors.password && <p className="mt-2 text-sm text-red-600">Password is required</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white bg-opacity-90 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <SocialLogIn />

                <div className="text-center text-sm text-gray-600">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;