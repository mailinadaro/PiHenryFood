import React from "react";
import Recipes from '../Recipes/Recipes.jsx'
import SearchBar from "../SearchBar/SearchBar.jsx";



export default function Home() {
    return (
        <div> 
            <SearchBar/> 
            <Recipes />
        </div>

    )
}
