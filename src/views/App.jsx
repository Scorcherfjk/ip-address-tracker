import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Card from '../components/Card';
import Map from '../components/Map';
import Footer from '../components/Footer';

import '../assets/style/App.scss';

const App = () => {
  const [ip, setIp] = useState('');
  const [geo, setGeo] = useState({
    country: '',
    regionName: '',
    timezone: '',
    isp: '',
    lat: 0,
    lon: 0,
  });

  const handleChange = () => {};

  const searchAddress = () => {
    fetch(`http://ip-api.com/json/${ip}`)
      .then((res) => res.json())
      .then((data) => setGeo(data));
  };

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div>
      <Header>
        <Search onChange={handleChange} onClick={searchAddress} />
        <Card geo={geo} />
      </Header>
      <Map lat={geo.lat} lon={geo.lon} />
      <Footer />
    </div>
  );
};

export default App;
