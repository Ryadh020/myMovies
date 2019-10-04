import React from 'react'
import {Text, StyleSheet} from 'react-native'

class Favorites extends React.Component {
    render() {
        return (
            <Text style={styles.header} >Favorite</Text>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        color : 'red'
    }
})


export default Favorites