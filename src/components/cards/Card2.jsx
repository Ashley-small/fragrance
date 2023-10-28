import React from "react";

const Card2 = ({ image, name }) => {
  return (
    <div>
      <div className="h-96 w-full md:w-45 mb-8 md:mb-auto md:pt-8">
        <div>
          <p className="text-center px-6 py-2 bg-slate-900 text-white text-2xl">
            {name}
          </p>
        </div>
        <div className="h-80  rounded border-2 mt-1 mb-2">
          <img className="object-cover h-full w-full" src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Card2;
