import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
const RemoveButton = ({ title }) => {
  const [favorites, setFavorites] = useState([])

  const handlePress = async () => {
    try {
      // Get the current value of the FAVORITES key in Async Storage
      const favoritesString = await AsyncStorage.getItem('FAVORITES')
      if (favoritesString) {
        // If the FAVORITES key has a value, parse it into an array
        const favoritesArray = JSON.parse(favoritesString)
        // Find the index of the item with the matching title
        const index = favoritesArray.findIndex(
          (favorite) => favorite.title === title,
        )
        // Remove the item from the array
        favoritesArray.splice(index, 1)
        // Save the updated array to Async Storage
        await AsyncStorage.setItem('FAVORITES', JSON.stringify(favoritesArray))
        // Update the component's state with the updated array
        setFavorites(favoritesArray)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <IconButton
        icon="delete"
        color="#6e822b"
        size={24}
        onPress={() => {
          handlePress()
        }}
      />
    </View>
  )
}

export default RemoveButton
