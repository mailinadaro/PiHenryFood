import React from "react";
import { filterRecipesByDiet, getDiets} from "../../redux/actions";
import { orderRecipesByName, orderRecipesByScore } from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState} from "react";


export default function FilterByDiets () {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);
   const [order, setOrder] = useState("")

  useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);

   function handlerFilterDiets (e) {
        dispatch(filterRecipesByDiet(e.target.value));
      //  console.log(e.target.value)
    }

   function handlerSortScore(e){ 
        e.preventDefault();
       dispatch(orderRecipesByScore(e.target.value));

      order? setOrder(false) : setOrder(e.target.value)
       console.log(e.target.value)
    }

    function handlerSortName(e){ 
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value)); 
       order? setOrder(false) : setOrder(e.target.value)
       console.log(e.target.value)
    } 

    return (
        <div>
            <select onChange={(e)=> handlerFilterDiets(e)} >
                <option>Select a Diet</option>
                {diets?.map((diet) => (
                    <option key={diet} value={diet}>{diet} </option>
                ))} 
            </select>

            <div>
                <button value="asc" onClick ={(e)=> handlerSortName(e)}>A-Z</button>
                <button value="desc"onClick = {(e)=> handlerSortName(e)}>Z-A</button>
         
            </div>
            <div>
                <select onChange={(e) => handlerSortScore(e)}>
                    <option value= " ">Score Order</option>
                    <option value="asc">More Score</option>
                    <option value="desc">Less Score</option>
                </select>
            </div>  
        </div>
    )
}
    
