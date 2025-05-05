import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;


const customIcon = new L.Icon({
  iconUrl: "/marker-xxl.png", 
  iconSize: [50, 50], // width, height
  iconAnchor: [25, 70], 
  popupAnchor: [0, -70], 
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png", 
  shadowSize: [41, 41], 
  shadowAnchor: [12, 41], 
});

const TravelMap = () => {
  const markers = [
    { position: [51.1784, -115.5708], name: "Banff, Canada", link: "https://www.tripadvisor.com/Tourism-g154911-Banff_Banff_National_Park_Alberta-Vacations.html" },
    { position: [64.1466, -21.9426], name: "Reykjavík, Iceland", link: "https://www.tripadvisor.com/Tourism-g189970-Reykjavik_Capital_Region-Vacations.html" },
    { position: [35.0116, 135.7681], name: "Kyoto, Japan", link: "https://www.tripadvisor.com/Tourism-g298564-Kyoto_Kyoto_Prefecture_Kinki-Vacations.html" },
    { position: [37.9838, 23.7275], name: "Athens, Greece", link: "https://www.tripadvisor.com/Tourism-g189400-Athens_Attica-Vacations.html" },
    { position: [38.7223, -9.1393], name: "Lisbon, Portugal", link: "https://www.tripadvisor.com/Tourism-g189158-Lisbon_Lisbon_District_Central_Portugal-Vacations.html" },
    { position: [21.0285, 105.8542], name: "Hanoi, Vietnam", link: "https://www.tripadvisor.com/Tourism-g293924-Hanoi-Vacations.html" },
    { position: [40.7128, -74.0060], name: "New York City, USA", link: "https://www.tripadvisor.com/Tourism-g60763-New_York_City_New_York-Vacations.html" },
    { position: [48.8566, 2.3522], name: "Paris, France", link: "https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html" },
    { position: [34.0522, -118.2437], name: "Los Angeles, USA", link: "https://www.tripadvisor.com/Tourism-g32655-Los_Angeles_California-Vacations.html" },
    { position: [39.9042, 116.4074], name: "Beijing, China", link: "https://www.tripadvisor.com/Tourism-g294212-Beijing-Vacations.html" },
    { position: [55.7558, 37.6173], name: "Moscow, Russia", link: "https://www.tripadvisor.com/Tourism-g298484-Moscow_Central_Russia-Vacations.html" },
  ];

  return (
    <div className="map-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "500px", width: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={customIcon}
          >
            <Popup>
              <a href={marker.link} target="_blank" rel="noopener noreferrer">
                {marker.name}
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TravelMap;
