import React from 'react';
import '../assets/style/Header.scss';

const Header = ({ children }) => (
  <header className="header">
    <h1>IP Address Tracker</h1>
    {children}
  </header>
);

export default Header;
