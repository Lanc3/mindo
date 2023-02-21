import { useNavigation } from '@react-navigation/native'
import he from 'he'
import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
export function SingleCard({
  navi,
  props,
  title,
  excerpt,
  date,
  mediaID,
  totalData,
  nameSlug,
  authorId,
  padding,
}) {
  const decodeString = (str) => {
    return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/^(-)+|(-)+$/g, '')
  }

  const navigation = useNavigation()

  const { state, navigate } = props.navigation

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navi.navigate('FullArticleScreen', {
            nameSlug: nameSlug,
            authorName: authorId,
            title: title,
            date: date,
            imageData: mediaID,
            htmlData: totalData,
          })
        }
      >
        <View style={{ marginHorizontal: padding }}>
          <Image
            style={{ minWidth: '100%', height: 200, resizeMode: 'cover' }}
            source={{ uri: mediaID }}
          />
        </View>

        <Text style={styles.greenTitle}>{nameSlug}</Text>
        <Text style={styles.titleStyle}>{decodeString(he.decode(title))}</Text>
        <View style={styles.footer}>
          <Text style={{ paddingLeft: 20 }}>By </Text>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>
            {authorId}{' '}
          </Text>
        </View>
        <Text style={{ paddingLeft: 20 }}>{date}</Text>
      </TouchableOpacity>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {},
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
    backgroundColor: '#000',
    margin: 5,
  },
  content: {
    paddingLeft: 0,
  },
  titleStyle: {
    fontFamily: 'Merriweather_400Regular',
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: 24,
  },
  greenTitle: {
    color: '#6e822b',
    paddingTop: 10,
    paddingHorizontal: 20,
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
  },
  textStyle: {
    fontSize: 15,
    paddingHorizontal: 10,
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
    minWidth: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    width: '100%',
  },
})
