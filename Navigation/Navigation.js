import React from 'react'
import { Image, StyleSheet } from 'react-native'
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
            title: 'search',
            //headerTransparent: false,
            headerStyle: {
                backgroundColor: 'fff',
                height: 70,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 35,
                color: '#737373',
                //paddingLeft: 80,
            },
        }
    },
    filmdetail: {
        screen : FilmDetail,
        navigationOptions: {
            title: 'Details'
        }

    }
})

const SecondSearchStackNavigator = createStackNavigator({
    // the list of views to display:
search: {
    screen : Favorites,
    navigationOptions: {
        title: 'Favorites'
    }
},
filmdetail: {
    screen : FilmDetail,
    navigationOptions: {
        title: 'Details'
    }

}
})

const BottomNavigationTab = createBottomTabNavigator({
    search : {
        screen : SearchStackNavigator,
        navigationOptions : {
            tabBarIcon : () => {
                return (
                    <Image
                        source={require("../Images/ic_search.png")}
                        style={styles.icon}
                    />
                )
            }
        }
    },
    favorites : {
        screen : SecondSearchStackNavigator,
        navigationOptions : {
            tabBarIcon : () => {
                return (
                    <Image
                        source={require('../Images/ic_favorite.png')}
                        style={styles.icon}
                    />
                )
            }
        },
    }
},
{
    tabBarOptions : {
        showLabel : false,
        showIcon : true,
        activeBackgroundColor : 'white',
        inactiveBackgroundColor : 'white',
    }
}
)

const styles = StyleSheet.create({
    icon : {
        width : 30,
        height : 30
    }
})

export default createAppContainer(BottomNavigationTab);