import React from 'react';

import '../assets/style/ItemCard.scss';

const ItemCard = ({ title, value }) => (
  <div className="item-card">
    <h4 className="item-card__title">{title}</h4>
    <p className="item-card__value">{value}</p>
  </div>
);

export default ItemCard;
