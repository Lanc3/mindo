import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
export const Stat = (props: any) => {

  const { item,nextItem } = props;

  const {navigation,articleTitle,pageRouteName} = props;
  return (
    <View style={styles.halfContainer}>
      <View style={styles.slide}>
      <View style={styles.shortContainer}>
                    <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri:item.media.toString() }}/>
                    </View>
                    <View style={styles.contentContainer}>
                    <Text style={styles.greenTitle}>{item.categoryName}</Text>
                    <Text style={styles.titleStyle}>{item.title.toString()}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.by}>By - </Text>
                        <Text style={styles.by}>{item.author}</Text>
                    </View>
                    <Text >{item.date.toString()}</Text>
                    </View>
                    
                </View>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    slide: {
      width:windowWidth,
      height:140,
      paddingBottom:15
    },
    halfContainer:{
      flex:1,
      flexDirection:"row",
    
      height:140,
    },
    container:{
      backgroundColor:'#fff',
      paddingTop:10,
      paddingBottom:10,
      paddingHorizontal:10,
     
  },
  separators:{
      borderBottomColor:'#eaeaea',
      borderBottomWidth:1,
      marginRight:10,
      marginLeft:10,
      height:1
  },
  by:{
      fontFamily: 'Lato_400Regular',
      fontWeight:'bold',
      fontSize:15,
      color:'black'
  },
  spacer:{
      padding:10
  },
  cardStyle:{
      minWidth:'70%',
      paddingLeft:-10,
      margin:10,
      elevation:12,
  },
  divider:{
      backgroundColor:'#000',
      margin:15
  },
  content:{
      paddingLeft:0,
  },
  titleStyle:{

      fontFamily: 'Merriweather_300Light',
      fontSize:15
  },
  surface: {
      elevation: 1,
  },
  containImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    height:3200,
    flex: 1,
    color:'#000'
  },
  cardEnd:{
     flex:1,
     flexDirection:'row',
     marginBottom:10,
     marginTop:10,
     alignItems:'flex-end'
  },
  author:{
      fontWeight:'bold'
  },
  render:{
      paddingBottom:10
  },
  dateS:{
      justifyContent:'center',
      color:'#000'
  },
  image:{
  width:'90%',
  height:'90%',
  margin:10,
  },
  greenTitle:{
      color:'#6e822b',
      paddingTop:5,
      fontFamily: 'Lato_400Regular',
      fontSize:13,
     
  },
  footer:{
      flex:1,
      flexDirection:'row',
      height:20,
      width:'100%'
  },
  shortContainer:{
      flex:3,
      flexDirection:'row',
      justifyContent:'flex-start',
      paddingHorizontal:10,
  },
  imageContainer:{
      flex:1,
      justifyContent:'flex-start'
  },
  contentContainer:{
      flex:2,
      justifyContent:'flex-start',
      paddingLeft:10
  }
  });
export default Stat;