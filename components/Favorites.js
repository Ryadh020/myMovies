import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import FavoritFilmsList from './FavoritFilmsList'
import Avatar from '../components/Avatar'
import { connect } from 'react-redux'


class Favorites extends React.Component {

    _searchForMoviesData() {
        if(this.searchText.length >0) {
          this.setState({isLoading : true})
          getMoviesData(this.searchText, this.page+1).then((data) => {
             this.page = data.page
             this.totalPages = data.total_pages
             this.setState({
                films: [ ...this.state.films, ...data.results ],
                isLoading : false})
          })
        } 
    }

    _displayDetailForFilm = (idFilm) => {
        // change to the view details:
      this.props.navigation.navigate("filmdetail",{filmId : idFilm})
    }

    
    render() {
        return (
          <View style={styles.main_container}>
            <View style={styles.avatar_container}>
              <Avatar/>
            </View>
            <FavoritFilmsList 
                films={this.props.favoritesFilm} 
                navigation={this.props.navigation} 
                loadFilms={this._searchForMoviesData} 
            />
          </View>
        )
      }
    }

const styles = StyleSheet.create({
      main_container: {
        flex: 1
      },
      avatar_container: {
        alignItems: 'center'
      }
})

const mapStateToProps = (state) => {
    return {
      favoritesFilm: state.toggleFavorite.favoritesFilm,
    }
  }


export default connect(mapStateToProps)(Favorites);