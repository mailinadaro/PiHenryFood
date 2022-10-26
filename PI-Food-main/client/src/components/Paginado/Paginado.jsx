import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changePage} from '../../redux/actions/index.js'
import './Paginado.css'

export default function Paginado () {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const recipesPerPage = useSelector((state) => state.recipesPerPage);
    const currentPage = useSelector((state) => state.currentPage);
   
    const pageNumbers = [];
    const allRecipes = recipes.length;
    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }
  
   
    function handlerChangePage (e) {
        dispatch(changePage(e.target.value))
       
    }
   
    return (
        <div className='paginado'>
            <div className='button__container'>
                 {pageNumbers && currentPage > 1 ? <button  className="prev__button" value= 'Prev' onClick={handlerChangePage}>Prev</button> : null}  
               
                    {pageNumbers?.map(number => (            
                        <button key={number} className={currentPage === number ? "current__button" : "button"} value={number} onClick={handlerChangePage}>{number}</button>
                    ))}
              
                 {pageNumbers && currentPage < pageNumbers.length ? <button className="next__button" value = 'Next' onClick={handlerChangePage}>Next</button> : null} 
            </div>
        </div>
    )
}









                    
                
              