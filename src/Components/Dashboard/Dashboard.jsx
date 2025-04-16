import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHome, FaShopify } from "react-icons/fa";
import { IoIosAddCircle, IoIosPeople } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdAddBox, MdWorkHistory } from "react-icons/md";
import { RiFileEditFill, RiMailFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Dashboard = () => {
    const {logOut} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#b5c8fa36]">
                <a className="text-xl">
                    <div className="flex flex-col items-center gap-3">
                        <div>
                            <img src="https://i.ibb.co.com/9kwCqrfM/logo.jpg" alt="" className="h-20 rounded-full" />
                        </div>
                        <div className="text-center">
                            <h2 className="sansita text-[40px] mb-2">Washlava</h2>
                            <h2 className="sansita text-[20px]">Laundry, as smooth as lava's flow!</h2>
                        </div>
                    </div>
                </a>
                <ul className="p-6 space-y-4 text-xl">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/adminhome">
                                        <img className="h-10" src="https://i.ibb.co.com/NnVDLDw0/layout-16771969.png" alt="" />
                                        Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/addproduct">
                                        <img className="h-10" src="https://i.ibb.co.com/ZzkfcntN/plus-sign-11656281.png" alt="" />
                                        Add Service</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2 " to="/dashboard/manageservice">
                                        <img className="h-10" src="https://i.ibb.co.com/1Gbk2sk9/content-management-system-8627169.png" alt="" />
                                        Manage Sevices</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/allorders">
                                        <img className="h-10" src="https://i.ibb.co.com/zVsBzJvC/shopping-cart-6459147.png" alt="" />
                                        Orders</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/allusers">
                                        <img className="h-10" src="https://i.ibb.co.com/gbMzkQmY/dollar-10170249.png" alt="" />
                                        Payments</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/allusers">
                                        <img className="h-10" src="https://i.ibb.co.com/h1gbX3Rq/group-9572862.png" alt="" />
                                        Users</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/allreviews">
                                        <img className="h-10" src="https://i.ibb.co.com/5h0LPTht/sms-9699953.png" alt="" />
                                       All Reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={handleLogOut} className="flex items-center gap-2" to="/">
                                        <img className="h-10" src="https://i.ibb.co.com/jZ6jTNfk/extract-12335051.png" alt="" />
                                        Log Out</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/userHome">
                                        <img className="h-10" src="https://i.ibb.co.com/NnVDLDw0/layout-16771969.png" alt="" />
                                        Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/cart">
                                        <img className="h-10" src="https://i.ibb.co.com/zVsBzJvC/shopping-cart-6459147.png" alt="" />
                                        My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/paymentHistory">
                                        <img className="h-10" src="https://i.ibb.co.com/gbMzkQmY/dollar-10170249.png" alt="" />
                                        My Payments</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/dashboard/review">
                                        <img className="h-10" src="https://i.ibb.co.com/5h0LPTht/sms-9699953.png" alt="" />
                                        Write Review</NavLink>
                                </li>

                                <div className="divider"></div>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/">

                                        <img className="h-10" src="https://i.ibb.co.com/FL35sGwP/home-5844074.png" alt="" />
                                        Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center gap-2" to="/services">
                                        <img className="h-10" src="https://i.ibb.co.com/1Gbk2sk9/content-management-system-8627169.png" alt="" />
                                        Services</NavLink>
                                </li>
                                <li >
                                    <NavLink to="/contact" className="flex items-center gap-2">
                                    
                                    <img className="h-10" src="https://i.ibb.co.com/yF2h4X5P/telephone-contacts-17615279.png" alt="" />
                                        Contact Us</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={handleLogOut} className="flex items-center gap-2" to="/">
                                        <img className="h-10" src="https://i.ibb.co.com/jZ6jTNfk/extract-12335051.png" alt="" />
                                        Log Out</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;