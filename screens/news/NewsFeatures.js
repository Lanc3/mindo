import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { AdManager } from '../../components/AdManager'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import LoadingView from '../../components/LoadingView'
import { ShortCard } from '../../components/ShortCard'
import { newGetPostsByCatSlug } from '../../hooks/useResults'

const NewsFeatures = ({ navigation }) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [sliderData, setSliderData] = useState([])
  const [loading, setLoading] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [title, setTitle] = useState('News Features')
  const [slug, setSlug] = useState('news-features')
  const scrollRef = useRef()

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
    setLoading(0.25)
    try {
      setLoading(0.3)
      const response = await newGetPostsByCatSlug(slug, 10, page)
      setLoading(0.6)
      setTotalPages(Math.ceil(response.totalPosts / 10))
      setLoading(0.8)
      const [firstArray, secondArray] = splitArray(response.posts)
      setData(secondArray)
      setSliderData(firstArray)
      setLoading(1)

      setLoading(1)
    } catch (error) {
    } finally {
      setLoading(1)
    }
    setLoading(1)
  }, [page])

  useEffect(() => {
    getContent()
  }, [getContent])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} ref={scrollRef}>
      {data.length > 0 ? (
        <View>
          <FlatList
            overScrollMode="never"
            removeClippedSubviews={true}
            ListHeaderComponent={
              <Header
                title={title}
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
                        <Text style={styles.nextGreen}>Previous </Text>
                      </TouchableOpacity>
                    ) : null}

                    <Text style={styles.next}> {page} ... </Text>
                    <Text style={styles.next}>{totalPages}</Text>
                    {page < totalPages ? (
                      <TouchableOpacity onPress={() => nextpage()}>
                        <Text style={styles.nextGreen}> Next</Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                </View>
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

export default NewsFeatures

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
})
