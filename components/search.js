import React from 'react';
import {View, Button, TextInput} from "react-native";

class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder="tap a movie title"></TextInput>
                <Button title="Search" onPress={() => {}}></Button>
            </View>
        );
    }
}

export default Search;