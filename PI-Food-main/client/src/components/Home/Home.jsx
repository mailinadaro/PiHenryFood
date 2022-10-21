import React  from "react";
import Recipes from '../Recipes/Recipes.jsx'
import SearchBar from "../SearchBar/SearchBar.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import Order from "../FilterAndOrder/Order.jsx";
import FilterByDiets from "../FilterAndOrder/FilterByDiets.jsx";
import ResetButton from "../Reset/ResetButton.jsx";


export default function Home() {
    return (
        <div>
            <div>
                <SearchBar />
                <FilterByDiets />
                <Order />
                <ResetButton/>
            </div>
            <div>
                <Recipes />
            </div>
            <div>
                <Paginado />
            </div>
        </div>
    )
}

            
   



