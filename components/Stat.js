import { Dimensions, StyleSheet, View } from 'react-native';
import { HalfCard } from './HalfCard';
export const Stat = (props: any) => {

  const { item,nextItem } = props;

  const {navigation,articleTitle,pageRouteName} = props;
  return (
    <View style={styles.halfContainer}>
      <View style={styles.slide}>
      <HalfCard props title={item.title.toString()}
     excerpt = {item.excerpt.toString()}
                date = {item.date.toString()}
                mediaID = {item.media.toString()}
                totalData = {item.content}
                authorId = {item.author}
                navi = {navigation}
                nameSlug={item.categoryName}
                />
      </View>{ nextItem ?
      <View style={styles.slide}>
      <HalfCard props title={nextItem.title.toString()}
     excerpt = {nextItem.excerpt.toString()}
                date = {nextItem.date.toString()}
                mediaID = {nextItem.media.toString()}
                totalData = {nextItem.content}
                authorId = {nextItem.author}
                navi = {navigation}
                nameSlug={nextItem.categoryName}
                />
      </View>
        :
      <View style={styles.slide}>

      </View> }
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    slide: {
      width:windowWidth/2,
      height:150,
      paddingBottom:10
    },
    halfContainer:{
      flex:1,
      flexDirection:"row",
    
      height:180,
      paddingBottom:10
    }
  });
export default Stat;