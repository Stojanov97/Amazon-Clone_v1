import React, { useEffect, useState } from "react";

function MyLocation() {
  const [location, setLocation] = useState({});
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(
          `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
          .then((response) => response.json())
          .then((response) => setLocation(response.address));
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
  return { location };
}

export default MyLocation;
