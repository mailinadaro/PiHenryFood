import React from 'react';
import {Link} from 'react-router-dom'




export default function Recipes (name, image, diets, healthScore) {
    return (
        <div>
            <Link to="/recipes/:id">
                <h1>{name}</h1>
            </Link>
              {/*   <img src={image} alt="image" /> */}
                <h3>{diets}</h3>
                <h3>{healthScore}</h3>
        </div>
    )
}