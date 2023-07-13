import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <div className="fixed top-1/2 py-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[70%] h-fit flex gap-5 flex-col justify-center items-center bg-orange-400">
        <h1 className="mt-5 text-5xl text-white font-bold">Empty Cart</h1>

        <h2 className="mt-5 text-xl text-white font-semibold">
          Your Cart is Empty Shop For Goods
        </h2>
        <Link
          className="mt-5 w-fit h-fit px-10 py-2 bg-orange-700 text-white"
          to="/"
        >
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
