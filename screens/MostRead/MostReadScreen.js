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
import { newGetMostReadPosts } from '../../hooks/useResults'

const MostReadScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [title, setTitle] = useState('Most Read')

  const scrollRef = useRef()

  const nextpage = () => {
    if (page <= totalPages) setPage((prevPage) => prevPage + 1)
  }
  const perviouspage = () => {
    if (page > 0) setPage((prevPage) => prevPage - 1)
  }
  const getContent = useCallback(async () => {
    setLoading(0.25)
    try {
      setLoading(0.5)
      const response = await newGetMostReadPosts(10, page)
      setTotalPages(Math.ceil(response.totalPosts / 10))
      setData(response.posts)
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
            ListHeaderComponent={
              <Header
                title={title}
                adType={'LDB_MOBILE'}
                navigation={navigation}
                data={data}
              ></Header>
            }
            ListFooterComponent={
              <View>
                <View style={styles.pageNav}>
                  {page > 1 ? (
                    <TouchableOpacity onPress={() => perviouspage()}>
                      <Text style={styles.nextGreen}>Previous </Text>
                    </TouchableOpacity>
                  ) : null}

                  <Text style={styles.next}> {page} ... </Text>
                  <Text style={styles.next}>{totalPages}</Text>
                  <TouchableOpacity onPress={() => nextpage()}>
                    <Text style={styles.nextGreen}> Next</Text>
                  </TouchableOpacity>
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

export default MostReadScreen

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
    flexDirection: 'row',
  },
  next: {
    fontSize: 16,
  },
  nextGreen: {
    fontSize: 16,
    color: '#6e822b',
  },
})
