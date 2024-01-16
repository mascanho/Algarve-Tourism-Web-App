import { useEffect, useState } from "react";

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch city information using reverse geocoding.
            const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

            fetch(apiUrl)
              .then((response) => response.json())
              .then((data) => {
                const city = data.address.city;
                setUserLocation({ latitude, longitude, city });
              })
              .catch((error) => {
                setError("Error fetching city");
              });
          },
          (error) => {
            setError(`Error getting location: ${error.message}`);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []); // Empty dependency array ensures the effect runs once after the initial render.

  return { userLocation, error };
};

export default useUserLocation;
