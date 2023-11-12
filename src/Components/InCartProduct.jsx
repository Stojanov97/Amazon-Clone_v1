import React from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/24/solid";

const InCartProduct = ({
  id,
  title,
  img,
  description,
  rating,
  category,
  price,
}) => {
  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push(i);
  }
  return (
    <div className="flex m-6 shadow-xl p-6 w-[1400px]">
      <div className="w-1/5">
        <h1 className="font-bold text-xl mb-4">{title}</h1>
        <img className="h-[250px] object-contain" src={img} alt={title} />
      </div>
      <div className="m-8 w-4/5 flex flex-col justify-between">
        <div>
          <p>{description}</p>
          <p className="flex">
            {ratingArray.map((star) => (
              <StarIcon className="2-4 h-4 text-yellow-400" />
            ))}
          </p>
        </div>
        <div className="flex items-end flex-col">
          <p className="text-gray-500 mb-4">{category}</p>
          <Currency quantity={price} currency="EUR" />
        </div>
      </div>
    </div>
  );
};

export default InCartProduct;
