import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCounter }) => {
  return (
    <header className="w-full sticky top-0 shadow-2xl shadow-orange-200 bg-orange-500 flex justify-between h-fit py-5 items-center">
      <Link to="/">
        <h1 className="ml-5 text-white font-bold text-3xl">Cart-App</h1>
      </Link>

      <Link to="/cart">
        <h3 className="mr-5 text-white font-medium text-1xl underline">
          cart <span>({cartCounter})</span>{" "}
        </h3>
      </Link>
    </header>
  );
};

export default Header;
