import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {changePage} from '../../redux/actions/index.js'
//import { useEffect } from 'react'


export default function Paginado () {
    const dispatch = useDispatch();
    const recipesFiltredByPage = useSelector((state) => state.recipesFiltredPerPage);
    const recipes = useSelector((state) => state.recipes);
    const currentPage = useSelector((state) => state.page); 
   
    // Iteracion para mostrar los numeros de paginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes / recipesFiltredByPage); i++) {
        pageNumbers.push(i);
    }


    function handlerChangePage (e) {
        if (e.target.value === 'next') {
            dispatch(changePage(currentPage + 1))
        } else if (e.target.value === 'prev') { 
            dispatch(changePage(currentPage - 1)) 
        } else {
            dispatch(changePage(Number(e.target.value))) 
        }
    }

    
    return (
        <div>
            <nav>
                {pageNumbers && currentPage > 1 ? <button onClick={handlerChangePage}>Prev</button> : null}
               
                <ul>
                    {pageNumbers?.map(number => (              //mapeo para mostrar los numeros de paginas de forma lista y con un link
                        <li key={number}>
                            <Link to = {`/home/${number}`} onClick={handlerChangePage}> {number} </Link>
                             {/*  Opcion 2:<button  key={number} onClick={handlerChangePage}>{number}</button> */}
                        </li>
                    ))}
                </ul>
                
                {pageNumbers && currentPage < pageNumbers.length ? <button onClick={handlerChangePage}>Next</button> : null}
            </nav>
     
        </div>
    )
}


               
                    
                
              