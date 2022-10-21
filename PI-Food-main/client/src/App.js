import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import RecipesDetail from './components/RecipesDetail/RecipesDetail'
import RecipeCreate from './components/RecipeCreate/RecipeCreate';
import PageError from './components/Error404/PageError'; 



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

