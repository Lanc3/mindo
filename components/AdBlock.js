import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import WebRender from './WebRender'
export function AdBlock(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <WebRender htmlData={props.htmlData} />
      </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    maxWidth: windowWidth,
    paddingBottom: 20,
    paddingTop: 20,
    marginRight: 20,
  },
  image: {
    width: 300,
    marginLeft: 100,
  },
})
