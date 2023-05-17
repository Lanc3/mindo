import NetInfo from '@react-native-community/netinfo'
import React, { useEffect, useState } from 'react'
import { Animated, Text } from 'react-native'

const InternetConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [animation] = useState(new Animated.Value(0))

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected !== isConnected) {
        setIsConnected(state.isConnected)
        if (state.isConnected) {
          animate(1)
        } else {
          animateRed(1)
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [isConnected])

  const animate = (toValue) => {
    Animated.timing(animation, {
      toValue: toValue,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      if (toValue === 1) animate(0)
    })
  }
  const animateRed = (toValue) => {
    Animated.timing(animation, {
      toValue: toValue,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-40, 0],
  })

  const backgroundColor = isConnected ? '#6e822b' : '#e74c3c'
  const text = isConnected ? 'Connected' : 'Disconnected'

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        backgroundColor,
        padding: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 999,
        borderBottomLeftRadius: 95,
        borderBottomRightRadius: 95,
      }}
    >
      <Text style={{ color: '#fff' }}>{text}</Text>
    </Animated.View>
  )
}

export default InternetConnectionStatus
