import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './views/NavBar/NavBar';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import RecipesDetail from './views/RecipesDetail/RecipesDetail'
import RecipeCreate from './views/RecipeCreate/RecipeCreate';
import PageError from './views/Error404/PageError'; 




function App() {
  return (
    <div className="App">
      <NavBar />     
      
      <Switch>

      <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipe" component={RecipeCreate} />
        <Route exact path="/recipes/:id" component={RecipesDetail} />
        <Route path={'*'} component={PageError} />
      </Switch>
    </div>
  );
}

export default App;

