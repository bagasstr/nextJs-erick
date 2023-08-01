"use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { data } from "../Data/ListingTerbaru/DataTerbaru.json";
import { BiSearch } from "react-icons/bi";

const Filter = () => {
  // const [area, setArea] = useState("");
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [filteredData, setFilteredData] = useState([]);

  //   const navigate = useRouter();

  //   const handleInput = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  //   const handleChange = (e) => {
  //     const matchFilter = data.find(
  //       (produk) =>
  //         produk.area.toLowerCase() === e.toLowerCase() ||
  //         produk.typeProperty.toLowerCase() === e.toLowerCase()
  //     );
  //     if (matchFilter) {
  //       navigate(`/all-listings?filter=${searchQuery}`);
  //     } else {
  //       alert(`Listingan ${searchQuery} tidak ada`);
  //     }
  //   };

  // const handleChange = (e) => {
  //   if (e.trim() === "") {
  //     setFilteredData([]);
  //   } else {
  //     const filtered = data.filter(
  //       (product) =>
  //         product.area.toLowerCase().includes(e.toLowerCase()) ||
  //         product.typeProperty.toLowerCase().includes(e.toLowerCase()) ||
  //         product.type.toLowerCase().includes(e.toLowerCase())
  //     );
  //   }
  // };

  // const handlerFilter = () => {
  //   // console.log(area);
  //   // const valueInput = area.toLowerCase();
  //   // const filterd = setInputValue(valueInput);

  //   // setLowerCase(valueInput);
  //   const matchFilter = data.find(
  //     (produk) =>
  //       produk.area.toLowerCase() === area.toLowerCase() ||
  //       produk.typeProperty.toLowerCase() === typeProperty.toLowerCase()
  //   );
  //   if (matchFilter) {
  //     navigate(`/all-listings?area=${area}&type=${typeProperty}`);
  //   } else {
  //     alert(`Listingan ${area} tidak ada`);
  //   }
  // };

  return (
    <div
      className="w-full bg-gradient-to-r from-primary to-bg shadow-md desktop:py-10 mobile:pb-8 mobile:pt-14"
      id="home"
    >
      <div className="max-w-[1024px] mx-auto px-2">
        <div className="">
          <h1 className="mb-3 desktop:mb-3 font-medium text-lg text-white">
            Cari Properti Dengan Mudah
          </h1>
          <div className="text-center mobile:space-y-5 desktop:flex desktop:items-center desktop:gap-x-5">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <BiSearch className="text-2xl text-primary" />
              </div>
              <input
                type="search"
                id="default-search"
                className="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Area, Type Property secondary atau primary"
                // value={searchQuery} /* area state */
                // onChange={handleInput} // setArea state
                required
              />
            </div>
            <button
              //   onClick={(e) => handleChange(searchQuery)}
              className="bg-white px-4 py-3 mobile:py-2 mobile:w-full rounded-md mobile:mt-6 shadow-md text-lg font-semibold text-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
