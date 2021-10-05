import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react/cjs/react.development';


// Styles
import './Map.styles.scss'

const Map = ({ defaultIp, queryIp }) => {

  return (
    <>
      {defaultIp &&
        <>
          <MapContainer style={{ height: '80rem', zIndex: '-10' }} center={[defaultIp.location.lat, defaultIp.location.lng]} zoom={17} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[defaultIp.location.lat, defaultIp.location.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

        </>
      }
      {
        queryIp &&
        <>
          <MapContainer
            key={JSON.stringify([queryIp.location.lat, queryIp.location.lng])}
            style={{ height: '80rem', zIndex: '-10' }}
            center={[queryIp.location.lat, queryIp.location.lng]}
            zoom={16}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[queryIp.location.lat, queryIp.location.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </>
      }
    </>


  )
}

export default Map;