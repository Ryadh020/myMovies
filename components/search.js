import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import FilmItem from './filmItems';
import {getMoviesData} from '../API/movieDB';





class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {films:[]}
    this.searchText = "";
  }
    // serch for data when cliking the search button
  _searchForMoviesData() {
    if(this.searchText.length >0) {
      getMoviesData(this.searchText).then((data) => {
          this.setState({films:data.results})
          console.log(data);
      })
    }
    
  }
    // watching text input changes:
  _changeSearchText(text) {
    this.searchText= text
  }


  render() {
    return (
      <View style={styles.main_container}>
        <TextInput onSubmitEditing={()=> this._searchForMoviesData()} onChangeText={(text)=> { this._changeSearchText(text)}} style={styles.textinput} placeholder='tap a film name'/>
        <Button title='Rechercher' onPress={() => this._searchForMoviesData()}/>
        <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search