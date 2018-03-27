import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">
        <img
          src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg"
          alt="Movie DB Logo"
        />
      </Link>
    </div>
    <Search />
  </header>
);

export default Header;
