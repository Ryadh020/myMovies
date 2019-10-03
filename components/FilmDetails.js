import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native'
import {getMoviesDetails, getPoster} from '../API/movieDB';
import { connect } from 'react-redux'

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

  _toggleFavorite() {
    let action = { type: "TOGGLE_FAVORITE", value: this.state.film }
    this.props.dispatch(action)
}

  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png')
    if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
     // Film dans nos favoris
     sourceImage = require('../Images/ic_favorite.png')
    }
    return (
     <Image
       style={styles.favorite_image}
       source={sourceImage}
     />
   )
  }

  _displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
          style={styles.image}
          source={{uri: getPoster(this.state.film.backdrop_path)}}
          />
          <Text style={styles.title_text}>{this.state.film.title}</Text>
          <TouchableOpacity
            style={styles.favorite_container}
            onPress={() => this._toggleFavorite()}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.description_text}>Overview : {this.state.film.overview}</Text>
          <Text style={styles.default_text}>Released in : {this.state.film.release_date}</Text>
          <Text style={styles.default_text}>rate : {this.state.film.vote_average}</Text>
          <Text style={styles.default_text}>genres : {this.state.film.genres.map(data => data.name).join(" / ")}</Text>
          <Text style={styles.default_text}>companies : {this.state.film.production_companies.map(item => item.name).join(" / ")}</Text>
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
  },
  scrollview_container: {
    flex: 1,
    margin:0
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_container: {
    alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
},
favorite_image: {
  width: 40,
  height: 40
}
})


const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmDetail)