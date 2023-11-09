import React, { useEffect, useState } from "react";
import data from "../Data/bg.json";

const useImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data.images);
  }, []);

  return { images };
};

export default useImages;
