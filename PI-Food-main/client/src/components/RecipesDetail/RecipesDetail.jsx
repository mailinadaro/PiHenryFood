import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getRecipe} from '../../redux/actions/index.js'




export default function RecipesDetail(props){

    const dispatch = useDispatch()
    const id = props.match.params.id
    const recipe = useSelector((state) => state.recipe) 
   console.log(recipe)
    
    
    useEffect(() => {
        dispatch(getRecipe(id))
    }, [ dispatch, id ])

    return (
        <div>
    
            <div>
                <h1>{recipe.name}</h1>
                <p>{recipe.summary}</p>
                <p>{recipe.healthScore}</p>
                {recipe.image? <img src={recipe.image} alt={recipe.name}/> : null}
             {/*    <p>{recipe.steps.map((step)=> step)}</p>   */}
                {/* <p>{recipe.diets.map(diet => diet.name)}</p> */}
            </div>
        </div>
    )
}
