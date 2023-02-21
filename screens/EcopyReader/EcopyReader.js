import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, Share, StyleSheet, View } from 'react-native'
import ISSUURenderer from '../../components/ISSUURenderer'
import { newGetPostsByCatSlug } from '../../hooks/useResults'
export default function EcopyReader({ navigation, props, route }) {
  const { content } = route.params
  const scrollRef = useRef()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(0)
  const [hideTitle, setHideTitle] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [titles, setTitle] = useState('E-Copy')
  const [slug, setSlug] = useState('ecopy')
  const authorName = content.author
  const htmlData = content.content
  const imageData = content.media
  const title = content.title
  const date = content.date
  const decodeString = (str) => {
    return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/^(-)+|(-)+$/g, '')
  }
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
    <View renderToHardwareTextureAndroid={true}>
      <View
        style={{ backgroundColor: 'black', height: '100%' }}
        renderToHardwareTextureAndroid={true}
      >
        <ISSUURenderer htmlData={content.content} />
      </View>
    </View>
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
  pageTitle: {
    fontSize: 26,
    fontFamily: 'Merriweather_700Bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pageBlurb: {
    fontSize: 14,
    fontFamily: 'Lato_400Regular',
    margin: 5,
    paddingBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
})
