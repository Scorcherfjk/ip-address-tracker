import React from 'react';
import '../assets/style/Search.scss';

const Search = ({ onClick, onChange }) => (
  <div className="search">
    <input
      onChange={onChange}
      className="search__input"
      type="text"
      placeholder="Insert any IP Address or domain"
    />
    <button onClick={onClick} className="search__button" type="button">
      &#x276f;
    </button>
  </div>
);

export default Search;
