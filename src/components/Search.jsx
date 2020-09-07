import React from 'react';
import '../assets/style/Search.scss';

const Search = ({ onClick, onChange }) => (
  <div className="search">
    <input onChange={onChange} className="search__input" type="text" />
    <button onClick={onClick} className="search__button" type="button">
      &#x276f;
    </button>
  </div>
);

export default Search;
