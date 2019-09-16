import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import {getMoviesDetails} from '../API/movieDB';


class FilmDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

    // 
  componentDidMount() {
    getMoviesDetails(this.props.navigation.state.params.filmId).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if(this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
      )
    }
  
  }

  _displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
          style={styles.image}
          source={{uri: 'https://image.tmdb.org/t/p/w300'+ this.state.film.backdrop_path}}
          />
          <Text>{this.state.film.title}</Text>
          <Text>{this.state.film.overview}</Text>
          <Text>{this.state.film.release_date}</Text>
          <Text>{this.state.film.vote_average}</Text>
          <Text>{this.state.film.vote_count}</Text>
          <Text>{this.state.film.budget}</Text>
          <Text>{this.state.film.type}</Text>
          <Text>
            
          </Text>
          <Text>{this.state.film.production_companies.map(item => item.name).join(" / ")}</Text>
        </ScrollView>
      )
    }
  }


  render() {
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding:20
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default FilmDetail