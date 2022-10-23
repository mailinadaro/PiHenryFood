import React  from "react";
import Paginado from "../../components/Paginado/Paginado";
import Recipes from "../../components/Recipes/Recipes";
import ResetButton from "../../components/Reset/ResetButton";

export default function Home() {
    
    return (
        <div>
            <div>
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

            
   



