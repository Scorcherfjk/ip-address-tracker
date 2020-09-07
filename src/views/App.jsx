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
    lat: -12.0621,
    lon: -77.0362,
  });

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  const searchAddress = async () => {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();
    setGeo(data);
  };

  useEffect(() => {
    const getData = async () => {
      const resIp = await fetch('https://api.ipify.org/?format=json');
      const dataIp = await resIp.json();
      setIp(dataIp.ip);

      const resGeo = await fetch(`http://ip-api.com/json/${ip}`);
      const dataGeo = await resGeo.json();
      setGeo(dataGeo);
    };
    getData();
  }, []);

  return (
    <>
      <Header>
        <Search value={ip} onChange={handleChange} onClick={searchAddress} />
        <Card geo={geo} />
      </Header>
      <Map geo={geo} />
      <Footer />
    </>
  );
};

export default App;
