import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import React, { useCallback, useEffect, useState,memo } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { newGetPostsByCatSlug } from '../hooks/useResults'
import { ShortCard } from './ShortCard'
const SponsoredArticleList = ({
  navigation,
  slugName,
  list,
  titleName,
  newss,
  pageRouteName,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isFocused = useIsFocused()
 
  useEffect(() => {
    console.log(list.length)
    ;(async () => { 
      const data = await AsyncStorage.getItem('userProfile')
      if (data !== null) setIsLoggedIn(JSON.parse(data).isLoggedIn)
    })()
  }, [])
  return ( 
    <View>
      {isLoggedIn ? (
        <View style={{ flex: 1, paddingTop: 5 }}>
          {list.length > 0 ? (
            <FlatList
            windowSize={5}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              ListHeaderComponent={
                <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{titleName}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(pageRouteName)
                    }}
                  >
                    <View style={styles.veiwContainer}>
                      <Text style={styles.viewAll}>View All</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              }
              data={list}
              removeClippedSubviews={true}
              listKey={(item, index) => `D_key${index.toString()}`}
              keyExtractor={(item, index) => `_key${index.toString()}`}
              renderItem={({ item, index }) => {
                return (
                  <ShortCard
                    props
                    title={item.title.toString()}
                    excerpt={item.excerpt.toString()}
                    date={item.date.toString()}
                    mediaID={item.media.toString()}
                    totalData={item.content}
                    authorId={item.author}
                    navi={navigation}
                    nameSlug={item.categoryName}
                  />
                )
              }}
            />
          ) : (
            <View></View>
          )}
        </View>
      ) : (
        <View></View>
      )}
    </View>
  )
}

export default memo(SponsoredArticleList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 26,

    fontWeight: 'bold',
    margin: 5,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  pageNav: {
    flexDirection: 'row',
  },
  next: {
    fontSize: 16,
  },
  nextGreen: {
    fontSize: 16,
    color: '#6e822b',
  },
  topSmallNav: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  viewAll: {
    color: '#6e822b',
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
  },
  veiwContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  titleStyle: {
    fontFamily: 'Merriweather_700Bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})
