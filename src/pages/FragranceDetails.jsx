import React from "react";
import { Link, useParams } from "react-router-dom";
import aftershave from "../utils/aftershave";
const FragranceDetails = () => {
  const { id } = useParams();

  const product = aftershave.find((item) => item.id === parseInt(id));

  return (
    <div className="max-w-screen-xl mx-auto p-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full " key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="max-w-md mx-auto h-96"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 ">
          <h2 className="text-3xl font-bold mb-2 text-amber-800">
            {product.name}
          </h2>
          <div className="md:flex md:justify-between">
            <h3 className="text-lg text-gray-400 mb-5">{product.brand}</h3>
            <a
              href={product.link}
              className="mr-2 bg-slate-900 text-white py-2 px-4 rounded-lg mb-4 hover:bg-amber-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy here
            </a>
          </div>
          <p className="my-4 text-slate-900">{product.review}</p>

          <h3 className="text-xl font-semibold mb-2">Scent Profile</h3>

          <ul className="list-none md:flex md:flex-wrap mb-4">
            {product.scentProfile.map((scent, index) => (
              <Link to={"/searched/" + scent} key={index}>
                <li className="hover:text-amber-800 hover:font-bold mr-5    ">
                  {scent}
                </li>
              </Link>
            ))}
          </ul>
          <hr />
          <h3 className="text-xl font-semibold mb-2">Additional Info</h3>
          <h4>The fragrance was created by {product.perfumer}.</h4>
        </div>
      </div>
    </div>
  );
};

export default FragranceDetails;
