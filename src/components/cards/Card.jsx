import React from "react";

const Card = ({ image, name }) => {
  return (
    <div className="h-96 w-full md:w-45 cursor-pointer">
      <div className="h-80  rounded border-2">
        <img className="object-cover h-full w-full" src={image} alt={name} />
      </div>
      <div>
        <p className="text-center px-6 py-2 bg-slate-900 text-white text-2xl mt-1">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;
