import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBar = ({Term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.background}>
            <Feather style={styles.icon} name = 'search' />
            <TextInput 
                style = {styles.inputStyle}
                placeholder = 'search' 
                autoCorrect = {false}
                value = {Term}
                onChangeText={newTerm => onTermChange(newTerm)} 
                onEndEditing = {() => onTermSubmit()}
            />
        </View>
    )

};

const styles = StyleSheet.create({

background: {
    marginTop : 10,
    backgroundColor: '#FFF',
    height : 50,
    borderRadius: 5,
    marginHorizontal: 8,
    flexDirection:'row'
    

}, 
inputStyle: {
    flex :1,
    fontSize : 18
    
},
icon: {
    alignSelf : 'center',
    fontSize : 30,
    marginHorizontal : 15
}

});
export default SearchBar;