import React from "react";
import { orderRecipesByName, orderRecipesByScore, resetFilters } from "../../redux/actions";
import { useDispatch} from "react-redux";



export default function Order () { 
    const dispatch = useDispatch();

    function handlerSort(e){
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value)); 
        dispatch(orderRecipesByScore(e.target.value));
        dispatch(resetFilters());
    }

    return (
        <div>
            <div>
                <select onChange={(e) => handlerSort(e)}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => handlerSort(e)}>
                    <option value="All">All</option>
                    <option value="More Score">More Score</option>
                    <option value="Less Score">Less Score</option>
                </select>
            </div> 
        </div>
    )
}


    

   