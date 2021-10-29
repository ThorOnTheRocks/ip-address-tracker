import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from "leaflet";
import IconMarker from '../../images/icon-location.svg'

// Styles
import './Map.styles.scss'

const Map = ({ defaultIp, queryIp }) => {
  const iconMarker = new L.icon({
    iconUrl: IconMarker,
    iconSize: [38, 50]
  });


  return (
    <>
      {defaultIp &&
        <>
          <MapContainer
            style={{ height: '80rem', zIndex: '-10', top: '5rem' }}
            center={[defaultIp.location.lat, defaultIp.location.lng]}
            zoom={17}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[defaultIp.location.lat, defaultIp.location.lng]}
              icon={iconMarker}
            >
            </Marker>
          </MapContainer>
        </>
      }
      {queryIp &&
        <>
          <MapContainer
            key={JSON.stringify([queryIp.location.lat, queryIp.location.lng])}
            style={{ height: '80rem', zIndex: '-10', top: '5rem' }}
            center={[queryIp.location.lat, queryIp.location.lng]}
            zoom={16}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[queryIp.location.lat, queryIp.location.lng]}
              icon={iconMarker}
            >
            </Marker>
          </MapContainer>
        </>

      }
    </>
  )
}

export default Map;