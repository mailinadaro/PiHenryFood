import React from "react";
import{useState} from "react";
import { useDispatch} from "react-redux";
import {getRecipesName} from "../../redux/actions/index.js";


export default function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    ////// MANEJA EL ESTADO DEL INPUT //////
    function handleChange(e) {
        setInput(e.target.value); // input es el valor que se ingresa en el input. el estado de input es el valor que se ingresa en el input
    }

    ////// MANEJA EL SUBMIT DEL FORMULARIO //////
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getRecipesName(input)); //uso la action que trae las recetas por nombre
        setInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." value={input} onChange={handleChange} />
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

//// FUERA DEL COMPONENTE SEARCHBAR ///////
// 6.1. En este punto comienza a apilarse en el stack de ejecucion las funciones que se ejecutan en el backend
// 6.2. Las funciones que conforman el stack de ejecucion son las siguientes:
//  Luego de que el handlerSubmit ejecuta la funcion dispatch las siguientes funciones:
//  1. getRecipesName en  las actions
//  2. axios en las actions 
//  3. getRecipesName en el reducer
//  4. getRecipesName en el controller
//  5. getRecipesName en el model
//  6. getRecipesName en el routes
//  7. getRecipesName en el server
//  8. getRecipesName en el index
//  9. getRecipesName  en el app
// 10. getRecipesName en el index
// 11. getRecipesName en el server
// 12. getRecipesName en el routes
// 13. getRecipesName en el model
// 14. getRecipesName en el controller
// 15. getRecipesName en el reducer
// 16. getRecipesName en las actions
// 17. getRecipesName en el componente SearchBar
// 18. getRecipesName en el componente Home
// 19. getRecipesName en el componente App
// 20. getRecipesName en el index
// 21. getRecipesName en el server
// 22. getRecipesName en el routes
// 23. getRecipesName en el model
// 24. getRecipesName en el controller
// 25. getRecipesName en el reducer
// 26. getRecipesName en las actions
// 27. getRecipesName en el componente SearchBar
// 28. getRecipesName en el componente Home
// 29. getRecipesName en el componente App

// 6.3. Luego de que el stack de ejecucion se desapila, se ejecuta la funcion axios que trae las recetas por nombre
// 6.4. Luego de que se ejecuta la funcion axios que trae las recetas por nombre, se ejecuta la funcion getRecipesName que trae las recetas por nombre
// 6.5. Luego de que se ejecuta la funcion getRecipesName que trae las recetas por nombre, se ejecuta la funcion dispatch que trae las recetas por nombre
// 6.6. Luego de que se ejecuta la funcion dispatch que trae las recetas por nombre, se ejecuta la funcion handleSubmit que trae las recetas por nombre
// 6.7. Luego de que se ejecuta la funcion handleSubmit que trae las recetas por nombre, se ejecuta la funcion handleChange que trae las recetas por nombre
// 6.8. Luego de que se ejecuta la funcion handleChange que trae las recetas por nombre, se ejecuta la funcion SearchBar que trae las recetas por nombre
// 6.9. Luego de que se ejecuta la funcion SearchBar que trae las recetas por nombre, se ejecuta la funcion Home que trae las recetas por nombre
// 6.10. Luego de que se ejecuta la funcion Home que trae las recetas por nombre, se ejecuta la funcion App que trae las recetas por nombre
// 6.11. Luego de que se ejecuta la funcion App que trae las recetas por nombre, se ejecuta la funcion index que trae las recetas por nombre
// 6.12. Luego de que se ejecuta la funcion index que trae las recetas por nombre, se ejecuta la funcion server que trae las recetas por nombre
// 6.13. Luego de que se ejecuta la funcion server que trae las recetas por nombre, se ejecuta la funcion routes que trae las recetas por nombre


// 6.2.1. El middleware thunk ejecuta la funcion getRecipesName
// 6.2.2. La funcion getRecipesName ejecuta la funcion axios que trae las recetas por nombre
// 6.2.3. La funcion axios trae las recetas por nombre y las guarda en la variable recipes
// 6.2.4. La funcion axios ejecuta la funcion dispatch que ejecuta la funcion getRecipesNameSuccess
// 6.2.5. La funcion getRecipesName ejecuta la funcion getRecipesNameSuccess que guarda las recetas en el estado de recipes

// y el pedido de recetas por nombre se envia al backend por medio de redux thunk que es un middleware que permite ejecutar funciones asincronas
// 6.3. En el backend se ejecuta la funcion getRecipesName que recibe como parametro el valor del estado de input

// esa funcion 
// 6.2.2.  (controller) // el controller se comunica con el modelo y le pasa el valor del estado de input como parametro y a su vez le pasa la funcion que se ejecutara cuando el modelo responda con los datos
// 6.2.3.  (model) // el modelo se comunica con la base de datos y le pasa el valor del estado de input como parametro y a su vez le pasa la funcion que se ejecutara cuando la base de datos responda con los datos

// 6.2.4.  (db) // la base de datos ejecuta la query y le pasa los datos a la funcion que esta en el modelo
// Una vez que encuentra llega a la base de datos, el stack de ejecucion se desapila y se ejecutan las funciones que estan en el stack de ejecucion del frontend

// 6.2.5. (model) // el modelo ejecuta la funcion y le pasa los datos a la funcion que esta en el controller
// 6.2.6. (controller) // el controller ejecuta la funcion y le pasa los datos a la funcion que esta en la action
// 6.2.7. (action) // la action ejecuta la funcion y le pasa los datos a la funcion que esta en el reducer
// 6.2.7. (reducer) // el reducer ejecuta la funcion y le pasa los datos a la funcion que esta en el componente




// 11.1. Una vez que se ejecuta la ultima funcion, el stack de ejecucion comienza a bajar por la pila de ejecucion y se ejecutan las funciones que estan debajo de la funcion find en el modelo
// 11.2. ese stack de ejecucion se ejecuta hasta que se ejecuta la ultima funcion que es la que devuelve la respuesta al cliente
// 11.3. ese stack esta conformado por las siguientes funciones:
// 11.3.1. la funcion que devuelve la respuesta al cliente
// 11.3.2. la funcion que ejecuta el find en el modelo


////// FLUJO EN EL REDUCER ///////
// 11. Se ejecuta la funcion getRecipes en el reducer que trae las recetas por nombre del backend
// 12. Le llega al reducer la action con el payload que es un array de recetas que coinciden con el nombre ingresado en el input 
//13. El reducer cambia el estado inicial de recipes con el payload 
// 14. El estado de recipes cambia y se actualiza el componente Recipes y se renderiza el componente RecipeCard con las recetas que coinciden con el nombre ingresado en el input

