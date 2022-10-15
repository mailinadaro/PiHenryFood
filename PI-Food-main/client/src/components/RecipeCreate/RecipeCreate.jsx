import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import {createRecipes} from '../../redux/actions';
import {getDiets} from '../../redux/actions/index.js';

import {Link} from 'react-router-dom';

 ////////// FUNCION DE VALIDACION DE CAMPOS //////////
    //Para realizar la validacion, crearemos un objeto con los campos que queremos validar y sus respectivos valores.
    // y luego le asignaremos un valor luego de comprobar que el valor cumple con la condicion.
export function validate (input){
        let errors = {};
        switch (true) {
            case !input.name:
                errors.name = 'Name is required';
                break;
            case !input.summary:
                errors.summary = 'Summary is required';
                break;
            case !input.healthScore:
                errors.healthScore = 'Health Score is required';
                break;
            case input.healthScore < 0 || input.healthScore > 100:
                errors.healthScore = 'Health Score must be between 0 and 100';
                break;
            case input.healthScore && !/^[0-9\b]+$/.test(input.healthScore):
                errors.healthScore = 'Health Score must be a number';
                break;
            case !input.steps:
                errors.steps = 'Steps is required';
                break;
            case !input.diets:
                errors.diets = 'Diets is required';
                break;
            default:
                break;
        }
        return errors;
    }
    


export default function RecipeCreate() {
    /////  ACTIONS QUE IMPORTAMOS DE REDUX /////
    const dispatch = useDispatch();
    ////////// ESTADO INICIAL QUE USAREMOS PARA CREAR LA RECETA IMPORTADO DE REDUX //////////
    const diets = useSelector((state) => state.diets);
    /////////// HISTORY QUE USAREMOS PARA REDIRIGIR A LA PAGINA DE HOME ///////////
    const history = useHistory();

    //////// ESTADOS LOCALES ////////
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: [],
    });
    const [errors, setErrors] = useState({});


    ////////// MONTADO DE COMPONENTE CUANDO SE RENDERIZA //////////
    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);
    
   
    ///// HANDLE PARA MANEJAR LOS CAMBIOS EN LOS INPUTS /////
     //FUNCION QUE SE EJECUTA CUANDO SE ESCRIBE EN EL INPUT
    // al mismo tiempo que se setea el estado del formulario, se ejecuta la funcion validate
    // la cual devuelve un objeto con los errores, y se setea el estado de los errores
    function handleChange(e) {
        setInput({...input,[e.target.name]: e.target.value,}); //
        setErrors(validate({...input,[e.target.name]: e.target.value,})); ////  el value se pasa con esta sintaxis porque es un objeto
        //aca valido el valor que se esta captando de un input determinado y  se lo seteo al estado del error 
    }

    ///// HANDLE PARA MANEJAR LOS CAMBIOS EN LOS CHECKBOX /////
    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value],
        });
    }
/* 
    function handleCheck (e) {
        if (input.diets.includes(e.target.value)) {
            setInput({
                ...input,
                diets: input.diets.filter(diet => diet !== e.target.value)
            })
        } else {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    } */

    ///////// HANDLE PARA ELIMINAR DIETAS DEL ARRAY /////////
    function handleDelete (e) {
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== e.target.value)
        })
    }

    ///////// HANDLE PARA SUMITEAR EL FORMULARIO /////////
    function handleSubmit(e) {
        e.preventDefault(); // evita recargado de pagina
        dispatch(createRecipes(input));
        alert('Recipe created successfully');
        setInput({
            name: '',
            summary: '',
            healthScore: '',
            steps: '',
            diets: [],
        });
        history.push('/home');
    }

    ////////// ZONA DE RENDERIZADO //////////
    return (
        <div>
            <Link to="/home"><h1>Home</h1></Link>
            <h1>Create Recipe</h1>
         
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Name" required/>
                {errors.name && <p>{errors.name}</p>}

                <label>Summary</label>
                <input type="text" name="summary" value={input.summary} onChange={handleChange} placeholder="Summary" required/>
                {errors.summary && <p>{errors.summary}</p>}

                <label>Health Score</label>
                <input type="number" name="healthScore" value={input.healthScore} onChange={handleChange} placeholder="Health Score" min = "0" max = "100" pattern='[0-9]+' />

                <label>Steps</label>
                <input type="text" name="steps" value={input.steps} onChange={handleChange} placeholder="Steps" required/>
                

                {/* <label>Image</label> //////////// FALTA AGREGARLO EN EL MODELO ////////////
                <input type="text" name="image" value={input.image} onChange={handleChange} placeholder="Image" required/> 
                {errors.image && <p>{errors.image}</p>} */}

                <label>Diets</label>
                <select>
                    {diets.map((diet) => (
                        <option key={diet.id} value={diet.name} onClick={handleSelect}>{diet.name}</option>
                    ))}
                </select>
                <button type="submit" disabled={Object.keys(errors).length}>Create</button> 
            </form>


                    {
                        input.diets.map((diet) => (
                            <div key={diet}>
                                <button value={diet} onClick={handleDelete}>X</button>
                                <p>{diet}</p>
                            </div>
                        ))
                    }

        </div>
    )
}


//FLUJO DE TRABAJO CON FORMULARIOS :

//1) Crear un estado para el formulario con useState, donde caa input sera una propiedad del objeto.
// 2) Crear un handler para el evento onChange de cada input, que actualice el estado del formulario.
    // 2.1) El handler debe ser una funcion que reciba el evento como parametro.
    // 2.2) El handler debe actualizar el estado del formulario con el valor del input que se esta modificando.
    // 2.3) El handler debe ser pasado como prop al input que se esta modificando.
    //NOTA: se usa un spread operator para mantener el estado anterior y solo actualizar la propiedad que se esta modificando.
    // de otra forma, se perderia el estado de las demas propiedades del objeto.
//3) Setear el valor de cada input con el valor de la propiedad del estado del formulario que le corresponde.
//4) Para crear las validaciones se necesitara un estado para el error, que se actualizara en el handler del evento onChange.
      //Por lo cual definire previamente un SEGUNDO useState para el error.
//5) Crear una funcion para validacion para cada input del formulario que reciba el estado del formulario como parametro.
      // 5.1) Definir en variables las expresiones regulares para cada input.
      // 5.2) Crear un if que valide si el input esta vacio.
      // 5.3) Crear un if que valide si el input cumple con la expresion regular.
      // 5.4) Crear un objeto de errores que contenga los errores de cada input.
      // 5.5) Retornar el objeto de errores.
//6) Agregar al handler del evento onChange una funcion que actualice el estado del error con la funcion de validacion.