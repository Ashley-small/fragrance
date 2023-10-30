import React from "react";

const Card3 = ({ image, name }) => {
  return (
    <div>
      <div className=" h-80 relative border-2 overflow-hidden rounded-3xl  hover:shadow-md hover:shadow-amber-800/75 font-bold text-xl hover:text-2xl hover:text-amber-800 break-normal ">
        <img
          className="absolute 
        h-4/5 w-full object-contain"
          src={image}
        />
        <h2 className="absolute text-center inset-x-0 bottom-6 ">{name}</h2>
      </div>
    </div>
  );
};

export default Card3;
