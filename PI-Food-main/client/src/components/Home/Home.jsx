import React  from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import ResetButton from "../Reset/ResetButton.jsx";
import Recipes from "../Recipes/Recipes.jsx";

export default function Home() {
    
    return (
        <div>
            <div>
                <SearchBar />
                <ResetButton/>
            </div>
            <div>
                <Recipes/>
            </div>
            <div>
                <Paginado />
            </div>
        </div>
    )
}

            
   



