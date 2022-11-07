import React from "react";
import EventCard from "./EventCard";
import Rmageddon from "../Assets/Rmageddon(2023).jpg";
const Event = () => {
  return (
    <div
      name="event"
      className="py-20 px-4 bg-[#141414] w-auto h-auto mx-auto "
    >
      <div className=" ">
        <h1 className="font-bold text-4xl md: text-white  px-4 animate-bounce ">
          RNXG <h1 className="text-[#00df9a]"> EVENT'S</h1>
        </h1>
        <div className="text-white font-bold text-4xl border-box shadow-2xl w-full h-auto  mx-auto flex flex-auto mt-5 ">
          <p className="px-4">
            The <p className=" inline text-[#00df9a] underline">events</p> that
            actually
            <p className="inline text-[#00df9a] underline">
              help <p className="text-white "> you grow !</p>
            </p>
          </p>
        </div>
        {/* {card event} */}
      </div>
      <div className="py-6 md:px-[40%] lg:px-[40%] ">
        <EventCard
          id={1}
          src={Rmageddon}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vitae fugiat, minima sequi cupiditate, at eveniet soluta dolor nesciuntvelit corrupti atque vel labore nostrum iste, voluptas vero!Molestiae, sit?"
          }
        />
      </div>
    </div>
  );
};
export default Event;
