import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
const EventCard = (props) => {
  return (
    <div className="max-w-[1240px] mx-auto md:grid-cols-3 gap-8  inline-flex border">
      <div>
        <div key={props.id} className=" py-16 px-8 rounded-3xl">
          <div className="bg-gradient-to-bl from-slate-600 to-[#00df9a] rounded-3xl">
            <img src={props.url} alt="/" />
          </div>
          <h3 className="font-bold  text-[#00df9a] px-2"></h3>
          <p className=" text-gray-500 text-xl mx-2 text-left lg:text-sm md:text-sm ">
            {props.text}
          </p>
        </div>
        <div className="flex align-middle">
          <a href={props.link}>
            <button className="uppercase bg-[#00df9a] rounded-md font-medium my-4 px-4 mx-auto py-3  ">
              Watch Now
              <span className="">
                <AiFillPlayCircle className="flex  justify-between" size={25} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
    // from-slate-600 to-[#00df9a] bg-gradient-to-br from-[#00df9a] to-slate-600
  );
};

export default EventCard;
