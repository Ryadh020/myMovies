import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Search from '../components/search'
import FilmDetail from '../components/FilmDetails'
import Favorites from '../components/Favorites'

const SearchStackNavigator = createStackNavigator({
        // the list of views to display:
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

const BottomNavigationBar = createBottomTabNavigator({
    search : {
        screen : SearchStackNavigator
    },
    favorites : {
        screen : Favorites
    }
})

export default createAppContainer(BottomNavigationBar);