import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import RecipeCreate from './components/RecipeCreate';


function App() {
  return (
    <div className="App">
      <NavBar path="/"></NavBar>
      <Route exact path ="/" component = {Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/recipes" component={Recipes}/>
      <Route exact path="/recipes/:id" component={RecipeDetail}/>
      <Route exact path="/recipe" component={RecipeCreate}/>
    </div>
  );
}

export default App;


// la ruta del componente home, es home?