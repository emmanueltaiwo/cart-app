import React from "react";
import { ACTIONS } from "../App";

const CartItem = ({
  id,
  image,
  title,
  description,
  price,
  dispatchCartState,
  numberOfGood,
}) => {
  return (
    <div
      key={id}
      className="w-[90%] flex flex-col lg:flex-row items-center gap-5 h-fit py-5 bg-white shadow-xl hover:shadow-2xl"
    >
      <div className="w-[20%] mx-5 my-auto">
        <img src={image} className="lg:max-w-[10vh] xl:max-w-[17vh]" alt="" />
      </div>
      <div className="w-full flex flex-col gap-5 mx-auto lg:mx-2">
        <h3 className="text-xl font-medium text-center">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </h3>
        <hr className="border-[0.5px] border-gray-700" />

        <p className="text-sm text-center text-gray-500">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>

      <div className="mx-2">
        <p className="text-xl text-gray-400">{price}</p>
      </div>

      <div className="w-full lg:w-[25%] flex flex-col gap-5 items-center justify-center lg:mr-5 my-auto">
        <div className="flex gap-3">
          <button
            onClick={() => ACTIONS.DECREEMENT_NUMBER_OF_GOOD}
            className="bg-orange-500 w-fit px-2 py-1 h-fit rounded-smd text-white"
          >
            -
          </button>
          <input
            type="number"
            className="bg-slate-300 w-[5vh] text-center font-bold"
            value={numberOfGood}
          />
          <button
            onClick={() => ACTIONS.DECREEMENT_NUMBER_OF_GOOD}
            className="bg-orange-500 w-fit px-2 py-1 h-fit rounded-smd text-white"
          >
            +
          </button>
        </div>
        <button
          className="bg-orange-500 w-fit py-2 px-5 text-sm text-white font-medium"
          onClick={() => {
            dispatchCartState({
              type: ACTIONS.REMOVE_ITEM,
              payload: { id: id },
            });
            dispatchCartState({
              type: ACTIONS.DECREEMENT_CART_COUNTER,
            });
          }}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
