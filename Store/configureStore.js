import { createStore, combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import toggleFavorite from './reducers/favoritereducer'
import manageHistoricFilms from './reducers/historicReducer'
import setAvatar from './reducers/avatarReducer'

const rootPersistConfig = {
    key:'root',
    storage: storage
}

const reducers = persistCombineReducers(rootPersistConfig, {
    toggleFavorite,
    manageHistoricFilms,
    setAvatar
})

export default createStore(reducers)