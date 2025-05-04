"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 13);
    }
  }, [coords, map]);
  return null;
};

export default function Maps() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCoords, setSelectedCoords] = useState([48.8566, 2.3522]);

  const timeoutRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (value.length > 2) {
      timeoutRef.current = setTimeout(async () => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              value
            )}`
          );
          const data = await res.json();
          setSuggestions(data);
        } catch (err) {
          console.error("Error fetching location suggestions:", err);
        }
      }, 400);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (place) => {
    const lat = parseFloat(place.lat);
    const lon = parseFloat(place.lon);
    setSelectedCoords([lat, lon]);
    setSearchTerm(place.display_name);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full h-[70vh] mx-auto md:px-12 px-4 md:py-8 py-4 ">
      <div className="absolute md:top-16 md:left-24 top-6 left-10 z-[1000] bg-[#d2f1f7]  rounded shadow-md w-72">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded-lg outline-none"
        />
        {suggestions.length > 0 && (
          <ul className="bg-white border border-gray-300 rounded shadow-md max-h-48 overflow-y-auto mt-1">
            {suggestions.map((place, i) => (
              <li
                key={i}
                onClick={() => handleSelectSuggestion(place)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                {place.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Map Display */}
      <MapContainer
        center={selectedCoords}
        zoom={6}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
        style={{ backgroundColor: "#d2f1f7" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={selectedCoords}>
          <Popup>{searchTerm || "Selected Location"}</Popup>
        </Marker>
        <ChangeMapView coords={selectedCoords} />
      </MapContainer>
    </div>
  );
}
