import React from 'react'
import {Text, StyleSheet} from 'react-native'
import FavoritFilmsList from './FavoritFilmsList'

class Favorites extends React.Component {
    render() {
        return (
            <FavoritFilmsList/>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        color : 'red'
    }
})


export default Favorites