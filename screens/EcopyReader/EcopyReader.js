import { FontAwesome } from '@expo/vector-icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { AdManager } from '../../components/AdManager'
import { EcopyShortCard } from '../../components/EcopyShortCard'
import Footer from '../../components/Footer'
import ISSUURenderer from '../../components/ISSUURenderer'
import LoadingView from '../../components/LoadingView'
import SaveButton from '../../components/SaveFavoriteButton'
import { newGetPostsByCatSlug } from '../../hooks/useResults'
export default function EcopyReader({ navigation, props, route }) {
  const { content } = route.params
  const scrollRef = useRef()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [titles, setTitle] = useState('E-Copy')
  const [slug, setSlug] = useState('ecopy')
  const authorName = content.author
  const htmlData = content.content
  const imageData = content.media
  const title = content.title
  const date = content.date

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
      const response = await newGetPostsByCatSlug(slug, 10, page)
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        overScrollMode="never"
        removeClippedSubviews={true}
        ListHeaderComponent={
          <View style={styles.scrollView} ref={scrollRef}>
            <AdManager selectedAd={'ICS_MPU'} sizeType={'SMALL'} />
            <Text style={styles.greenTitle}>Ecopy</Text>
            <Text style={styles.titleStyle}>{content.title}</Text>
            <View style={styles.subTitle}>
              <Text style={{ paddingLeft: 10 }}>By </Text>
              <Text style={{ color: 'black' }}>{content.author} - </Text>
              <Text>{content.date}</Text>
            </View>
            <View></View>
            <View style={styles.imageContainer}></View>
          </View>
        }
        ListFooterComponent={
          <View>
            <ISSUURenderer htmlData={content.content} />
            <View style={styles.shareButton}>
              <View style={styles.spacer}>
                <FontAwesome.Button
                  name="twitter"
                  size={26}
                  color="#000"
                  backgroundColor="transparent"
                  onPress={onShare}
                ></FontAwesome.Button>
              </View>
              <View style={styles.spacer}>
                <FontAwesome.Button
                  name="facebook-square"
                  size={26}
                  color="#000"
                  backgroundColor="transparent"
                  onPress={onShare}
                ></FontAwesome.Button>
              </View>
              <View style={styles.spacer}>
                <FontAwesome.Button
                  name="linkedin-square"
                  size={26}
                  color="#000"
                  backgroundColor="transparent"
                  onPress={onShare}
                ></FontAwesome.Button>
              </View>
              <View style={styles.spacer}>
                <FontAwesome.Button
                  name="instagram"
                  size={26}
                  color="#000"
                  backgroundColor="transparent"
                  onPress={onShare}
                ></FontAwesome.Button>
              </View>
              <View style={styles.spacer}>
                <SaveButton
                  articleData={{
                    titles,
                    authorName,
                    htmlData,
                    imageData,
                    title,
                    date,
                  }}
                />
              </View>
            </View>
            {data.length > 0 ? (
              <View>
                <FlatList
                  overScrollMode="never"
                  removeClippedSubviews={true}
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
                        <AdManager
                          selectedAd={'LDB_MOBILE'}
                          sizeType={'SMALL'}
                        />
                      )
                    }
                    return (
                      <EcopyShortCard
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
            <Footer navi={navigation} refS={scrollRef} adSelected="MPU" />
          </View>
        }
        data={[]}
        listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index }) => {}}
      />
    </SafeAreaView>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    height: 100,
    width: windowWidth,
    flex: 1,
    color: '#000',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 5,
  },
  subTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: windowWidth,
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {},
  scrollView: {
    marginHorizontal: 0,
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  shareText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  greenTitle: {
    color: '#6e822b',
    paddingTop: 10,
    paddingLeft: 10,
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
  titleStyle: {
    fontFamily: 'Merriweather_400Regular',
    fontSize: 24,
    justifyContent: 'center',
    paddingLeft: 10,
  },
})
