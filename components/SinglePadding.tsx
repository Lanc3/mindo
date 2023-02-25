import { StyleSheet, View } from 'react-native'
import { SingleCard } from './SingleCard'

export const SinglePadding = (props: any) => {
  const { item, padding } = props

  const { navigation } = props

  return (
    <View style={styles.slide}>
      {!item ? (
        <View></View>
      ) : (
        <SingleCard
          props={props}
          title={item.title.toString()}
          excerpt={item.excerpt.toString()}
          date={item.date.toString()}
          mediaID={item.media.toString()}
          totalData={item.content}
          authorId={item.author}
          navi={navigation}
          nameSlug={item.categoryName}
          padding={padding}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 'auto',
    marginTop: 20,
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  topSmallNav: {
    flex: 1,
    flexDirection: 'row',
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
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})
export default SinglePadding
