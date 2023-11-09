import React from "react";
import Header from "./Components/Header";
import CarouselComp from "./Components/CarouselCopm";
import useFetch from "./Hooks/useFetch";
import Product from "./Components/Product";

function App() {
  const products = useFetch();
  const productList = products?.response;
  return (
    <>
      <Header />
      <CarouselComp />
      <div className="absolute top-1/2 left-1/2 p-[100px] gap-5 -translate-x-1/2 z-10 flex justify-between w-full items-start flex-wrap">
        {productList?.map((product) => {
          return (
            <Product
              key={product.id}
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
    </>
  );
}

export default App;
