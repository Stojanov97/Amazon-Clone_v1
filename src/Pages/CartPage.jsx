import React from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InCartProduct from "../Components/InCartProduct";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart)
  const navigate = useNavigate();
  return (
    <>
      <Header />
      {cart.length > 0 ? (
        <div className="m-8">
        <h1 className="font-extrabold text-2xl">Your products in your cart</h1>
        {cart?.map(product=><InCartProduct key={product.id} {...product} />)}
        </div>
      ) : (
        <div className="m-8">
          <img
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt="Test"
            className="w-1/3"
          />
          <br />
          <h1 className="text-2xl font-extrabold">
            Your Amazon Cart is empty
          </h1>
          <div className="text-2xl font-bold bg-yellow-500 w-[400px] p-2 text-white text-center shadow-2xl select-none cursor-pointer" onClick={()=>navigate("/")}>
            Browse our categories and discover new products
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
