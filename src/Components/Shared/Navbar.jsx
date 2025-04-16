import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const navlinkStyles = ({ isActive }) => ({
        position: "relative",
        paddingBottom: "4px",
        fontSize: "20px",
        fontWeight: isActive ? "700" : "500",
        color: "#000000",
        transition: "0.3s",
        textDecoration: "none",
        ...(isActive && {
            borderBottom: "3px solid #000000",
        }),
    });



    const links =
        <>
            <NavLink onClick={scrollToTop} to="/" style={navlinkStyles}>Home</NavLink>
            <NavLink onClick={scrollToTop} to="/about" style={navlinkStyles}>About us</NavLink>
            {!isAdmin && (
                <NavLink onClick={scrollToTop} to="/services" style={navlinkStyles}>
                    Services
                </NavLink>
            )}
            {!isAdmin && (
                <NavLink onClick={scrollToTop} to="/contact" style={navlinkStyles}>Contact Us</NavLink>
            )}
        </>

    return (
        <div className="fixed z-10 w-full">
            <div className="navbar bg-[#b9cdfd3a] manrope px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl">
                        <div className="flex items-center gap-3">
                            <div>
                                <img src="https://i.ibb.co.com/9kwCqrfM/logo.jpg" alt="" className="h-20 rounded-full" />
                            </div>
                            <div className="">
                                <h2 className="sansita text-[40px] mb-2">Washlava</h2>
                                <h2 className="sansita text-[20px]">Laundry, as smooth as lava's flow!</h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex lg:ml-6">
                    <ul className="menu text-lg menu-horizontal gap-8 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-8">
                    {user ? (
                        <Link to={user.isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
                            <button className="text-xl font-medium py-4 px-6">
                                <img className="h-14 rounded-full border-2 border-white shadow-lg" src={user.photoURL} alt="" />
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login">
                                <a className="btn text-xl font-medium py-4 px-6 
                                bg-gradient-to-r from-blue-500 to-blue-600 
                                text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700
                                transition-all duration-300
                                shadow-md hover:shadow-lg rounded-lg">
                                    Log In
                                </a>
                            </Link>
                            <Link to="/register">
                                <a className="btn text-xl font-medium py-4 px-6 
                                bg-gradient-to-r from-emerald-500 to-emerald-600 
                                text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-700
                                transition-all duration-300
                                shadow-md hover:shadow-lg rounded-lg">
                                    Sign Up
                                </a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;