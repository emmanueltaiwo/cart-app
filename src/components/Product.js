import React from "react";

const Product = ({
  id,
  category,
  image,
  title,
  price,
  description,
  addItemsToCart,
}) => {
  const handleAddToCart = (id, category, image, title, price, description) => {
    addItemsToCart(id, category, image, title, price, description);
  };
  return (
    <div
      className="w-full flex flex-col m-5 gap-2 h-full px-2 pb-10 bg-white shadow-xl hover:shadow-2xl"
      style={{ alignSelf: "flex-end" }}
    >
      <p className="mt-3 mr-3 ml-auto text-[10px] font-extralight italic text-gray-400">
        {category}
      </p>
      <img src={image} alt="" className="w-[50%] mx-auto h-[20vh] mt-4" />
      <h1 className="w-[200px] font-semibold mx-5 mt-5">
        {title.length > 50 ? title.substring(0, 50) + "..." : title}
      </h1>
      <h2 className="mx-5 font-bold text-xl mt-3">${price}</h2>
      <button
        onClick={() =>
          handleAddToCart(id, category, image, title, price, description)
        }
        className="bg-orange-500 w-[90%] mx-auto py-3 px-5 text-lg text-white font-medium mt-auto"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
