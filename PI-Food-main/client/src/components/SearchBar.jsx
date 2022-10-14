import React from "react";
import{useState} from "react";
import { useDispatch} from "react-redux";
import {getRecipesName} from "../actions/index.js";


export default function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getRecipesName(input));
        setInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}