import React from "react";
import {useState} from "react"
import { orderRecipesByName, orderRecipesByScore } from "../../redux/actions";
import { useDispatch} from "react-redux";



export default function Order () { 
    const dispatch = useDispatch();
    
    const [order, setOrder] = useState('')


    function handlerSortScore(e){ 
        e.preventDefault();
       dispatch(orderRecipesByScore(e.target.value));
       setOrder(e.target.value)
       console.log(e.target.value)
    }

    function handlerSortName(e){ 
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value)); 
       setOrder(e.target.value)
       console.log(e.target.value)
    }

    return (
        <div>
            <div>
                <select onChange={(e) => handlerSortName(e)}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => handlerSortScore(e)}>
                    <option value="asc">More Score</option>
                    <option value="desc">Less Score</option>
                </select>
            </div> 
        </div>
    )
}


    

   