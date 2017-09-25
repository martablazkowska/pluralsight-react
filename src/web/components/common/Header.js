import React from 'react';
import {Link} from 'react-router';

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="games">Games</Link>
        {" | "}
        <Link to="about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header;