import React from 'react'
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import { ShortCard } from './ShortCard';

export const Stat = (props: any) => {

  const { item } = props;

  const {navigation, nameSlug,articleTitle,pageRouteName} = props;

  return (
    <View style={styles.slide}>
                   <ShortCard props title={item.title.toString()}
                excerpt = {item.excerpt.toString()}
                date = {item.date.toString()}
                mediaID = {item.media.toString()}
                totalData = {item.content}
                authorId = {item.author}
                navi = {navigation}
                nameSlug={item.categoryName}
                />
    </View>
  );
}
const styles = StyleSheet.create({
    slide: {
      flex:1,
      height:130
    },
    slideText: {
      width: '100%',
      textAlign: 'left',
      fontSize: 20,
    },
    topSmallNav:{
        flex:1,
        flexDirection:'row',
    },
    viewAll:{
        color:'#6e822b',
    },
    veiwContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingRight:10
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:10
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start'
    }
  });
export default Stat;