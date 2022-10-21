import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changePage} from '../../redux/actions/index.js'


export default function Paginado () {
    const dispatch = useDispatch();

    const recipesPerPage = useSelector((state) => state.recipesPerPage);
    const recipes = useSelector((state) => state.recipes);
    const currentPage = useSelector((state) => state.currentPage);
   
    // Iteracion para mostrar los numeros de paginas
    const pageNumbers = [];
    const allRecipes = recipes.length;
    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }
   //console.log(pageNumbers)
   
    function handlerChangePage (e) {
        dispatch(changePage(e.target.value))
       // console.log(e.target.value)
    }

   //console.log(currentPage)
    
    return (
        <div>
            <nav>
                 {pageNumbers && currentPage > 1 ? <button value= 'Prev' onClick={handlerChangePage}>Prev</button> : null}  
               
            
                    {pageNumbers?.map(number => (            
                        <button key={number} value={number} onClick={handlerChangePage}>{number}</button>   
                    ))}
             
                
                 {pageNumbers && currentPage < pageNumbers.length ? <button value = 'Next' onClick={handlerChangePage}>Next</button> : null} 
            
            </nav>
    
        </div>
    )
}



                    
                
              