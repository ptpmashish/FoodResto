import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import RestoPage from '../screens/RestoPage';
import RestoDetails from './RestoDetails'

const ResultsList = ({title,items,navigation}) => {
    if (!items.length) { 
        return null;
    }

    return (
        <View>
           <Text style = {styles.title}>{title}</Text>
           {/* <Text>{items.length}</Text> */}
           <FlatList 
                horizontal
                showsHorizontalScrollIndicator = {false}
                data = {items}
                keyExtractor = { result => result.restaurant.id } 
                renderItem = {({item}) => {
                    return (
                    <TouchableOpacity onPress = {()=> navigation.navigate('RestoPage',{id:item.restaurant})}>
                    <RestoDetails details = {item}/>    
                    </TouchableOpacity>
                    )
                }}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    title : {
        fontWeight : 'bold',
        fontSize : 18,
        paddingTop : 8,
        paddingLeft : 8,
        paddingBottom : 5


    }
})
export default ResultsList;