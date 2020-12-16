import React from 'react';

import './Header.css';

const Header = ({title}) => {
  return (
    <nav className="header">
      <h1>Welcome to {title}</h1>
    </nav>
  );
}

export default Header;