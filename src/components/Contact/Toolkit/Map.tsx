import React from 'react';
import GoogleMapReact from 'google-map-react';

interface ITRPMapPin {
  label: string;
}

const TRPMapPin = ({ label }: ITRPMapPin) => (
  <div
    style={{
      color: '#005987',
      background: '#f4d90c',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      border: '1px dashed black',
      transform: 'translate(-50%, -50%)',
      opacity: '0.5',
    }}
  >
    {label}
  </div>
);

const defaultProps = {
  center: {
    lat: 53.275826,
    lng: -6.402779,
  },
  zoom: 17,
};

const Map = () => (
  <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyDH3GtH4lir5th5EN1CZfiq6fqnQIXoBUg',
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <TRPMapPin label="TRP" />
    </GoogleMapReact>
  </div>
);

export default Map;
