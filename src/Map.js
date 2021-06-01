import React, { Component } from 'react';
import { MapContainer, Popup, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';



class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 49.237935, lng: -123.032145 },
      zoom: 30,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker 
            position={{lat: 49.23796979450699,  lng: -123.03246668630361}} 
            icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
            // onMouseOver={(e) => {
            //     e.target.openPopup();
            //   }}
            //   onMouseOut={(e) => {
            //     e.target.closePopup();
            //   }}
            // above is hovering thing but doesn't work
            > 
            <Popup>
                Kay Market
                </Popup>
        </Marker>
        <Marker
            position={{lat: 49.23782969313536,  lng: -123.03270272070098}}
            icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
            > 
            <Popup>
                Sari-Sari Filipino Convenience Store
                <img className="fit-picture"
                src="IMG.1676.jpg"
                alt="Dandelions in a bottle"></img>
            </Popup>
        </Marker>

      </MapContainer>
    );
  }
}



export default MapView;

