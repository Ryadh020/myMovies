import React from 'react';
import {StyleSheet, View, Button, TextInput, Slider} from "react-native";

class Search extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Button title="Search" onPress={() => {}}></Button>
                <TextInput style={style.textInput} placeholder="tap a movie title"></TextInput>
            </View>
        );
    }
}

const style= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-end",
    },
    textInput: {
        height: 40,
        margin: 5,
        padding: 5,
    },
    SearchButton: {
        
    }
})


export default Search;