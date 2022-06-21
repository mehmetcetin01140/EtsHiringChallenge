import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


function MyComponent(props) {
  const containerStyle = {
    width: '600px',
    height: '250px'
  };
  
  const center = {
    lat: props.lat,
    lng: props.lng
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCjkXt1jR6FBRcLt-5j4ap8QQu9au9X_FQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={30}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)