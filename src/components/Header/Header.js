import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './Header.css';

const Header = () => (
  <div>
    <div className="logo">
      <Link aria-label="Movie DB" to="/">
        <img
          src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
          alt="Movie DB Logo"
        />
      </Link>
    </div>
    <div className="navigation">
      <ul>
        <NavLink exact to="/" className="navlink" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/movies" className="navlink" activeClassName="selected">
          Movies
        </NavLink>
        <NavLink to="/shows" className="navlink" activeClassName="selected">
          Shows
        </NavLink>
      </ul>
    </div>
    <div className="search">
      <SearchBar />
    </div>
  </div>
);

export default Header;
