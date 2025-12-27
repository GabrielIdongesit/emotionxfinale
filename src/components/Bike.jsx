// src/components/Bike.jsx
import React, { useState } from "react";
import { data } from "../data/data.js";

const Bike = ({ searchTerm }) => {
  const [bikes, setBikes] = useState(data);

  // Filter by type
  const filterType = (category) => {
    setBikes(data.filter((item) => item.category === category));
  };

  // Filter by price
  const filterPrice = (price) => {
    setBikes(data.filter((item) => item.price === price));
  };

  // Apply live search + filters
  const filteredBikes = bikes.filter((item) =>
    (item.name?.toLowerCase() || "").includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-teal-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between mt-6">
        {/* Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap mt-2">
            <button onClick={() => setBikes(data)} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">All</button>
            <button onClick={() => filterType("AKEZ")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">AKEZ</button>
            <button onClick={() => filterType("Surron")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">Surron</button>
            <button onClick={() => filterType("StarkVARG")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">StarkVARG</button>
            <button onClick={() => filterType("OUXI")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">OUXI</button>
            <button onClick={() => filterType("Bigniu")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">Bigniu</button>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 lg:mt-0">
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex flex-wrap mt-2">
            <button onClick={() => filterPrice("$1,800 USD")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">$1,800</button>
            <button onClick={() => filterPrice("$3,200")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">$3,200</button>
            <button onClick={() => filterPrice("$12,990")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">12,990</button>
            {/* <button onClick={() => filterPrice("$$$$")} className="border-teal-600 text-teal-600 border px-5 py-1 rounded-md hover:bg-teal-600 hover:text-white m-1">$$$$</button> */}
          </div>
        </div>
      </div>

      {/* Bike Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {filteredBikes.length > 0 ? (
          filteredBikes.map((item, index) => (
            <div key={index} className="border shadow-2xl rounded-lg">
              <img className="w-full h-[35vh] object-cover rounded-t-md" src={item.image} alt={item.name} />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <span className="bg-teal-500 text-white px-2 rounded-full">{item.price}</span>
              </div>
              <p className="text-gray-800 p-2 text-sm">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No bikes found.</p>
        )}
      </div>
    </div>
  );
};

export default Bike;
