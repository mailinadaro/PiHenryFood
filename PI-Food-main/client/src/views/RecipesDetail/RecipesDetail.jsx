import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getRecipe} from '../../redux/actions/index.js'
import { cleanDetail } from '../../redux/actions/index.js'
import './RecipeDetail.css'
import Loading from '../../components/Loading/Loading.jsx'
import {Link} from 'react-router-dom'

export default function RecipesDetail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const recipe = useSelector((state) => state.recipe);
 

  useEffect(() => {
    dispatch(getRecipe(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
         {!recipe.name && <Loading />}

      <div className="recipeDetail">
   
        <div className="recipeDetail__img">
          {recipe.image ? (
            <img className="img" src={recipe.image} alt={recipe.name} />
          ) : null}
        </div>

        <div className="recipeDetail__info">
          <h1 className="title">{recipe.name}</h1>

          <div className="recipeDetail__info__row">
            <div className='score__circle'><p className="score">{recipe.healthScore}</p></div>
            {recipe.diets ? ( recipe.diets.map((diet) => <p className='diet'>{diet.name}</p>)) : null}
          </div>

          {recipe.summary ? (recipe.summary.replace(/<[^>]+>/g, '')) : null}
          <p className="steps">{recipe.steps}</p>
          <Link to='/home'><button className="backButton">Back</button></Link>
        </div>

      </div>
      

    </div>
  );
}
