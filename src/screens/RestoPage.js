import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {WebView} from 'react-native-webview'

const RestoPage = ({navigation}) => {
    const id = navigation.getParam('id'); 
    console.log(id)
    return (
        
    <WebView
            source={{uri: id.photos_url}}
            style={{marginTop: 20}}
    /> 
   
    )
};
export default RestoPage;