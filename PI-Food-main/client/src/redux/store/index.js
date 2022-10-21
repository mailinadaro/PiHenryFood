import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducer/index.js'




const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


export default store;


/////// RECORDATORIOS TEORIA //////

// El STORE es el objeto que contiene el estado de la aplicacion, y es el unico que puede cambiar el estado de la aplicacion
// a su vez el store recibe un reducer que es la funcion que va a modificar el estado de la aplicacion
// y recibe un enhancer que es una funcion que le da funcionalidad al store, en este caso le estamos pasando el middleware
// que es una funcion que recibe una accion y la puede modificar antes de que llegue al reducer
// el thunk es un middleware que nos permite hacer peticiones asincronas

// ---> Store ----> Provider ----> Componente 
