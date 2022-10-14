import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getRecipe} from '../actions/index.js'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


export default function RecipesDetail() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const recipe = useSelector((state) => state.recipe)
    

    useEffect(() => {
        dispatch(getRecipe(id))
    }, [dispatch, id])

    return (
        <div>
            {recipe.length > 0 ? (
                <div>
                    <h1>{recipe[0].name}</h1>
                    <h2>Summary</h2>
                    <p>{recipe[0].summary}</p>
                    <h2>Score</h2>
                    <p>{recipe[0].healthScore}</p>
                    <h2>Steps</h2>
                    <p>{recipe[0].steps}</p>
                    <h2>Diets</h2>
                    <p>{recipe[0].diets.map((diet) => diet.name).join(', ')}</p>
                </div>
           ) : (
            <h1>Loading...</h1>
            )}

            <Link to='/home'> Back to Home </Link>

        </div>
    )
}