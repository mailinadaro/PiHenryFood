import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/recipes/create">Create Recipe</Link>
        </div>
    )
}


export default NavBar
