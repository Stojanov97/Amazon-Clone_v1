import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url || "https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return { response, loading };
};

export default useFetch;
