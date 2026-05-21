import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[44.212168,-0.920666]} zoom={25} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[44.212168,-0.920666]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}


