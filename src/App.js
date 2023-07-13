import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export const ACTIONS = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  EMPTY_CART: "empty-cart",
  INCREEMENT_CART_COUNTER: "increment-cart",
  DECREEMENT_CART_COUNTER: "decreement-cart",
  INCREEMENT_NUMBER_OF_GOOD: "increement-number-of-good",
  DECREEMENT_NUMBER_OF_GOOD: "decreement-number-of-good",
};

function reducer(cartState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        ...cartState,
        items: [...cartState.items, action.payload],
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...cartState,
        items: cartState.items.filter((item) => item.id !== action.payload.id),
      };
    case ACTIONS.EMPTY_CART:
      return {
        ...cartState,
        items: [],
        cartCounter: (cartState.cartCounter = 0),
      };
    case ACTIONS.INCREEMENT_CART_COUNTER:
      return {
        ...cartState,
        cartCounter: cartState.cartCounter + 1,
      };
    case ACTIONS.DECREEMENT_CART_COUNTER:
      return {
        ...cartState,
        cartCounter: cartState.cartCounter - 1,
      };

    default:
      return cartState;
  }
}

const initialState = { items: [], cartCounter: 0, numberOfGood: 1 };

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartState, dispatchCartState] = useReducer(reducer, initialState);
  const [itemExists, setItemExists] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error getting products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addItemsToCart = (id, category, image, title, price, description) => {
    const newCartItem = {
      id: id,
      category: category,
      image: image,
      title: title,
      price: price,
      description: description,
    };

    const existingItem = cartState.items.find((item) => item.id === id);
    if (existingItem) {
      setItemExists(true);
    } else {
      dispatchCartState({ type: ACTIONS.ADD_ITEM, payload: newCartItem });
      dispatchCartState({ type: ACTIONS.INCREEMENT_CART_COUNTER });
      console.log(cartState.items);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                addItemsToCart={addItemsToCart}
                cartCounter={cartState.cartCounter}
                isLoading={isLoading}
                itemExists={itemExists}
                setItemExists={setItemExists}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartState.items}
                cartCounter={cartState.cartCounter}
                dispatchCartState={dispatchCartState}
                numberOfGood={cartState.numberOfGood}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
