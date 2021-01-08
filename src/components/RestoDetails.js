import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const RestoDetails = ({details}) => {
    if(details.restaurant.thumb == ""){
        return null;
    }

    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source= {{uri : details.restaurant.thumb? details.restaurant.thumb : null}}/>
        <Text style = {styles.name}> {details.restaurant.name} </Text>
        <Text style = {styles.container}>{details.restaurant.user_rating.aggregate_rating} Stars, {details.restaurant.all_reviews_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft : 8
    },
    image: {
        width : 200,
        height : 150,
        borderRadius : 6,
        marginBottom : 4
    }, 
    name : {
        fontWeight : 'bold'
        
    }
});
export default RestoDetails;