import React, { useState, useEffect, useRef } from "react";

const FilterProducts = ({ handleProductsFilter, selctValueChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const inputRef = useRef();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    handleProductsFilter(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    selctValueChange(selectedValue);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <section className="w-full mx-auto flex flex-col lg:flex-row gap-5 justify-evenly mt-10 items-center">
      <form className="w-full flex mx-auto">
        <input
          type="search"
          ref={inputRef}
          className="w-[90%] lg:w-[70%] border-[1px] border-gray-500 bg-transparent py-3 font-medium outline-none px-5 text-lg  mx-auto"
          placeholder="Search for Products"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="w-fit py-2 px-3 lg:mr-10 bg-orange-400 text-white rounded-md"
      >
        <option value="all">All Products</option>
        <option value="ascending">Sort by price (Ascending Order)</option>
        <option value="descending">Sort by price (Descending Order)</option>
        <option value="men">Men Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women">Women Clothing</option>
      </select>
    </section>
  );
};

export default FilterProducts;
