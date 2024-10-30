// in this search components it uses the google's places auto complete api for the location search
import { useRef, useEffect } from "react";

const LocationSearch = ({ onPlaceSelect }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API not loaded");
      return;
    }
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onPlaceSelect({
        address: place.formatted_address,
        coordinates: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      });
    });
  }, [onPlaceSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      className="input w-full mb-4"
      placeholder="Search location..."
    />
  );
};

export default LocationSearch;
