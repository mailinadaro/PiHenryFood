import React from "react";
import { filterRecipesByDiet, getDiets, resetFilters } from "../../redux/actions";
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
        dispatch(resetFilters());
    }

    return (
        <div>
            <select onChange={(e) => handlerFilterDiets(e)}>
                <option value="All">All</option>
                {diets?.map((diet) => (
                    <option key={diet.id} value={diet.name}>{diet.name}</option>
                ))}
            </select>
        </div>
    )
}
    