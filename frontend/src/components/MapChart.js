import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapChart = ({ data }) => {
    return (
        <MapContainer center={[37.7749, -122.4194]} zoom={5} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            {data.labels.map((label, index) => (
                <Marker key={index} position={[37.7749, -122.4194]}>
                    <Popup>
                        {label}: {data.datasets[0].data[index]}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapChart;
