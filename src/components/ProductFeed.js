import React, { useState } from "react";
import Product from "./Product";

const ProductFeed = ({ products, addItemsToCart }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMoreProduct = (e) => {
    e.preventDefault();
    setViewMore(true);
  };

  return (
    <section className="w-full mt-20 pb-10">
      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center mx-auto">
        {products.slice(0, 8).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            category={product.category}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            addItemsToCart={addItemsToCart}
          />
        ))}
        {viewMore &&
          products
            .slice(8, 20)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                category={product.category}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                addItemsToCart={addItemsToCart}
              />
            ))}
      </div>

      <button
        onClick={handleViewMoreProduct}
        className={`${
          !viewMore
            ? "bg-orange-500 w-fit mx-auto py-2 px-10 flex mt-16 text-lg text-white font-medium"
            : "hidden"
        }`}
      >
        View More
      </button>
    </section>
  );
};

export default ProductFeed;
