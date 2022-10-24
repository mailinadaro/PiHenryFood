import React from "react";
import { useDispatch } from "react-redux";
import {getAllRecipes } from "../../redux/actions/index.js";
import './ResetButton.css';

export default function ResetButton () {
    const dispatch = useDispatch();

    function clickHandler (e){ 
        e.preventDefault();
        dispatch(getAllRecipes());
    }

    return (
        <div>
        
            <button className="resetButton" onClick={clickHandler}>Reset</button>
        </div>
    )
}