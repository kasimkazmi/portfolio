import { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  // showMenu function
  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  const visiblestyle = {
    opacity: showNavbar ? 0 : 1,
    transition: "opacity 0.3s ease",
  };

  const scrollHandler = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > lastScroll) {
      setShowNavbar(true);
      setShowMenu(false);
    } else {
      setShowNavbar(false);
      setShowMenu(false);
    }
    setLastScroll(scrollPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScroll]);

  function showMenuFalse() {
    setShowMenu(false);
  }
  return (
    <div
      style={visiblestyle}
      className=" z-10 fixed shadow-md  w-full h-[80px] p-4 flex justify-between items-center  bg-[#071121] text-gray-300"
    >
      <div>
        <img
          src={Logo}
          alt="logo imate"
          style={{ width: "80px", paddingTop: "15px" }}
        />
      </div>

      <ul className=" hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="study" smooth={true} duration={500}>
            Study
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger icon */}
      <div onClick={showMenuHandler} className="md:hidden z-10">
        {showMenu ? (
          <FaTimes className="text-3xl cursor-pointer duration-500 " />
        ) : (
          <FaBars className=" cursor-pointer text-3xl duration-500" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={` ${
          showMenu ? "absolute" : "hidden"
        } top-0 left-0 w-full bg-[#0a192f] h-screen flex flex-col justify-center items-center`}
      >
        <li onClick={showMenuFalse} className="py-4 text-2xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li onClick={showMenuFalse} className="py-4 text-2xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li onClick={showMenuFalse} className="py-4 text-2xl">
          <Link to="study" smooth={true} duration={500}>
            Study
          </Link>
        </li>
        <li onClick={showMenuFalse} className="py-4 text-2xl">
          <Link to="skills" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li onClick={showMenuFalse} className="py-4 text-2xl">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li onClick={showMenuFalse} className="py-4 text-2xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
