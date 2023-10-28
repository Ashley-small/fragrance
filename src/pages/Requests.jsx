import React from "react";

const Requests = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const fragranceName = e.target.fragranceName.value;
    const message = e.target.message.value;

    if (!name || !email || !fragranceName || !message) {
      alert("Please fill out all required fields");
    } else {
      alert("Form submitted successfully!");
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.fragranceName.value = "";
      e.target.message.value = "";
    }
  };
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-slate-900 to-amber-800 h-96"> </div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center">
            Leave a fragrance review request
          </p>
          <form onSubmit={handleFormSubmit} action="/" method="post">
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none">Name</label>
                <input
                  type="text"
                  required
                  className="leading-none text-gray-900 p-3 focus:outline-none focus:border-amber-800 mt-4 bg-gray-100 border rounded border-gray-200"
                  name="name"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none">Email</label>
                <input
                  type="email"
                  className="leading-none text-gray-900 p-3 focus:outline-none focus:border-amber-800 mt-4 bg-gray-100 border rounded border-gray-200 "
                  required
                  name="email"
                />
              </div>
            </div>
            <div className="md-flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none">
                  Fragrance Name
                </label>
                <input
                  type="text"
                  className="leading-none text-gray-900 p-3 focus:outline-none focus:border-amber-800 mt-4 bg-gray-100 border rounded border-gray-200 "
                  required
                  name="fragranceName"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Message</label>
                <textarea
                  type="text"
                  className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-amber-800 mt-4 bg-gray-100 border rounded border-gray-200"
                  required
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-slate-900 rounded hover:bg-amber-800 focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Requests;
