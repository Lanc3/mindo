import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { NotificationCard } from './NotificationCard'
export function NotificationList({ callback }) {
  const [favorites, setFavorites] = useState([])
  const isFocused = useIsFocused()
  const retrieveFavorites = async () => {
    try {
      // Get the current value of the notifications key in Async Storage
      const notificationsString = await AsyncStorage.getItem('notifications')
      if (notificationsString) {
        // If the notifications key has a value, parse it into an array and update the component's state
        const notificationsArray = JSON.parse(notificationsString)
        setFavorites(notificationsArray)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (isFocused) {
      retrieveFavorites()
    }
  }, [isFocused])

  const navigation = useNavigation()

  const goToLink = (article) => {
    navigation.navigate('FullArticleScreen', {
      nameSlug: article.nameSlug,
      authorName: article.authorId,
      title: article.title,
      date: article.date,
      imageData: article.imageData,
      htmlData: article.htmlData,
    })
  }
  const handlePress = async (title) => {
    try {
      // Get the current value of the notifications key in Async Storage
      const favoritesString = await AsyncStorage.getItem('notifications')
      if (favoritesString) {
        // If the notifications key has a value, parse it into an array
        const favoritesArray = JSON.parse(favoritesString)
        // Find the index of the item with the matching title
        const index = favoritesArray.findIndex(
          (favorite) => favorite.title === title,
        )
        // Remove the item from the array
        favoritesArray.splice(index, 1)
        // Save the updated array to Async Storage
        await AsyncStorage.setItem(
          'notifications',
          JSON.stringify(favoritesArray),
        )
        // Update the component's state with the updated array
        setFavorites(favoritesArray)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const onRemove = async (id) => {
    setData(favorites.filter((favorites) => favorites.id !== id))
    await AsyncStorage.setItem('notificationsArray', JSON.stringify(favorites))
  }
  const logCallback = () => {
    callback()
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', padding: 5 }}>Notifications</Text>
          </View>
        }
        overScrollMode="never"
        removeClippedSubviews={true}
        data={favorites}
        listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.newCont}>
              <View style={{ width: '88%' }}>
                <NotificationCard
                  title={item.title}
                  excerpt={item.title}
                  date={item.date}
                  mediaID={item.imageData}
                  totalData={item.htmlData}
                  authorId={item.authorName}
                  navi={navigation}
                  nameSlug={item.nameSlug}
                  callback={() => {
                    logCallback()
                  }}
                />
              </View>
              <View style={styles.separators}></View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginRight: 10,
                }}
              >
                <IconButton
                  icon="delete"
                  color="#6e822b"
                  size={24}
                  onPress={() => {
                    handlePress(item.title)
                  }}
                />
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    maxHeight: 400,
    marginBottom: 0,
  },
  newCont: {
    flexDirection: 'row',
  },
  spacer: {
    padding: 10,
  },
  cardStyle: {
    minWidth: '70%',
    paddingLeft: -10,
    margin: 10,
    elevation: 12,
  },
  separators: {
    borderBottomColor: '#6e822b',
    borderBottomWidth: 10,
    paddingTop: 5,
    height: 10,
  },
  divider: {
    backgroundColor: '#000',
    margin: 5,
  },
  content: {
    paddingLeft: 0,
  },
  titleStyle: {
    paddingLeft: 10,
    fontSize: 17,
    fontFamily: 'Merriweather_400Regular',
    justifyContent: 'flex-start',
    height: 50,
  },
  surface: {
    elevation: 1,
  },
  containImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    height: 3200,
    flex: 1,
    color: '#000',
  },
  cardEnd: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'flex-end',
  },
  author: {
    fontWeight: 'bold',
  },
  render: {
    paddingBottom: 10,
  },
  dateS: {
    justifyContent: 'center',
    color: '#000',
  },
  image: {
    width: windowWidth,
    height: 200,
    resizeMode: 'stretch',
  },
  greenTitle: {
    color: '#6e822b',
    paddingTop: 10,
    paddingLeft: 10,
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    width: '100%',
  },
  titleSmall: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato_400Regular',

    paddingTop: 10,
    paddingLeft: 10,
  },
})
