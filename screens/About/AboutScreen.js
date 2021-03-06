import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ContentRender from "../../components/ContentRender";
import { Footer } from "../../components/Footer";

const AboutScreen = ({navigation}) => {
    const htmlData =
    `<h1 class="main-title-text">About Mindo</h1><h3 id="about-us">Mindo</h3>

<p>Mindo (medicalindependent.ie) is Ireland’s only investigative medical news website for doctors, healthcare professionals and anyone with an interest in health issues.</p>
<p>Established in 2010, along with its sister publication The Medical Independent, our stated aim is to investigate and analyse the major issues affecting healthcare and the medical profession in Ireland. The Medical Independent has won a number of awards for its investigative journalism, and its stories are frequently picked up by national digital, broadcast and print media.</p>
<p>The Medical Independent is published by GreenCross Publishing. GreenCross Publishing is a healthcare publisher specialising in news gathering, clinical journals and educational websites aimed at Irish healthcare professionals.</p>
<p>The Medical Independent is Ireland’s only investigative medical newspaper. Established in 2010, the publication, along with its sister website&nbsp;<a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.mindo.ie%2F%3Ffbclid%3DIwAR0mhAMIkAm03ozNirHpmSCjunwFCtX_d0AHG8AXJOtAUQPtNtz3se3CKJQ&amp;h=AT0vaECDlSzx5Gx7RdZ7q6R5A6joG7zDmu_EtS1NKMPK-3SCZ4JoQeAYOf4pLAU_EorP1EQxQvkZonlMhAIDRT2Az3bnqwDsWWuaK7BxpkpGZE0WeKwGamIg5LNeEGtk_UW_IUjy6MTLjxDZzn_6JPk" target="_blank" rel="noreferrer noopener">www.mindo.ie</a>, aims to investigate and analyse the major issues affecting healthcare and the medical profession in Ireland. </p>
<p>Ireland’s only investigative and breaking news source for healthcare and the medical profession in Ireland. Follow us on twitter @med-indonews</p>
<p>Along with The Medical Independent, GreenCross also runs Medi-learning, Irish Pharmacist, DocCPD, NurseCPD, Pharmacist CPD, Nursing In General Practice and Update.</p>
<h4 id="contact-details"><strong><a href="https://www.medicalindependent.ie/contact-us/">Contact Details</a></strong></h4>

<p><strong>Address:</strong> Top Floor, 111 Rathmines Road Lr, Dublin 6</p>
<p><strong>Tel:</strong> 353 (01) 441 0024</p>
<p><a href="http://greencrosspublishing.ie/">GreenCross Publishing</a> is owned by Graham Cooke.</p>`
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

export default AboutScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    pageTitle:{
        fontSize:26,
        
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