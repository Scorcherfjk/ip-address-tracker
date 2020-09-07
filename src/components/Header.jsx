import React from 'react';
import '../assets/style/Header.scss';

const Header = ({ children }) => (
  <header className="header">
    {children}
  </header>
);

export default Header;
