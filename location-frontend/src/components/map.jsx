// by seeing documentation of the google maps i think this will work

import { useEffect, useRef } from "react";

const Map = ({ center, onMapClick }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
    });

    map.addListener("click", (e) => {
      const coordinates = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      onMapClick(coordinates);
    });
  }, [center, onMapClick]);

  return <div ref={mapRef} className="h-96 w-full rounded-lg shadow-md" />;
};

export default Map;
