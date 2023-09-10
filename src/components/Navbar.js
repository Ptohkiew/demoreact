import logo from "../assets/icon/user.png";
import facebook from "../assets/icon/facebook.png";
import ig from "../assets/icon/instagram.png";
import github from "../assets/icon/github.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={60} className="cursor-pointer" />
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/patipat.tohkiew" target="_blank" >
                        <img src={facebook} alt="facebook" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://instagram.com/pxptxk_" target="_blank">
                        <img src={ig} alt="instagram" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://github.com/Ptohkiew" target="_blank">
                    <img src={github} alt="github" width={40} />
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;