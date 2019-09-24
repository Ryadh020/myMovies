import { createStore } from 'redux';
import toggleFavorite from './reducers/favoritereducer'

export default createStore(toggleFavorite)