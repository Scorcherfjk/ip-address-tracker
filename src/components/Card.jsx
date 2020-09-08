/* eslint-disable react/prop-types */
import React from 'react';

import ItemCard from './ItemCard';

import '../assets/style/Card.scss';

const Card = ({ geo }) => (
  <div className="card">
    <ItemCard title="ip address" value={geo.ip} />
    <ItemCard title="location" value={geo.region ? `${geo.region}, ${geo.city}` : ''} />
    <ItemCard title="timezone" value={geo.timezone} />
    <ItemCard title="isp" value={geo.org} />
  </div>
);

export default Card;
