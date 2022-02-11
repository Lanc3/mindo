import React from 'react';
import { View,StyleSheet,Text,Image ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export function ECopy(props) {

  const _handleFacebookLinking =() => {
        Linking.openURL("https://www.medilearning.ie/doctorcpd");
  };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/eCpoy.jpg')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.greenText}>ecopy</Text>
                <Text style={styles.title}>The medical Independent</Text>
                <Text>Click here to get this content</Text>
            </View>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',

        maxWidth:windowWidth,
        paddingBottom:20,
        paddingTop:20,
    },
    spacer:{
        padding:0
    },
    image:{
      height:windowWidth/2,
      width:windowWidth/2,
      resizeMode:'contain'
    },
    imageContainer:{
        padding:10
    },
    greenText:{
        color:'#6e822b'
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    textContainer:{

    }
})