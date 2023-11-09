import { StarIcon } from "@heroicons/react/24/outline";
import Currency from "react-currency-formatter";
import React from "react";

const Product = ({ title, img, description, rating, category, price }) => {
  rating = Math.round(rating);
  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push(i);
  }
  return (
    <div className="relative w-1/5 p-4 flex flex-col justify-center  bg-white shadow-lg">
      <h1 className="font-extrabold text-lg line-clamp-1">{title}</h1>
      <img className="h-[250px] my-4 object-contain" src={img} alt="product" />
      <p className="line-clamp-2">{description}</p>
      <div className="grid grid-cols-2 p-2">
        <div className="flex mb-4">
          {ratingArray.map((star) => (
            <StarIcon className="w-4 h-4 text-yellow-400 overflow-hidden" />
          ))}
        </div>
        <p className="text-right text-sm text-gray-500 mb-4">{category}</p>
        <Currency quantity={price} currency="EUR" />
        <div className=" bg-yellow-500 cursor-pointer">
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
