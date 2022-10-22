import React from "react";
import{useState} from "react";
import { useDispatch} from "react-redux";
import {getRecipesName} from "../../redux/actions/index.js";


export default function SearchBar(){
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    console.log(input)

  
    ////// MANEJA EL ESTADO DEL INPUT //////
    function handleChange(e) {
        setInput(e.target.value); 
        console.log(e.target.value)
    }

    ////// MANEJA EL SUBMIT DEL FORMULARIO //////
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getRecipesName(input)); 
        setInput("");
    } 

    return (
        <div>
  
        <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder="Search..." value={input} onChange={(e)=>handleChange(e)} />
                <button type="submit">Search</button>
            </form> 
        </div>
    ); 
}


//////////FLUJO EN EL COMPONENTE SEARCHBAR/////////////////////
// 1. El usuario ingresa un valor en el input
// 2. El valor ingresado se guarda en el estado de input 
// 2.1. Se ejecuta la funcion handleChange que captura el valor ingresado en el input y lo guarda en el estado de input
// 3. El usuario hace click en el boton de submit
// 4. Se ejecuta la funcion handleSubmit
// 5. Se ejecuta la funcion dispatch que trae las recetas por nombre
// 6. Se ejecuta la funcion getRecipesName que trae las recetas por nombre pasado como parametro el valor del estado de input 
// 7. Se ejecuta la funcion axios que trae las recetas por nombre

//