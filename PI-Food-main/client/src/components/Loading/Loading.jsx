import React from "react";
import loading from "../../assets/img/loading.gif";
import './Loading.css';

export default function Loading(){
    return(
        <div className="loading">
            <img src={loading} alt="loading" />
            <h1 className="loading__text">Loading...</h1>
        </div>
    )
}