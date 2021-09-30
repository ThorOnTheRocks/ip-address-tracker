import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


// Styles
import './Map.styles.scss'

const Map = () => {


  return (
    <>
      <MapContainer style={{ height: '80rem', zIndex: '-10' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map;