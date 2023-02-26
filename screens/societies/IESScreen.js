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

const IESScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [sliderData, setSliderData] = useState([])
  const [loading, setLoading] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [title, setTitle] = useState('Irish Endocrine Society')
  const [slug, setSlug] = useState('ies')
  const [blurb, setBlurb] = useState('')
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
      setLoading(0.5)
      const response = await newGetPostsByCatSlug(slug, 10, page)
      setTotalPages(Math.ceil(response.totalPosts / 10))
      const [firstArray, secondArray] = splitArray(response.posts)
      setData(secondArray)
      setSliderData(firstArray)
      setBlurb(response.posts[0].categoryDescription)
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
                blurb={blurb}
                adType={'IES_LDB'}
                MPU_Ad={'IES_MPU'}
                navigation={navigation}
                data={sliderData}
                fullImage={
                  'https://www.medicalindependent.ie/wp-content/uploads/2022/02/mindo-ies-300x94-2.jpg'
                }
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
                <Footer
                  navi={navigation}
                  refS={scrollRef}
                  adSelected="IES_MPU"
                />
              </View>
            }
            data={data}
            listKey={(item, index) => `D_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            renderItem={({ item, index }) => {
              if (index === 3) {
                return <AdManager selectedAd={'IES_MPU'} sizeType={'BIG'} />
              } else if (index === 7) {
                return <AdManager selectedAd={'IES_LDB'} sizeType={'SMALL'} />
              }
              return (
                <ShortCard
                  props
                  LBD_Ad={'IES_LDB'}
                  MPU_Ad={'IES_MPU'}
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

export default IESScreen

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
