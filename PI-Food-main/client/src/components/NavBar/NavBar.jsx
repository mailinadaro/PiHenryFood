import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="navbar">
        <Link to="/home">Explore</Link>
        <Link to="/recipes/create">Create</Link> 
        </div>
    )
}


export default NavBar
