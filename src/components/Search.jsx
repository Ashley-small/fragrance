import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import aftershave from "../utils/aftershave";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const isMatch = aftershave.some((item) => {
      const scentProfile = item.scentProfile.some((scents) =>
        scents.toLowerCase().includes(input.toLowerCase())
      );

      return (
        item.name.toLowerCase().includes(input.toLowerCase()) ||
        item.brand.toLowerCase().includes(input.toLowerCase()) ||
        scentProfile
      );
    });
    if (!isMatch) {
      navigate("/error/404");
      setInput("");
    } else if (isMatch && isMatch.length === 0) {
      navigate("/error/404");
      setInput("");
    } else if (isMatch) {
      navigate(`/searched/${input}`);
      setInput("");
    }
  };
  return (
    <form
      className="bg-gray-200 rounded-full flex items-center px-2 w-full md:w-2/4 mt-2 mb-2 border-2 border-gray-600"
      onSubmit={submitHandler}
    >
      <FaSearch size={20} onClick={submitHandler} className="text-amber-800" />
      <input
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-transparent text-amber-800 font-semibold p-2 focus:outline-none  placeholder-amber-800"
        type="text"
        placeholder="Search ..."
        value={input}
      />
    </form>
  );
};

export default Search;
