import React, { useEffect, useState } from 'react'
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default function AnimatedDropdown({ title, list }) {
  const [drawerAnimation, setDrawerAnimation] = useState(
    new Animated.Value(100),
  )
  const [toggle, setToggle] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width

  const onPressOpen = () => {
    if (!toggle) {
      setToggle(true)
      Animated.timing(drawerAnimation, {
        toValue: maxHeight,
        duration: 250,
        useNativeDriver: true,
      }).start()
    } else {
      setToggle(false)
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start()
    }
  }

  useEffect(() => {
    let height = 0
    for (let i = 0; i < list.length; i++) {
      height += 100
    }
    setMaxHeight(height)
  }, [])
  return (
    <Animated.View style={styles.container}>
      <TouchableOpacity onPress={onPressOpen}>
        <Text style={{ color: 'white' }}> {title} </Text>
      </TouchableOpacity>

      <Animated.View
        style={[styles.box, { maxHeight: drawerAnimation }]}
      ></Animated.View>
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    minHeight: 100,
  },
})
