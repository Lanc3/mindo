import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { AdManager } from '../components/AdManager'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoadingView from '../components/LoadingView'
import { ShortCard } from '../components/ShortCard'
import { searchArticles } from '../hooks/useResults'
const SearchScreen = ({ props, route }) => {
  const { search_term, listData } = route.params
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)
  const [title, setTitle] = useState('Search results for: ' + search_term)
  const navigation = useNavigation()
  const scrollRef = useRef()
  const [data, setData] = useState([])

  const getContent = useCallback(async () => {
    setLoading(true)
    try {
      const response = await searchArticles(search_term, 10, 1)
      setData(response.posts)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [search_term])

  useEffect(() => {
    getContent()
  }, [getContent])

  return (
    <View>
      {!loading ? (
        <View style={{ backgroundColor: '#fff' }} ref={scrollRef}>
          <FlatList
            ListHeaderComponent={
              <Header
                title={title}
                adType={'LDB_MOBILE'}
                adType={'LDB_MOBILE'}
                navigation={navigation}
                data={data}
              ></Header>
            }
            ListFooterComponent={
              <View>
                <Footer navi={navigation} refS={scrollRef} adSelected="MPU" />
              </View>
            }
            data={data}
            listKey={(item, index) => `D_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            renderItem={({ item, index }) => {
              if (index === 3) {
                return <AdManager selectedAd={'MPU'} sizeType={'BIG'} />
              } else if (index === 7) {
                return (
                  <AdManager selectedAd={'LDB_MOBILE'} sizeType={'SMALL'} />
                )
              }
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
        </View>
      ) : (
        <View style={{}}>
          <LoadingView loadingProgress={loading} />
        </View>
      )}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
  },
  next: {
    fontSize: 16,
  },
  nextGreen: {
    fontSize: 16,
    color: '#6e822b',
  },
  nextGreen: {
    paddingTop: 5,
    fontSize: 26,

    fontWeight: 'bold',
    color: '#6e822b',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
