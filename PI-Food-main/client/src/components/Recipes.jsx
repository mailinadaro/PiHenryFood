import React from 'react';
import {Link} from 'react-router-dom'




export default function Recipes (name, image, diets, healthScore) {
    return (
        <div>
            <h1>Recipes</h1>
            <div>

               {/*  <img src={image} alt="image"/> */}
                
                <Link to={`/recipe/${name}`}><h2>{name}</h2></Link>
                <p>{healthScore}</p>
                <p>{diets}</p>
            </div>
        </div>
    )
}