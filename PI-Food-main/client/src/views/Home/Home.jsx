import React  from "react";
import Paginado from "../../components/Paginado/Paginado";
import Recipes from "../../components/Recipes/Recipes";
import ResetButton from "../../components/Reset/ResetButton";
import NavBar from '../NavBar/NavBar';

export default function Home() {
    
    return (
        <div className="total__background">
            <div>
                <NavBar />
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

            
   



