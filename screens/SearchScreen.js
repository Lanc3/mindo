import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
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
  const [sliderData, setSliderData] = useState([])
  const [title, setTitle] = useState('Search results for: ' + search_term)
  const navigation = useNavigation()
  const [slug, setSlug] = useState('ies')
  const [blurb, setBlurb] = useState('')
  const scrollRef = useRef()
  const [data, setData] = useState([])
  const nextpage = () => {
    if (page <= totalPages) setPage((prevPage) => prevPage + 1)
  }
  const perviouspage = () => {
    if (page > 0) setPage((prevPage) => prevPage - 1)
  }
  const splitArray = (arr) => {
    const firstArray = arr.slice(0, 1)
    const secondArray = arr.slice(1)
    return [firstArray, secondArray]
  }
  const getContent = useCallback(async () => {
    setLoading(true)
    try {
      const response = await searchArticles(search_term, 10, 1)
      setTotalPages(Math.ceil(response.totalPosts / 10))
      const [firstArray, secondArray] = splitArray(response.posts)
      setData(secondArray)
      setSliderData(firstArray)
      setBlurb(response.posts[0].categoryDescription)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [search_term, page])

  useEffect(() => {
    getContent()
  }, [getContent])

  return (
    <View>
      {!loading ? (
        <View style={{ backgroundColor: '#fff' }} ref={scrollRef}>
          <FlatList
            overScrollMode="never"
            removeClippedSubviews={true}
            ListHeaderComponent={
              <Header
                title={'Search results for: ' + search_term}
                adType={'LDB_MOBILE'}
                navigation={navigation}
                data={sliderData}
              ></Header>
            }
            ListFooterComponent={
              <View>
                <View style={styles.pageNav}>
                  <View style={{ flexDirection: 'row' }}>
                    {page > 1 ? (
                      <TouchableOpacity onPress={() => perviouspage()}>
                        <Text style={{ fontSize: 16, color: '#6e822b' }}>
                          Previous{' '}
                        </Text>
                      </TouchableOpacity>
                    ) : null}

                    <Text style={styles.next}> {page} ... </Text>
                    <Text style={styles.next}>{totalPages}</Text>
                    {page < totalPages ? (
                      <TouchableOpacity onPress={() => nextpage()}>
                        <Text style={{ fontSize: 16, color: '#6e822b' }}>
                          {' '}
                          Next
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                </View>
                <Footer
                  navi={navigation}
                  refS={scrollRef}
                  adSelected="MPU"
                  show={true}
                />
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
                  LBD_Ad={'LDB_MOBILE'}
                  MPU_Ad={'MPU'}
                  title={item.title.toString()}
                  excerpt={item.excerpt.toString()}
                  date={item.date.toString()}
                  mediaID={item.media.toString()}
                  totalData={item.content}
                  authorId={item.author}
                  navi={navigation}
                  nameSlug={item.categoryName}
                  podcast={item.podcastData}/>
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
    fontSize: 12,
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
