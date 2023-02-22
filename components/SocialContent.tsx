import { FontAwesome } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import React from 'react'
import { StyleSheet, View } from 'react-native'
export function SocialContent(props) {
  const _handleFacebookLinking = () => {
    Linking.openURL('http://www.facebook.com/MedicalIndependent')
  }
  const _handleTwitterLinking = () => {
    Linking.openURL('http://www.twitter.com/med_indonews')
  }
  const _handleLinkedInLinking = () => {
    Linking.openURL('http://www.linkedin.com/company/greencross-publishing')
  }
  const _handleInstagramLinking = () => {
    Linking.openURL('https://www.instagram.com/medicalindependent/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.spacer}>
        <FontAwesome.Button
          name="twitter"
          size={18}
          backgroundColor="#181818"
          onPress={_handleTwitterLinking}
        ></FontAwesome.Button>
      </View>
      <View style={styles.spacer}>
        <FontAwesome.Button
          name="facebook-square"
          size={18}
          color="#fff"
          backgroundColor="#181818"
          onPress={_handleFacebookLinking}
        ></FontAwesome.Button>
      </View>
      <View style={styles.spacer}>
        <FontAwesome.Button
          name="linkedin-square"
          size={18}
          color="#fff"
          backgroundColor="#181818"
          onPress={_handleLinkedInLinking}
        ></FontAwesome.Button>
      </View>
      <View style={styles.spacer}>
        <FontAwesome.Button
          name="instagram"
          size={18}
          backgroundColor="#181818"
          onPress={_handleInstagramLinking}
        ></FontAwesome.Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  spacer: {
    margin: -5,
  },
})
