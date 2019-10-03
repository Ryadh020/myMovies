import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/favoritereducer'
import manageHistoricFilms from './reducers/historicReducer'

const reducers = combineReducers({
    toggleFavorite,
    manageHistoricFilms
})

export default createStore(reducers)