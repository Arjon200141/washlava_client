import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer grid grid-cols-3 gap-6 bg-[#95b4fe] text-base-content p-10">
                <nav className="ml-16">
                    <div className="flex items-center gap-3">
                        <div>
                            <img src="https://i.ibb.co.com/9kwCqrfM/logo.jpg" alt="" className="h-16 w-16 rounded-full" />
                        </div>
                        <div className="">
                            <h2 className="sansita text-[40px] mb-4">Washlava</h2>
                            <h2 className="sansita text-[20px]">Laundry, as smooth as lava’s flow!</h2>
                        </div>
                    </div>
                    <div className="mt-3 ml-3">
                        <a className="link epilogue text-[17px] font-normal link-hover flex items-center gap-4 mb-3"><span className="text-black text-md"><FaPhoneAlt /></span>+880169696969</a>
                        <a className="link epilogue text-[17px] font-normal link-hover flex items-center gap-4 mb-3"><span className="text-black text-md"><CiMail /></span>support@washlava.com</a>
                        <a className="link epilogue text-[17px] font-normal link-hover flex items-center gap-4"><span className="text-black text-md"><CiLocationOn /></span>2/7, Rajapur, Pabna-6600,<br /> Bangladesh</a>
                    </div>
                </nav>
                <nav className="ml-32">
                    <h6 className="footer-title text-3xl">Company</h6>
                    <a className="link link-hover text-lg ml-2">About us</a>
                    <a className="link link-hover text-lg ml-2">Contact</a>
                    <a className="link link-hover text-lg ml-2">Jobs</a>
                    <a className="link link-hover text-lg ml-2">Press kit</a>
                </nav>
                <nav className="pt-16">
                    <h6 className="footer-title ml-12 text-3xl mb-4">Social</h6>
                    <div className="flex gap-4">
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/27tJ9hLy/fb.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/pv5NPQJT/lnk.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/nsDvS8rK/insta.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/v6QzPhfy/tiktok.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/fVQDRsHr/yt.png" alt="" />
                    </div>
                </nav>
            </footer>
            <p className="bg-[#95b4fe] text-center mt-[-12px] pb-4 text-lg font-semibold">"Effortless Laundry, Right from Your Place!”
                   <br /> <span className="text-[#D62E9B]">Book.</span> <span className="text-[#E13434]">Wash.</span> <span className="text-[#323F95]">Relax.</span> 📌</p>
            <footer className="footer footer-center bg-[#6894f8] text-black text-xl p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Washlava</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;