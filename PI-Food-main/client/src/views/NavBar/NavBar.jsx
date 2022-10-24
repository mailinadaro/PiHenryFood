import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import './NavBar.css'
import logo from '../../assets/img/logo.png'



const NavBar = () => {
  return (
    <div>
      <div className="navbar">

    <div className="navbar__left">
          <Link to="/home" className="navbar__link"> <img src={logo} alt="logo" className="navbar__logo" /> </Link>
          <Link to="/recipe" className="navbar__link"> <p> Create Recipe</p></Link>
    </div>
        <div className="navbar__search">
          <SearchBar />
        </div>
        
      </div>
    </div>
  );
};


export default NavBar
