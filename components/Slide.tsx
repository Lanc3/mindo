import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { ArticleCard } from './ArticleCard';

export const Slide = (props: any) => {

  const { item } = props;

  const {navigation, nameSlug} = props;

  return (
      
    <View style={styles.slide}>
        
     
      <ArticleCard props title={item["title"]["rendered"].toString()}
                excerpt = {item["excerpt"]["rendered"].toString()}
                date = {item["date"].toString()}
                mediaID = {item["featured_media"]}
                totalData = {item["content"]["rendered"]}
                authorId = {item["author"]}
                navi = {navigation}
                nameSlug = {nameSlug}
                />
      
    </View>
  );
}
const styles = StyleSheet.create({
    slide: {
      paddingHorizontal:0,
      paddingBottom: 0,
      paddingTop: 0,
      flexBasis: '90%',
      flex: 1,
      maxWidth: '90%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      alignContent: 'center',
      justifyContent: 'center',
      height: 300,
    },
    slideText: {
      width: '100%',
      textAlign: 'left',
      fontSize: 20,
    },
  });
export default Slide;