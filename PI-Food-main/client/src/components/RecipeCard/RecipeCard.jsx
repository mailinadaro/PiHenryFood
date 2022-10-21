import React from 'react';



export default function RecipeCard ({id, name, healthScore, image, diets}) {
    return (
        <div>
                <div>
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{healthScore}</p>
                    <img src={image} alt={name}/>
                    <p>{diets.map(diet => diet.name)}</p>

                </div>
        </div>
    )
}