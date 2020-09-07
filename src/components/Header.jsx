import React from 'react';
import '../assets/style/Header.scss';

const Header = ({ children }) => (
  <header className="header">
    <h4>IP Address Tracker</h4>
    {children}
  </header>
);

export default Header;
