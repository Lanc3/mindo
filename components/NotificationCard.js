import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
export function NotificationCard({
  navi,
  props,
  title,
  excerpt,
  date,
  mediaID,
  totalData,
  authorId,
  nameSlug,
  callback,
}) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          callback()

          navigation.navigate('FullArticleScreen', {
            nameSlug: nameSlug,
            authorName: authorId,
            title: title,
            date: date,
            imageData: mediaID,
            htmlData: totalData,
          })
        }}
      >
        <View style={styles.shortContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: mediaID }} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.greenTitle}>{nameSlug}</Text>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.footer}>
              <Text style={styles.by}>{excerpt}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    paddingHorizontal: 10,
    maxHeight: 60,
  },
  separators: {
    borderBottomColor: '#6e822b',
    borderBottomWidth: 1,
    paddingTop: 5,
    height: 1,
  },
  by: {
    fontFamily: 'Lato_400Regular',

    fontSize: 12,
    color: 'white',
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
  divider: {
    backgroundColor: '#181818',
    margin: 15,
  },
  content: {
    paddingLeft: 0,
  },
  titleStyle: {
    fontFamily: 'Merriweather_300Light',
    fontSize: 15,
    color: '#fff',
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
    width: '70%',
    height: '70%',
    margin: 10,
  },
  greenTitle: {
    color: '#6e822b',
    paddingTop: 5,
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    width: '100%',
    color: '#fff',
  },
  shortContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
})
