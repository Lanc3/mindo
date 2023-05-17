import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { AdManager } from '../components/AdManager'
import ArticleListPreload from '../components/ArticleListPreload'
import Carousel from '../components/Carousel'
import CategorySnap from '../components/CategorySnap'
import { ECopy } from '../components/ECopy'
import Footer from '../components/Footer'
import InternetConnectionStatus from '../components/InternetConnectionStatus'
import LoadingView from '../components/LoadingView'
import Single from '../components/Single'
import SingleArticle from '../components/SingleArticle'
import SponsoredArticleList from '../components/SponsoredArticleList'
import { newGetPostsByCatSlug } from '../hooks/useResults'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = (props) => {
  //const [getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor] = useResults();
  const [latestNews, setlatestNews] = useState([])
  const [subscriberOnly, setSubscriberOnly] = useState([])
  const [comments, setComments] = useState([])
  const [sport, setSport] = useState([])
  const [feature, setFeature] = useState([])
  const [cartoon, setCartoon] = useState([])
  const [commercial, setCommercial] = useState([])
  const [sliderData, setSliderData] = useState([])
  const [motoring, setMotoring] = useState([])
  const [clinical, setClinical] = useState([])
  const [breakingNews, setBreakingNews] = useState([])
  const [interviews, setInterviews] = useState([])
  const [sponsoredContent, setSponsoredContent] = useState([])
  const [isLoaded, setIsLoading] = useState(false)
  const scrollRef = useRef()
  const [bgcolor, setBGColor] = useState('#fff')
  const [homeItems, setHomeItems] = useState([])
  const [firstSection, setFirstSection] = useState([])
  const [isFirstSectionLoaded,setIsFirstSectionLoaded] = useState(false)
  const [secondSection, setSecondSection] = useState([])
  const [isSecondSectionLoaded,setIsSecondSectionLoaded] = useState(false)
  const [thirdSection, setThirdSection] = useState([])
  const [isThirdSectionLoaded,setIsThirdSectionLoaded] = useState(false)
  const navigation = useNavigation()
  const [test,setTest] = useState([])
  const getContent = useCallback(async () => {
    try {
      const results = await Promise.all([
        newGetPostsByCatSlug('latest-news', 5, 1),
        newGetPostsByCatSlug('breaking-news', 4, 1),
        newGetPostsByCatSlug('comment', 5, 1),
      ])
      const finalData = await Promise.all(results.map((result) => result.posts))
      setSliderData(finalData[0])
      setBreakingNews(finalData[1])
      setComments(finalData[2])
    } catch (error) {}
    setFirstSection([
      { component: <AdManager selectedAd={'LDB_MOBILE'} sizeType={'SMALL'} /> },
      { component: <View></View> },
      { component: <View></View> },
      { component: <View style={styles.divider} /> },
      { component: <View></View> },
      { component: <View style={styles.divider} /> },
      {
        component: (
          <View style={styles.topSmallNav}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>Comment</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Editorial')
              }}
            >
              <View style={styles.veiwContainer}>
                <Text style={styles.viewAll}>View All</Text>
              </View>
            </TouchableOpacity>
          </View>
        ),
      },
      { component: <View></View> },
      { component: <AdManager selectedAd={'MPU'} sizeType={'BIG'} /> },
    ])
    setIsFirstSectionLoaded(true)
    //second section
    try {
      const results = await Promise.all([
        newGetPostsByCatSlug('interviews', 4, 1),
        newGetPostsByCatSlug('news-features', 5, 1),
        newGetPostsByCatSlug('clinical-news', 4, 1),

      ])
      const finalData = await Promise.all(results.map((result) => result.posts))
      setInterviews(finalData[0])
      setFeature(finalData[1])
      setClinical(finalData[2])
    } catch (error) {}
    setSecondSection([
      { component: <View></View> },
      { component: <ECopy navigation={props.navigation} /> },
      { component: <View></View> },
      { component: <View></View> },
    ])
    setIsSecondSectionLoaded(true)
    
    //third section
    try {
      const results = await Promise.all([
        newGetPostsByCatSlug('sport', 4, 1),
        newGetPostsByCatSlug('motoring', 1, 1),
        newGetPostsByCatSlug('cartoon', 1, 1),
        newGetPostsByCatSlug('commercial-feature', 1, 1),
        newGetPostsByCatSlug('subscriber-only', 3, 1),
        newGetPostsByCatSlug('sponsored-content', 3, 1),
        newGetPostsByCatSlug('subscriber-only', 3, 1),
      ])
      const finalData = await Promise.all(results.map((result) => result.posts))
      setSport(finalData[0])
      setMotoring(finalData[1])
      setCartoon(finalData[2])
      setCommercial(finalData[3])
      setTest(finalData[6])
      setSponsoredContent(finalData[5])
    } catch (error) {}
    
    setThirdSection([
      {
        component: (
          <View style={{paddingTop:10}}>
            <View style={styles.divider}></View> 
            <View style={styles.topSmallNav}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Life</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Life')
                }}
              >
                <View style={styles.veiwContainer}>
                  <Text style={styles.viewAll}>View All</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ),
      },
      { component: <View></View> },
      { component: <View></View> },
      {
        component: (
          <SingleArticle
            navigation={props.navigation}
            slugName={'book-review'}
            titleName={'Book Review'}
            showAmount={1}
            pageRouteName={'BookReview'}
          />
        ),
      },
      {
        component: (
          <SingleArticle
            navigation={props.navigation}
            slugName={'the-dorsal-view'}
            titleName={'The Dorsal View '}
            showAmount={1}
            pageRouteName={'TheDorsalView'}
          />
        ),
      },
      {
        component: (
          <SingleArticle
            navigation={props.navigation}
            slugName={'food-and-drink'}
            titleName={'Food and Drink'}
            showAmount={1}
            pageRouteName={'FoodAndDrink'}
          />
        ),
      },
      {
        component: (
          <SingleArticle
            navigation={props.navigation}
            slugName={'motoring'}
            titleName={'Motoring'}
            showAmount={1}
            pageRouteName={'Motoring'}
          />
        ),
      },
      { component: <View style={styles.divider} /> },
      { component: <View></View> },
      { component: <View></View> },
      { component: <View></View> },
     

      { component: <View></View> },
      { component: <View></View> },
      { component: <View></View> },
    ])
    setIsThirdSectionLoaded(true)


  }, [])

  useEffect(() => {
    getContent()
  }, [getContent])

  return (
    <SafeAreaView style={styles.container} ref={scrollRef}>

        <ScrollView removeClippedSubviews={true}>
          <InternetConnectionStatus />
          {isFirstSectionLoaded ? <FlatList
            overScrollMode="never"
            removeClippedSubviews={true}
            scrollEnabled={true}
            windowSize={10}
            data={firstSection}
            listKey={(item, index) => `outer_key${index.toString()}`}
            keyExtractor={(item, index) => `outer_key${index.toString()}`}
            renderItem={({ item, index }) => {
              if (index === 1) {
                return (
                  <Single
                    item={sliderData[0]}
                    navigation={props.navigation}
                    padding={0}
                  />
                )
              }
              if (index === 2) {
                return (
                  <ArticleListPreload
                    navigation={props.navigation}
                    slugName={'latest-news'}
                    data={sliderData}
                    titleName={'Latest'}
                    showAmount={5}
                    pageRouteName={'LatestNews'}
                  />
                )
              }
              if (index === 4) {
                return (
                  <ArticleListPreload
                    navigation={props.navigation}
                    slugName={'breaking-news'}
                    data={breakingNews}
                    titleName={'Breaking'}
                    showAmount={3}
                    pageRouteName={'BreakingNews'}
                  />
                )
              }
              if (index === 7) {
                return (
                  <Carousel
                    style="stat"
                    items={comments}
                    navigation={props.navigation}
                    nameSlug={'Comments'}
                  />
                )
              }
              return item.component
            }} /> : (
        <View style={{}}>
          <LoadingView indeterminate={true} />
        </View>
      ) }
      {isSecondSectionLoaded ? <FlatList
            overScrollMode="never"
            removeClippedSubviews={true}
            scrollEnabled={true}
            windowSize={10}
            data={secondSection}
            listKey={(item, index) => `outer_key${index.toString()}`}
            keyExtractor={(item, index) => `outer_key${index.toString()}`}
            renderItem={({ item, index }) => {
              if (index === 0) {
                return (
                  <ArticleListPreload
                    navigation={props.navigation}
                    slugName={'interviews'}
                    data={interviews}
                    titleName={'Interviews'}
                    showAmount={2}
                    pageRouteName={'LatestNews'}
                  />
                )
              }
              if (index === 2) {
                return (
                  <CategorySnap
                    navigation={props.navigation}
                    elements={feature}
                    title={'Features'}
                    route={'NewsFeatures'}
                    padding={20}
                  />
                )
              }
              if (index === 3) {
                return (
                  <CategorySnap
                    navigation={props.navigation}
                    elements={clinical}
                    title={'Clinical News'}
                    route={'ClinicalNews'}
                    padding={20}
                  />
                )
              }
              return item.component
            }} /> : (
        <View style={{}}>
          <LoadingView indeterminate={true} />
        </View>
      ) }
      {isThirdSectionLoaded ? <FlatList
            overScrollMode="never"
            ListFooterComponent={
              <View>
                <Footer
                  navi={props.navigation}
                  refS={scrollRef}
                  adSelected="MPU"
                  show={false}
                />
              </View>
            }
            removeClippedSubviews={true}
            scrollEnabled={true}
            data={thirdSection}
            windowSize={3}
            listKey={(item, index) => `outer_key${index.toString()}`}
            keyExtractor={(item, index) => `outer_key${index.toString()}`}
            renderItem={({ item, index }) => {
              if (index === 1) {
                
                return (
                  <Single
                    item={sport[0]}
                    navigation={props.navigation}
                    padding={20}
                  />
                )
              }
              if (index === 2) {
                return (
                  <Single
                    item={cartoon[0]}
                    navigation={props.navigation}
                    padding={20}
                  />
                )
              }
              if (index === 10) {
                return (
                  <Single
                    item={commercial[0]}
                    navigation={props.navigation}
                    padding={20}
                  />
                )
              }
              
              if (index === 11) {
                
                return(
              <SponsoredArticleList
                navigation={props.navigation}
                slugName={'subscriber-only'}
                titleName={'Subscriber Only Content'}
                showAmount={3}
                list={test}
                newss={"test"}
                pageRouteName={'SubscriberOnly'}
              />
                )
                
              }
              return item.component
            }} /> : (
        <View style={{}}>
          <LoadingView indeterminate={true} />
        </View>
      ) }
        </ScrollView>
     
    </SafeAreaView>
  )
}

export default HomeScreen
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
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
  titleStyle: {
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  divider: {
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 'auto',
    borderStyle: 'solid',
    marginHorizontal: 20,
  },
  topSmallNav: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  viewAll: {
    color: '#6e822b',
  },
  veiwContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  titleStyle: {
    paddingLeft: 10,
    fontFamily: 'Merriweather_700Bold',
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: '100%',
  },
})
