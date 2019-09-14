import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import FilmItem from './filmItems';
import {getMoviesData} from '../API/movieDB';


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

  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
    this.props.navigation.navigate("filmdetail",{filmId : idFilm})
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
            onEndReached={() => {
                // checking for if there still availible pages to load:
              if (this.page < this.totalPages) { 
                this._searchForMoviesData()
              }
            }}
            renderItem={({item}) => <FilmItem displayDetailForFilm={this._displayDetailForFilm} film={item}/>}
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

export default Search