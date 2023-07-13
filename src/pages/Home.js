import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import FilterProducts from "../components/FilterProducts";
import { createPortal } from "react-dom";
import CheckOutModal from "../components/Modal";

const Home = ({
  isLoading,
  products,
  addItemsToCart,
  cartCounter,
  itemExists,
  setItemExists,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isProductNotFound, setIsProductNotFound] = useState(false);
  const [productNotFoundMessage, setProductNotFoundMessage] = useState("");

  const handleProductsFilter = (searchValue) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
    setIsProductNotFound(filteredProducts.length === 0);
    setProductNotFoundMessage(`"${searchValue}" is not found`);
  };

  useEffect(() => {
    setFilteredProducts(products);
    setIsProductNotFound(false);
  }, [products]);

  const selctValueChange = (selectedOption) => {
    switch (selectedOption) {
      case "all":
        setFilteredProducts(products);
        break;
      case "ascending":
        const filterByAscendingOrder = [...products].sort(
          (a, b) => a.price - b.price
        );
        setFilteredProducts(filterByAscendingOrder);
        break;
      case "descending":
        const filterByDescendingOrder = [...products].sort(
          (a, b) => b.price - a.price
        );
        setFilteredProducts(filterByDescendingOrder);
        break;
      case "men":
        const filterByMenOption = products.filter(
          (product) => product.category === "men's clothing"
        );
        setFilteredProducts(filterByMenOption);
        break;
      case "jewelery":
        const filterByJeweleryOption = products.filter(
          (product) => product.category === "jewelery"
        );
        setFilteredProducts(filterByJeweleryOption);
        break;
      case "electronics":
        const filterByElectronicsOption = products.filter(
          (product) => product.category === "electronics"
        );
        setFilteredProducts(filterByElectronicsOption);
        break;
      case "women":
        const filterByWomenOption = products.filter(
          (product) => product.category === "women's clothing"
        );
        setFilteredProducts(filterByWomenOption);
        break;
      default:
        return filteredProducts;
    }
  };

  return (
    <div>
      <Header cartCounter={cartCounter} />
      <FilterProducts
        handleProductsFilter={handleProductsFilter}
        selctValueChange={selctValueChange}
      />
      {isLoading ? (
        <h1 className="text-center text-3xl font-medium mt-10">Loading...</h1>
      ) : isProductNotFound ? (
        <p className="text-center mt-10 text-2xl font-medium">
          {productNotFoundMessage}
        </p>
      ) : (
        <ProductFeed
          products={filteredProducts}
          addItemsToCart={addItemsToCart}
        />
      )}

      {itemExists &&
        createPortal(
          <CheckOutModal
            closeModal={setItemExists}
            message="Error"
            title="Item is already in cart"
          />,
          document.getElementById("modal")
        )}
    </div>
  );
};

export default Home;
