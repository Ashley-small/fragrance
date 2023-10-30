import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-amber-800 text-slate-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-lg p-8 py-12 mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          <span role="img" aria-label="Wave Emoji">
            👋
          </span>
          Hey There!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          It seems you've stumbled upon a fragrance I haven't reviewed yet.
          Don't worry; the world of fragrances is vast, and I haven't covered
          them all.
        </p>
        <p className="text-lg md:text-xl mb-6">
          You can be a fragrance pioneer! Leave a review for this discovery
          <Link to="/requests" className="text-slate-900 underline">
            <span className="font-bold"> here </span>
          </Link>
          and help others in their fragrance journey.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Or, if you're feeling adventurous, explore more fragrances on the
          <Link to="/" className="text-slate-900 underline">
            <span className="font-bold"> homepage</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
