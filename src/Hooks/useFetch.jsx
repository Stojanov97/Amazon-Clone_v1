import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const catSelection = useSelector((state) => state.cat.selection);

  useEffect(() => {
    fetch(url || "https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [catSelection]);

  return { response, loading };
};

export default useFetch;
