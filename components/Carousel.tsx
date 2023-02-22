import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ShortCard } from './ShortCard'
import Single from './Single'
import Slide from './Slide'
import Stat from './Stat'

export const Carousel = (props: any) => {
  const { items, style, navigation, nameSlug, pageRouteName } = props

  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval

  const [interval, setInterval] = React.useState(1)
  const [intervals, setIntervals] = React.useState(1)
  const [width, setWidth] = React.useState(0)

  const init = (width: number) => {
    // initialise width
    setWidth(width)
    // initialise total intervals
    const totalItems = items.length
    // console.log(totalItems)
    setIntervals(Math.ceil(totalItems / itemsPerInterval))
  }

  const getInterval = (offset: any) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i
      }
      if (i == intervals) {
        return i
      }
    }
  }

  let bullets = []
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 1 : 0.4,
        }}
      >
        &bull;
      </Text>,
    )
  }
  const renderBullets = (style) => {
    if (style === 'slide') {
      return <View style={styles.bullets}>{bullets}</View>
    }
    if (style === 'single') {
      return <View></View>
    }
    if (style === 'stat') {
      return <View style={styles.statBullets}>{bullets}</View>
    }
    if (style === 'short') {
      return <View style={styles.statBullets}>{bullets}</View>
    }
  }
  const slideBulets = <View style={styles.bullets}>{bullets}</View>
  const statBullets = <View style={styles.statBullets}>{bullets}</View>
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width)
          setInterval(getInterval(data.nativeEvent.contentOffset.x))
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="normal"
      >
        {items.map((item: any, index: number, elements: Array<any>) => {
          switch (style) {
            case 'stat':
              return (
                <Stat
                  key={index}
                  item={item}
                  navigation={navigation}
                  nameSlug={nameSlug}
                  articleTitle={nameSlug}
                  pageRouteName={pageRouteName}
                />
              )
            case 'single':
              return <Single key={index} item={item} navigation={navigation} />
            case 'short':
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
            default:
              return (
                <Slide
                  key={index}
                  item={item}
                  navigation={navigation}
                  nameSlug={nameSlug}
                />
              )
          }
        })}
      </ScrollView>
      {renderBullets(style)}
    </View>
  )
}
const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 0,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: '#ebebeb',
    borderWidth: 0,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    marginTop: 0,
    marginBottom: 10,
    paddingBottom: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    height: 'auto',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
  },
  bullets: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 0,
    color: 'black',
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 40,
  },
  statBullets: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 0,
    color: 'black',
  },
})

export default Carousel
