import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import './NavBar.css'
//import '../../components/SearchBar/SearchBar.css'


const NavBar = () => {
  return (
    <div>
      <div className="navbar">

    <div className="navbar__left">
        <div className="navbar__home">
          <Link to="/home"> <h2>Food App</h2> </Link>
        </div>

        <div className="navbar__create">
          <Link to="/recipe"> <h2> Create Recipe</h2></Link>
        </div>
    </div>

        <div className="navbar__search">
          <SearchBar />
        </div>
        
      </div>
    </div>
  );
};


export default NavBar
