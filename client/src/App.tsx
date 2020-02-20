import React from 'react';
import './App.css';
import Sun from "./Sun"
import useGeoLocation from './hooks/useGeoLocation';
const App = () => {
  const geoLocation = useGeoLocation();


  return (geoLocation !== undefined ? <Sun latitude={geoLocation.latitude} longitude={geoLocation.longitude} />
    : <div className="loading">Getting location..</div>)

}

export default App;
