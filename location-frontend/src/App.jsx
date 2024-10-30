import { useState } from "react";
import Map from "./components/map";
import LocationSearch from "./components/locationSearch";
import SavedLocations from "./components/savedLocation";
import { saveLocation } from "./services/api";

const App = () => {
  const [center, setCenter] = useState({ lat: 27.7172, lng: 85.324 }); // Default to Kathmandu my hometown
  const [userId] = useState("12345"); // Replace with actual user ID

  const handlePlaceSelect = async (place) => {
    setCenter(place.coordinates);
    await saveLocation({ userId, ...place });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 align-middle">
        Location/Address Flow
      </h1>
      <LocationSearch onPlaceSelect={handlePlaceSelect} />
      <Map center={center} onMapClick={handlePlaceSelect} />
      <SavedLocations userId={userId} onDelete={() => setCenter(center)} />
    </div>
  );
};

export default App;
