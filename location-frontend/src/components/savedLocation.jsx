import { useEffect, useState } from "react";
import { getUserLocations, deleteLocation } from "../services/api";

const SavedLocations = ({ userId, onDelete }) => {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await getUserLocations(userId);
        setLocations(data);
      } catch (err) {
        setError("Failed to load locations. Please try again later.");
        console.error(err);
      }
    };
    fetchLocations();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await deleteLocation(id);
      onDelete();
    } catch (err) {
      console.error("Error deleting location:", err);
    }
  };

  return (
    <div className="saved-locations">
      <h2 className="text-lg font-semibold mb-2">Saved Locations</h2>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        locations.map((loc) => (
          <div
            key={loc._id}
            className="location-item flex justify-between items-center mb-2"
          >
            <span>{loc.address}</span>
            <button
              onClick={() => handleDelete(loc._id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedLocations;
