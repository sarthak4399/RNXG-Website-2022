import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      Link: "Home",
      url: "",
    },
    {
      id: 2,
      Link: "Events",
      url: "",
    },
    {
      id: 3,
      Link: "project",
      url: "",
    },
    {
      id: 4,
      Link: "About",
      url: "",
    },
    {
      id: 5,
      Link: "contact",
      url: "",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white ">
      <div className="w-20 mt-[15px] ">
        <h1 className="  text-3xl font-bold ml-[-2] text-[#00df9a]">RNXG</h1>
      </div>
      <ul className="hidden md:flex hover:cursor-zoom-out">
        {links.map(({ id, Link, url }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase text-gray-500 hover:scale-105 hover:text-[#00df9a]"
          >
            <a href={url}>{Link}</a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden "
      >
        {nav ? (
          <FaTimes size={30} className="text-[#00df9a]" />
        ) : (
          <FaBars size={30} className="text-[#00df9a]" />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col text-1xl justify-center items-center absolute top-0 left-0 w-full h-screen">
          {links.map(({ id, Link, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer  py-6 text-gray-500 uppercase hover:text-[#00df9a]"
            >
              <a href={url}>{Link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
