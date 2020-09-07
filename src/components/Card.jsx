/* eslint-disable react/prop-types */
import React from 'react';

import ItemCard from './ItemCard';

import '../assets/style/Card.scss';

const Card = ({ geo }) => (
  <div className="card">
    <ItemCard title="ip address" value={geo.query} />
    <ItemCard title="location" value={geo.regionName ? `${geo.regionName}, ${geo.country}` : ''} />
    <ItemCard title="timezone" value={geo.timezone} />
    <ItemCard title="isp" value={geo.isp} />
  </div>
);

export default Card;
