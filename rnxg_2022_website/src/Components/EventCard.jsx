import React from "react";

const EventCard = (props) => {
  return (
    <div className="flex flex-col border shadow-md shadow-[#00df9a] rounded-3xl text-left py-auto px-auto md:w-[100%] md:max-w-[20rem] justify-center h-[550px]  hover:scale-105  ">
      <div>
        <div key={props.id} className=" py-16 px-8 rounded-3xl">
          <div className="bg-gradient-to-bl from-slate-600 to-[#00df9a] rounded-3xl">
            <img src={props.src} alt="" />
          </div>
          <h3 className="font-bold  text-[#00df9a] px-2">Rmageddon(2023)</h3>
          <p className=" text-gray-500 text-xl mx-2 text-left ">{props.text}</p>
        </div>
      </div>
    </div>
    // from-slate-600 to-[#00df9a] bg-gradient-to-br from-[#00df9a] to-slate-600
  );
};

export default EventCard;
