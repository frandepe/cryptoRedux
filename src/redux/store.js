import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import CriptoReducer from "./apiCrypto";

const rootReducer = combineReducers({
    cryptos: CriptoReducer,
    crypto: CriptoReducer,
    // user: AuthReducer,
    // products: ProductsReducer
    //Aca hay que agregar los otros reducers que se requieran
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore () {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)) );
    return store;
}