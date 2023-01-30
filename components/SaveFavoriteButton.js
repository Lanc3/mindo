import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
const SaveButton = ({ articleData }) => {
  const [favorites, setFavorites] = useState([])
  const [buttonText, setButtonText] = useState('Save')

  useEffect(() => {
    // Reset the button text to "Save" when the component is mounted or receives focus
    setButtonText('Save')
  }, [articleData]) // The effect will only run when the `articleData` prop changes

  const handlePress = async () => {
    try {
      // Check if the current article data is already in the favorites array

      // Update the button text to "Saving..." while the save operation is in progress
      setButtonText('Saving...')
      // Get the current value of the FAVORITES key in Async Storage
      const favoritesString = await AsyncStorage.getItem('FAVORITES')
      let favoritesArray = []
      if (favoritesString) {
        // If the FAVORITES key has a value, parse it into an array
        favoritesArray = JSON.parse(favoritesString)
      }
      // Add the current article data to the array
      favoritesArray.push(articleData)
      // Save the updated array to Async Storage
      await AsyncStorage.setItem('FAVORITES', JSON.stringify(favoritesArray))
      // Update the component's state with the updated array
      setFavorites(favoritesArray)
      // Update the button text to "Added" to indicate that the save operation has completed
      setButtonText('Added')
    } catch (error) {
      console.error(error)
      // If an error occurs, reset the button text to "Save"
      setButtonText('Save')
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: '#6e822b',
          margin: 8,
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 5,
          borderRadius: 4,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SaveButton
