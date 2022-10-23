import React from "react";
import {Link} from "react-router-dom";
import './Landing.css';


export default function Landing() {
    return (
        <div>
            <div className="landing__container">
            <h1 className="landing__title">Welcome to Food App</h1>
            <h2 className="landing__subtitle">Find your favorite recipes</h2>
            <p className="landing__text">This is a web application that allows you to search for recipes by name, diet, and other filters. You can also create your own recipes.</p>
            <Link to="/home"><button className="landing__button">Start</button></Link>
            </div>
        </div>
    )
}

