import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AdManager } from "./AdManager";
import Carousel from "./Carousel";
import { ShortCard } from "./ShortCard";
const CategorySnap = ({navigation, elements,title,route}) => {



    return(
        <View style={{ flex: 1, paddingTop: 5 }}>
        <View style={styles.divider}></View>
                 <View style={styles.topSmallNav}>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('MainDrawer',{screen :route});}}>
            <View style={styles.veiwContainer}>
              <Text style={styles.viewAll}>View All</Text>
            </View>
        </TouchableOpacity>
</View>
<Carousel
        style='single'
        items={elements}
        navigation={navigation}
        nameSlug={"Comment"}
        />
              <ShortCard props title={elements[1].title.toString()}
                excerpt = {elements[1].excerpt.toString()}
                date = {elements[1].date.toString()}
                mediaID = {elements[1].media.toString()}
                totalData = {elements[1].content}
                authorId = {elements[1].author}
                navi = {navigation}
                nameSlug={elements[1].categoryName}
                />
                <ShortCard props title={elements[2].title.toString()}
                excerpt = {elements[2].excerpt.toString()}
                date = {elements[2].date.toString()}
                mediaID = {elements[2].media.toString()}
                totalData = {elements[2].content}
                authorId = {elements[2].author}
                navi = {navigation}
                nameSlug={elements[2].categoryName}
                />
                <ShortCard props title={elements[3].title.toString()}
                excerpt = {elements[3].excerpt.toString()}
                date = {elements[3].date.toString()}
                mediaID = {elements[3].media.toString()}
                totalData = {elements[3].content}
                authorId = {elements[3].author}
                navi = {navigation}
                nameSlug={elements[3].categoryName}
                />
                <AdManager selectedAd={"LDB_MOBILE_PRIVATE"} sizeType={"SMALL"}/>
        </View>
      );
    };

export default CategorySnap;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
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
    },
    topSmallNav:{
        flex:1,
        flexDirection:'row',
        paddingBottom:20
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
        justifyContent:'flex-start',
      

    },
    divider:{
      color:'black',
      borderBottomWidth:1,
      borderBottomColor:'black',
      width:windowWidth-10,
      borderStyle:'solid',
      marginLeft:5,
      paddingVertical:2
    },
});