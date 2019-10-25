import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './filmItems';
import { connect } from 'react-redux'

class FavoritFilmsList extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        films :[]
    }
}

_displayDetailForFilm = (idFilm) => {
    // change to the view details:
  this.props.navigation.navigate("filmdetail",{filmId : idFilm})
}

render() {
    return(
        <FlatList
        style={styles.list}
        data={this.props.films}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        extraData={this.props.favoritesFilm}
        onEndReached={() => {
            // checking for if there still availible pages to load:
          if (this.page < this.totalPages) { 
            //this._searchForMoviesData()
            this.props.loadFilms()
          }
        }}
         renderItem={({item}) => (
            <FilmItem 
               isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
               displayDetailForFilm={this._displayDetailForFilm} 
               film={item}/>
         )}
    />
)}

}

const styles = StyleSheet.create({
    list: {
      flex: 1
    }
  })

const mapStateToProps = state => {
    return {
      favoritesFilm: state.toggleFavorite.favoritesFilm,
      historicFilms: state.manageHistoricFilms.historicFilms
    }
  }
  
export default connect(mapStateToProps)(FavoritFilmsList)