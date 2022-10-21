import React from "react";
import { filterRecipesByDiet, getDiets} from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";


export default function FilterByDiets () {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);

  useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);

    function handlerFilterDiets (e) {
        dispatch(filterRecipesByDiet(e.target.value));
      //  console.log(e.target.value)
    }

    return (
        <div>
            <select onChange={(e)=> handlerFilterDiets(e)} >
                {diets?.map((diet) => (
                    <option key={diet.id} value={diet}>{diet} </option>
                ))} 
              
            </select>
        </div>
    )
}
    