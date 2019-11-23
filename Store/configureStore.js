import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/favoritereducer'
import manageHistoricFilms from './reducers/historicReducer'
import setAvatar from './reducers/avatarReducer'

const reducers = combineReducers({
    toggleFavorite,
    manageHistoricFilms,
    setAvatar
})

export default createStore(reducers)