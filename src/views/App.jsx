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
    city: '',
    region: '',
    timezone: '',
    org: '',
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  const searchAddress = async () => {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await res.json();
      setGeo(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const resIp = await fetch('https://api.ipify.org/?format=json');
        const dataIp = await resIp.json();
        setIp(dataIp.ip);

        const resGeo = await fetch(`https://ipapi.co/${ip}/json/`);
        const dataGeo = await resGeo.json();
        setGeo(dataGeo);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header>
        <Search onChange={handleChange} onClick={searchAddress} />
        <Card geo={geo} />
      </Header>
      <Map geo={geo} />
      <Footer />
    </>
  );
};

export default App;
