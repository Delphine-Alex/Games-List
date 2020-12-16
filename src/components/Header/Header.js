import React from 'react';

import './Header.css';

const Header = ({title}) => {
  return (
    <div className="header">
      <h1>Welcome to {title}</h1>
    </div>
  );
}

export default Header;