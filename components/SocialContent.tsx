import React from 'react';
import { View,StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export function SocialContent(props) {

  const _handleFacebookLinking =() => {
        Linking.openURL("http://www.facebook.com/MedicalIndependent");
  };
  const _handleTwitterLinking =() => {
    Linking.openURL("http://www.twitter.com/med_indonews");
};
const _handleLinkedInLinking =() => {
    Linking.openURL("http://www.linkedin.com/company/greencross-publishing");
};

    return (
        <View style={styles.container}>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="facebook" backgroundColor="#3b5998" onPress={_handleFacebookLinking}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="twitter" backgroundColor="#1da1f2" onPress={_handleTwitterLinking}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="linkedin" backgroundColor="#0077b5" onPress={_handleLinkedInLinking}>
                </FontAwesome.Button>
            </View>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    spacer:{
        padding:10
    }
})