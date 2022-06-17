import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ContentRender from "../../components/ContentRender";
import { Footer } from "../../components/Footer";

const AdvertiseScreen = ({navigation}) => {
    const htmlData =
    `<h3>Contacts</h3>
    
<p>Below please find the advertising rates and mechanical data for <a href="http://greencrosspublishing.ie/">GreenCross Publishing’s</a> titles. If you have any questions regarding advertising, individual titles or if would like to find out about how we advertise, please contact:</p>
<h5><strong>Print Advertising</strong> – <strong>Graham Cooke</strong></h5>
<ul><li>Phone: 01 4410024</li><li>Mobile: 353 87 2222221</li><li>Email:&nbsp;<a href="mailto:graham@greenx.ie">graham@greenx.ie</a></li></ul>
<p></p>
<h5><strong>Digital Advertising</strong> – <strong>Gemma Tyrrell</strong></h5>
<ul><li>Mobile: 353 87 7883624</li><li>Email:&nbsp;<a href="mailto:gemma@greenx.ie">gemma@greenx.ie</a></li></ul>
<p></p>
<h5><strong>Recruitment &amp; Classifieds</strong> – <strong>Louis O’Hegarty</strong></h5>
<ul><li>Phone: 01 4410024</li><li>Email:&nbsp;<a href="mailto:louis@mindo.ie">louis@mindo.ie</a></li></ul>
<p></p>
  `
    const scrollRef = useRef();


    return(
      <View style={{ flex: 1 }} ref={scrollRef}>
      <FlatList
        ListHeaderComponent={<ContentRender htmlData={htmlData} newHeight={1800}/>}
        ListFooterComponent={<Footer navi={navigation} refS={scrollRef}/>}
      data={[]}
      listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index })=>{}}/>
      </View>
      );
    };

export default AdvertiseScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    pageTitle:{
        fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
        margin:5,
        alignSelf:'center'
    },
    image:{
      width: '100%',
      height:300,
      resizeMode: 'contain',
    },
    pageNav:{
      flexDirection:'row'
    },
    next:{
      fontSize:16
    },
    nextGreen:{
      fontSize:16,
      color:'#6e822b',
    }
});