import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmDetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Film détails : </Text>
        <Text>{this.props.navigation.state.params.filmId}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding:20
  }
})

export default FilmDetail