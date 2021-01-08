import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'
import { ScrollView } from 'react-native-gesture-handler';


const SearchScreen = ({navigation}) => {
    const[Term,setTerm]= useState('');
    const[searchAPI, results, errMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    }
    return( 
        <View style = {{flex : 1}}>
            <SearchBar 
            Term = {Term} 
            onTermChange = {setTerm}
            onTermSubmit = {()=> searchAPI(Term)} 
            />
            <Text>{errMessage}</Text>
            {/* <Text>the count is {results.length}</Text> */}
            <ScrollView>
            <ResultsList items = {filterResultsByPrice(1)} title= "Economy" navigation = {navigation}/>
            <ResultsList items = {filterResultsByPrice(2)} title= "Classy" navigation = {navigation}/>
            <ResultsList items = {filterResultsByPrice(3)} title= "Premium" navigation = {navigation}/>
            </ScrollView>

        </View>
    )

};
export default SearchScreen; 