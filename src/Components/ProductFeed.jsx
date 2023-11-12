import React from "react";
import Product from "../Components/Product";
import useFetch from "../Hooks/useFetch";
import { useSelector } from "react-redux";

const ProductFeed = () => {
  const catSelection = useSelector((state) => state.cat.selection);
  let url = undefined;
  if (!catSelection) url = "https://fakestoreapi.com/products";
  else if (catSelection !== "all")
    url = `https://fakestoreapi.com/products/category/${catSelection}`;
  else if (catSelection === "all") url = "https://fakestoreapi.com/products";
  const products = useFetch(url);
  const productList = products?.response;
  return (
    <div className="lg:absolute relative lg:top-1/2 left-1/2 p-[100px] flex-wrap gap-5 -translate-x-1/2 z-10 flex justify-between w-full items-start">
      {productList?.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.image}
            description={product.description}
            rating={product.rating.rate}
            category={product.category}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductFeed;
