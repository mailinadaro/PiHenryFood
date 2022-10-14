import React from 'react'
import {Link} from 'react-router-dom'



export default function Paginado (setRecipesPerPage, allRecipes, paginado, order) {
   
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allRecipes / setRecipesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
        {
             pageNumbers?.map(number => (
                <li key={number}>
                    <Link to = {`/home/${number}`} onClick={() => paginado(number)}>
                        {number}
                    </Link>
                </li>
            ))
        }

            </nav>

        </div>
    )
}