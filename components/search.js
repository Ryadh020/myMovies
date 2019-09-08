import React from 'react';
import {StyleSheet, View, Button, TextInput, Slider} from "react-native";

class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput style={style.textInput} placeholder="tap a movie title"></TextInput>
                <Button title="Search" onPress={() => {}}></Button>
            </View>
        );
    }
}

const style= StyleSheet.create({
    textInput: {
        height: 40,
        margin: 5,
        padding: 5,
    },
    SearchButton: {
        
    }
})


export default Search;