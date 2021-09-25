import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

type TMapSetting = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};
interface IMap {
  settings: TMapSetting;
  className?: string;
}

const Wrapper = styled.div`
  height: 50vh;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.all8};
  box-shadow: ${({ theme }) => theme.shadow.drop};
`;

function Map({ settings, className }: IMap) {
  return (
    <Wrapper className={className}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDH3GtH4lir5th5EN1CZfiq6fqnQIXoBUg',
        }}
        defaultCenter={settings.center}
        defaultZoom={settings.zoom}
      >
        <Pin label="TRP" lat={settings.center.lat} lng={settings.center.lng} />
      </GoogleMapReact>
    </Wrapper>
  );
}

export { Map };

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

function Pin({ label }: { label: string; lat?: number; lng?: number }) {
  return (
    <div
      style={{
        color: '#005987',
        background: '#f4d90c88',
        padding: '15px 10px',
        width: '40px',
        height: '40px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0 8px 8px 8px',
        border: '1px dashed black',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Img src={require('images/full_logo.svg')} />
      {label}
    </div>
  );
}
