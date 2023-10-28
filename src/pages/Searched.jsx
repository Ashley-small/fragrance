import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import aftershave from "../utils/aftershave";
import Card3 from "../components/cards/Card3";

const Searched = () => {
  const params = useParams();
  const searchText = params.search.toLowerCase();
  const itemsPerPage = 12; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Filter the results and calculate pagination details
  const filteredResults = aftershave.filter((item) => {
    const checkScentProfile = item.scentProfile.some((scents) =>
      scents.toLowerCase().includes(searchText)
    );
    return (
      item.name.toLowerCase().includes(searchText) ||
      item.brand.toLowerCase().includes(searchText) ||
      checkScentProfile
    );
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  // Filter results for the current page
  const currentPageResults = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-[1640px] p-8 py-12 min-h-screen">
      <h1 className="text-center text-3xl font-bold text-amber-800">
        All {params.search} Fragrances
      </h1>
      <div className=" mx-auto p-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {currentPageResults.map((item) => (
          <Link to={"/details/" + item.id} key={item.id}>
            <Card3 name={item.name} image={item.image} />
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <div className=" flex w-full justify-around font-semibold my-4 ">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Searched;
