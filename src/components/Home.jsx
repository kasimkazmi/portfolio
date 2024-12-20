import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-scroll";
import cv from "../assets/cv/final.pdf";
const Home = () => {
  return (
    <div name="home" className="bg-[#071121] w-full h-screen">
      {/* <marquee className="py-4 absolute top-[20%]  text-gray-300">
        <h2 className="text-xl">
          I have acquired the status of a tax resident in Poland by receiving
          KARTA POBYTU, hence I DO NOT require any Visa or Work permit to
          legally work in Poland.
        </h2>
      </marquee> */}
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500 text-2xl">Hi, My name is </p>
        <h1 className="text-[#ccd6f6] sm:text-5xl text-4xl font-bold">
          Raja Kazmi
        </h1>
        <h2 className="text-[#8892b0] animate-charcter text-4xl sm:text-5xl">
          I&apos;m a Mobile App Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I&apos;m a Mobile App Developer specializing in building hybrid
          application with react-native and typescript.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-white border-2 py-3 hover:bg-pink-500 px-5 flex items-center hover:border-pink-600">
              View Work
              <span className=" group-hover:rotate-90 duration-150">
                <HiArrowNarrowRight className="text-white text-2xl ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* Social icons */}
      <div className="fixed hidden md:block top-[35%]  left-0">
        <ul>
          <li className=" w-[150px] flex items-center bg-blue-500 h-[60px] ml-[-90px] hover:ml-[-10px] duration-150">
            <a
              href="https://www.linkedin.com/in/kasimkazmi/"
              className="flex items-center justify-between w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[150px] flex items-center bg-blue-800 h-[60px] ml-[-90px] hover:ml-[-10px] duration-150">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center justify-between w-full text-gray-300"
            >
              MESSAGE <MdOutlineAttachEmail size={30} />
            </Link>
          </li>

          <li className=" w-[150px] flex items-center bg-gray-900 h-[60px] ml-[-90px] hover:ml-[-10px] duration-150">
            <a
              href="https://github.com/kasimkazmi"
              className="flex items-center justify-between w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className=" w-[150px] flex items-center bg-red-500 h-[60px] ml-[-90px] hover:ml-[-10px] duration-150">
            <a
              href={cv}
              className="flex items-center justify-between w-full text-gray-300"
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
