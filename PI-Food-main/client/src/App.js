import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import RecipeDetail from './components/RecipesDetail/RecipesDetail'
import RecipeCreate from './components/RecipeCreate/RecipeCreate';
import PageError from './components/Error404/PageError';



function App() {
  return (
    <div className="App">
  
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/" component={NavBar} />  
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
        <Route exact path="/recipes/create" component={RecipeCreate} /> 
        <Route path="*" component={PageError} />
      </Switch>
    

    </div>
  );
}

export default App;

