import React, { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY + window.innerHeight >= window.innerHeight + 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [visible]);
  const visiblestyle = {
    opacity: visible ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <div name="about" className="bg-[#071121] w-full h-screen text-gray-300">
      <div className="flex justify-center flex-col items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid gap-8 grid-cols-2 ">
          <div className=" sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-pink-400 inline">
              <span
                style={visiblestyle}
                className={`${visible ? "ml-0" : "ml-[-130px]"} duration-150`}
              >
                About
              </span>
            </p>
          </div>
          <div className=""></div>
        </div>

        <div className="max-w-[1000px] w-full grid gap-8 sm:grid-cols-2 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p style={visiblestyle}>
              Hi I&apos;m Raja Kazmi
              <p> Expert Web & Mobile App Dev</p>
            </p>
          </div>
          <div>
            <p style={visiblestyle}>
              As a seasoned software developer based in Waterloo,ON,CA, I
              specialize in crafting innovative mobile and web app solutions
              that drive results. With a strong background in react-native
              development and passion for staying up-to-date with th latest
              industory trends, I excel in delivering hight-quality products
              that meet and exceed client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
