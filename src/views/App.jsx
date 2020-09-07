import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Card from '../components/Card';
import Map from '../components/Map';
import Footer from '../components/Footer';

import '../assets/style/App.scss';

const App = () => {
  const [ip, setIp] = useState('');
  const searchAddress = () => {
    setIp('190.113.209.244');
  };

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div>
      <Header>
        <Search onClick={searchAddress} />
        <Card />
      </Header>
      <Map ip={ip} />
      <Footer />
    </div>
  );
};

export default App;
