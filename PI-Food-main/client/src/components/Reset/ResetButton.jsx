import React from "react";
import { useDispatch } from "react-redux";
import {getAllRecipes } from "../../redux/actions/index.js";



export default function ResetButton () {
    const dispatch = useDispatch();

    function clickHandler (e){ 
        e.preventDefault();
        dispatch(getAllRecipes());
    }

    return (
        <div>
            <button onClick={(e)=>clickHandler(e)}>Reset</button>   
        </div>
    )
}