import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            <NavLink to="/" style={navlinkStyles}>Home</NavLink>
            <NavLink to="/about" style={navlinkStyles}>About us</NavLink>
            <NavLink to="/services" style={navlinkStyles}>Services</NavLink>
            <NavLink to="/contact" style={navlinkStyles}>Contact Us</NavLink>
        </>
    return (
        <div>
            <div className="navbar bg-[#9BB9FF] manrope px-5">
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
                    <a className=" text-xl">
                        <div className="flex items-center gap-3">
                            <div>
                                <img src="https://i.ibb.co.com/9kwCqrfM/logo.jpg" alt="" className="h-20 rounded-full" />
                            </div>
                            <div className="">
                                <h2 className="sansita text-[40px] mb-2">Washlava</h2>
                                <h2 className="sansita text-[20px]">Laundry, as smooth as lava’s flow!</h2>
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
                    <a className="btn bg-sky-400 text-xl font-medium py-4 px-6">Log In</a>
                    <a className="btn bg-sky-400 text-xl font-medium py-4 px-6">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;