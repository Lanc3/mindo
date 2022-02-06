import React from 'react';
import { View,StyleSheet,TouchableHighlight,Image ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export function OtherSites(props) {

  const _handleFacebookLinking =() => {
        Linking.openURL("https://www.medilearning.ie/doctorcpd");
  };
  const _handleTwitterLinking =() => {
    Linking.openURL("https://www.medilearning.ie/pharmacistcpd");
};
const _handleLinkedInLinking =() => {
    Linking.openURL("https://www.medilearning.ie/nursecpd");
};

    return (
        <View style={styles.container}>
            <View style={styles.spacer}>
            <TouchableHighlight onPress={() => _handleFacebookLinking()}>
                <Image  source={require('./../assets/images/doctorCPD.png')} />
            </TouchableHighlight>
            </View>
            <View style={styles.spacer}>
            <TouchableHighlight onPress={() => _handleTwitterLinking()}>
                <Image  source={require('./../assets/images/pharmaCPD.png')} />
            </TouchableHighlight>
            </View>
            <View style={styles.spacer}>
            <TouchableHighlight onPress={() => _handleLinkedInLinking()}>
                <Image  source={require('./../assets/images/nurseCPD.png')} />
            </TouchableHighlight>
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

    },
    spacer:{
        padding:10
    }
})