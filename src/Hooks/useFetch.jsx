import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url || "https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return { products, loading };
};

export default useFetch;
