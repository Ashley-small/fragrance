import React from "react";

const Card3 = ({ image, name }) => {
  return (
    <div>
      <div className="h-60 relative border-2 overflow-hidden rounded-3xl text-sm hover:text-md  hover:text-amber-800 break-normal  hover:shadow-md hover:shadow-amber-800/75 font-bold md:text-xl md:hover:text-2xl md:h-96 ">
        <img
          className="absolute 
        h-3/4 w-full object-contain"
          src={image}
        />
        <h2 className="absolute text-center inset-x-0 bottom-6 ">{name}</h2>
      </div>
    </div>
  );
};

export default Card3;
