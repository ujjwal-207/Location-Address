// this components asks the user for the location permission
import { useState } from "react";
import { getDirections } from "../services/api"; // Import the function for fetching directions

const LocationAccess = ({ setUserLocation, setRouteData }) => {
  const [error, setError] = useState(null);

  const requestLocationAccess = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLocation);

          const destination = { lat: 49.420318, lng: 8.687872 }; // Example destination just so that we can route
          const routeData = await getDirections(userLocation, destination);
          setRouteData(routeData);
          setError(null);
        },
        (error) => {
          setError(
            "Location access denied. Please enable location services.",
            error
          );
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="location-access">
      <button onClick={requestLocationAccess} className="btn">
        Enable Location Access
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LocationAccess;
