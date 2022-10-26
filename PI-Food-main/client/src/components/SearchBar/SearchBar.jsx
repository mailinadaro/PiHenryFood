import React from "react";
import{useState} from "react";
import { useDispatch} from "react-redux";
import {getRecipesName} from "../../redux/actions/index.js";
import './SearchBar.css';


export default function SearchBar(){
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
   

    function handleChange(e) {
        setInput(e.target.value); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getRecipesName(input)); 
        setInput("");
    } 

    return (
        <div>
            <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
                <input className="searchBar__input" type="text" placeholder="Search a recipe" value={input} onChange={(e) => handleChange(e)} />
                <button className = 'searchBar__button' type="submit">Search</button>
            </form> 
        </div>
    ); 
}


