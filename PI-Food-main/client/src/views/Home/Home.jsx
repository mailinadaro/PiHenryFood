import React  from "react";
import Paginado from "../../components/Paginado/Paginado";
import Recipes from "../../components/Recipes/Recipes";
import ResetButton from "../../components/Reset/ResetButton";
//import "./Home.css";

export default function Home() {
    
    return (
        <div className="total__background">
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

            
   



