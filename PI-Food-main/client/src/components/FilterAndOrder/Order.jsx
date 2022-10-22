import React from "react";
import {useState} from "react"
import { orderRecipesByName, orderRecipesByScore } from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";



export default function Order () { 
    const dispatch = useDispatch();
    const [order, setOrder] = useState("")
   const currentPage = useSelector((state)=> state.currentPage) 
   console.log(currentPage)


    function handlerSortScore(e){ 
        e.preventDefault();
       dispatch(orderRecipesByScore(e.target.value));

     /*   order? setOrder(false) : */ setOrder(e.target.value)
       console.log(e.target.value)
    }

    function handlerSortName(e){ 
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value)); 
/*         order? setOrder(false) : */ setOrder(e.target.value)
       console.log(e.target.value)
    }

    return (
        <div>
             <div>
                <select onChange={(e) => handlerSortName(e)}>
                    <option value= " ">Alpha Order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div> 
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


    

   