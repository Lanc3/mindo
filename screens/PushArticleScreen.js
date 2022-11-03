import { FontAwesome } from '@expo/vector-icons';
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, Share, StyleSheet, Text, View } from 'react-native';
import { AdManager } from "../components/AdManager";
import ContentRender from '../components/ContentRender';
import Footer from '../components/Footer';
import { useCounter } from '../components/GlobalContext';

export default function PushArticleScreen({navigation,props,route}) {
  const {categoryName,author,content,media,title,date} = route.params.data;
const scrollRef = useRef();
const [popUpState, setPopUpState] = useState(false);
const handleModal = () => setPopUpState(() => !popUpState);
const { count, increment, decrement } = useCounter();

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'React Native | A framework for building native apps using React',
    });
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
    alert(error.message);
  }
};

  return (
    <SafeAreaView style={styles.container}>
<FlatList
        ListHeaderComponent={
          <View style={styles.scrollView}  ref={scrollRef}>
      <AdManager selectedAd={"ICS_MPU"} sizeType={"SMALL"}/>
      <Text style={styles.greenTitle}>{categoryName}</Text>
      <Text style={styles.title} numberOfLines={3}>{title}</Text>
      <View style={styles.subTitle}>
      <Text style={{paddingLeft:10}}>By </Text>
      <Text style={{color:'black'}}>{author} - </Text>
        <Text>{date}</Text>
      </View>
      <View>
      </View>
      <View style={styles.imageContainer}>
      
      <View style={styles.shareButton}>
      <Text style={{color:'#6e822b',padding:5}}>Share to:</Text>
      <View style={styles.spacer}>
                <FontAwesome.Button  name="twitter"size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="facebook-square" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="linkedin-square" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="instagram" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
      </View>
      </View>

      </View>
        }
        ListFooterComponent={
        <View>
          <ContentRender htmlData={content} newHeight={1800}/>
          <Footer navi={navigation} refS={scrollRef} adSelected="MPU"/>
        </View>}
      data={[]}
      listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index })=>{}}/>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      fontSize:20,
      height:100,
      width:windowWidth,
      flex: 1,
      color:'#000',
      backgroundColor:'#fff'
    },
    title:{
      fontSize:25,
      fontWeight:'bold',
      justifyContent:'center',
      padding:5,
    },
    subTitle:{
      flex:1,
      flexDirection:'row',
    },
    image:{
      width: windowWidth,
      height:300,
      resizeMode: 'contain',
    },
    imageContainer:{
    },
    scrollView: {
      marginHorizontal: 0,
    },
    shareButton:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start'
    },
    shareText:{
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    },
    greenTitle:{
      color:'#6e822b',
      paddingTop:10,
      paddingLeft:10,
  },
    spacer:{
    }
  });