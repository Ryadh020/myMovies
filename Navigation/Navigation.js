import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import Search from '../components/search'
import FilmDetail from '../components/FilmDetails'

const SearchStackNavigator = createStackNavigator({
        // the liest views to display:
    search: {
        screen : Search,
        navigationOptions: {
            title: 'Search'
        }
    },
    filmdetail: {
        screen : FilmDetail,
        navigationOptions: {
            title: 'Details'
        }

    }
})

export default createAppContainer(SearchStackNavigator);