import React from "react";
import Itemscontainer from "./Itemscontainer";
import Socialicons from "./Socialicons";
const Footer = () => {
  return (
    <footer className="md:mb-0 bg-[#141414] text-white h-auto max-w-auto">
      <div className="md:flex  grid grid-cols-3 gap-20 sm:px-12  bg-gradient-to-l from-[#00df9a] to-gray-900 py-4  rounded-b-sm">
        <h1 className="lg:text-4xl  text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold  md:w-2/5">
          <span className="text-[#00df9a] text-4xl">RNXG</span>
          <p>Robotics For Next Generation</p>
        </h1>

        <div className=" leading-  space-x-20  gap-x-8  text-base text-center ">
          <div
            className=" text-gray-800 p-4
                    font-semibold inline-block align-bottom "
          >
            <p className="">
              RNXG that is Robotics for Next Generation provides
            </p>

            <p> the best platform to work on different problem</p>
            <p> statements and to create best solutions for them.</p>
          </div>
        </div>
      </div>

      <Itemscontainer />
      <div className="grid grid-cols-2 pt-2 gap-4 text-gray-400 text-sm pb-8">
        <span className="text-center">@2022.All right reserved</span>

        <Socialicons />
      </div>
    </footer>
  );
};

export default Footer;
