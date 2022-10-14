import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {createRecipe} from '../actions/index.js';
import {getDiets} from '../actions/index.js'
import {Link} from 'react-router-dom';



export default function RecipeCreate() {
    
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);
    const history = useHistory();
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: [],
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);
    
    function validate (input){
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
    

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));
    }

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

    function handleDelete (e) {
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== e.target.value)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createRecipe(input));
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

    return (
        <div>
            <Link to="/home"><h1>Home</h1></Link>
            <h1>Create Recipe</h1>
         
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <label>Summary</label>
                <input type="text" name="summary" value={input.summary} onChange={handleChange} />
                <label>Health Score</label>
                <input type="number" name="healthScore" value={input.healthScore} onChange={handleChange} />
                <label>Steps</label>
                <input type="text" name="steps" value={input.steps} onChange={handleChange} />
                <label>Diets</label>
                <select>
                    {diets.map((diet) => (
                        <option key={diet.id} value={diet.name} onClick={handleSelect}>{diet.name}</option>
                    ))}
                </select>
                <button type="submit">Create</button>
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
