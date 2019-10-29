import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Dimensions, Image } from 'react-native'
import FilmItem from './filmItems';
import FavoritFilmsList from './FavoritFilmsList'
import {getMoviesData} from '../API/movieDB';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
      films: [],
    }, () => {
      this._searchForMoviesData()
    })
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

  render() {    
    return (
      <View style={styles.main_container}>
        <View style={styles.searchBar}>
          <TextInput onSubmitEditing={()=> this._loadMovies()} onChangeText={(text)=> { this._changeSearchText(text)}} style={styles.textinput} placeholder='SAW IV'/>
          <TouchableOpacity 
              onPress={() => this._loadMovies()} 
              style={styles.submitButton}>
            <Image
              source={require("../Images/ic_search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <FavoritFilmsList
          films={this.state.films} 
          navigation={this.props.navigation} 
          loadFilms={this._searchForMoviesData} 
          page={this.page}
          totalPages={this.totalPages} 
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
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textinput: {
    margin: 10,
    height: 30,
    width: Dimensions.get('window').width - 50,
    borderColor: 'white',
    borderRadius : 7,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'rgb(210,210,210)',
    color: 'white',
  },
  submitButton: {
    position: 'absolute',
    right: 32,
    top: 14,
    width : 26,
    height: 26,
    //backgroundColor: 'red',
  },
  icon : {
    width : 24,
    height : 24
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

export default Search