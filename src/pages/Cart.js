import React, { useState } from "react";
import Header from "../components/Header";
import { ACTIONS } from "../App";
import { createPortal } from "react-dom";
import CheckOutModal from "../components/Modal";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";

const Cart = ({ cartItems, cartCounter, dispatchCartState, numberOfGood }) => {
  const getTotalPrice = cartItems
    .reduce((total, cart) => total + cart.price, 0)
    .toFixed(2);

  const [hasCheckOut, setHasCheckOut] = useState(false);

  const handleCheckOut = () => {
    setHasCheckOut(true);
    dispatchCartState({ type: ACTIONS.EMPTY_CART });
  };
  return (
    <div>
      <Header cartCounter={cartCounter} />

      <section className="w-full grid grid-cols-2 gap-5">
        <div className="lg:w-[70%] xl:w-[80%] overflow-x-auto col-span-2 mt-10 grid grid-cols-1 gap-10 justify-items-center lg:pb-10 pb-[30vh]">
          {cartItems.length < 1 ? (
            <EmptyCart />
          ) : (
            cartItems.map((cart) => (
              <CartItem
                dispatchCartState={dispatchCartState}
                numberOfGood={numberOfGood}
                id={cart.id}
                image={cart.image}
                title={cart.title}
                description={cart.description}
                price={cart.price}
              />
            ))
          )}
        </div>

        <div
          className={`${
            cartItems.length < 1
              ? "hidden"
              : "fixed lg:h-screen lg:w-[30%] xl:w-[20%] lg:bottom-auto bottom-0 md:w-full h-[22vh] sm:h-[20vh] lg:inline flex flex-col sm:flex-row w-full justify-between bg-gray-300 lg:bg-white shadow-2xl right-0"
          }`}
        >
          <div>
            <h1 className="mx-5 text-[20px] md:text-[35px] font-bold mt-5">
              CHECKOUT
            </h1>
            <h2 className="mx-5 text-[15px] md:text-[20px] font-medium mt-1">
              Total: ${getTotalPrice}
            </h2>
          </div>

          <button
            className="mx-5 bg-orange-500 mt-5 md:mt-20 w-fit py-2 my-auto px-5 text-lg text-white font-medium"
            onClick={handleCheckOut}
          >
            Proceed To Checkout
          </button>
        </div>
      </section>
      {hasCheckOut &&
        createPortal(
          <CheckOutModal
            closeModal={setHasCheckOut}
            message="Success"
            title="Your Purchase is Succesful"
          />,
          document.getElementById("modal")
        )}
    </div>
  );
};

export default Cart;
