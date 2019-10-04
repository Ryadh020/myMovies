import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import FilmItem from './filmItems';
import {getMoviesData} from '../API/movieDB';
import { connect } from 'react-redux'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {films:[],
                  isLoading : false}
    this.searchText = ""
    this.page = 0
    this.totalPages = 0
  }
    // serch for data when cliking the search button
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

    // load movies
  _loadMovies() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: []
    }, this._searchForMoviesData())
  }
  
    // watching text input changes:
  _changeSearchText(text) {
    this.searchText= text
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

  _displayDetailForFilm = (idFilm, idTitle) => {
      // change to the view details:
    this.props.navigation.navigate("filmdetail",{filmId : idFilm})

      // Add it to the historic as viewed:
    console.log("clicked");
      
    let action = { type: 'TOGGLE_FILMDETAIL', value: { id: 1, title: 'Star Wars' } }
    this.props.dispatch(action) 
  }

  render() {    
    return (
      <View style={styles.main_container}>
        <TextInput onSubmitEditing={()=> this._loadMovies()} onChangeText={(text)=> { this._changeSearchText(text)}} style={styles.textinput} placeholder='tap a film name'/>
        <Button title='Rechercher' onPress={() => this._loadMovies()}/>
        <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            extraData={this.props.favoritesFilm}
            onEndReached={() => {
                // checking for if there still availible pages to load:
              if (this.page < this.totalPages) { 
                this._searchForMoviesData()
              }
            }}
            renderItem={({item}) => (
               <FilmItem 
                  isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                  displayDetailForFilm={this._displayDetailForFilm} 
                  film={item}/>
            )}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    historicFilms: state.manageHistoricFilms.historicFilms
  }
}

export default connect(mapStateToProps)(Search)