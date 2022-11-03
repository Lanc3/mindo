import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ShortCard } from "./ShortCard";

const ArticleListPreload = ({navigation, slugName,data,titleName,showAmount,pageRouteName}) => {

    return(
        <View style={{ flex: 1, paddingTop: 5 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
          ListHeaderComponent={
              <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{titleName}</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{navigation.navigate('MainDrawer',{screen :pageRouteName});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          }
          data={data}
          removeClippedSubviews={true}
          listKey={(item, index) => `D_key${index.toString()}`}
          keyExtractor={(item, index) => `_key${index.toString()}`}
          renderItem={({ item, index })=>{
            if(index > 0)
            return(
              <ShortCard props title={item.title.toString()}
                excerpt = {item.excerpt.toString()}
                date = {item.date.toString()}
                mediaID = {item.media.toString()}
                totalData = {item.content}
                authorId = {item.author}
                navi = {navigation}
                nameSlug={item.categoryName}
                />
            )
        }}
          />
        </View>
      );
    };

export default ArticleListPreload;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
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
        paddingHorizontal:10
    },
    viewAll:{
        color:'#6e822b',
        fontFamily: 'Lato_400Regular',
        fontSize:13,
    },
    veiwContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingRight:10
    },
    titleStyle:{
      fontFamily: 'Merriweather_700Bold',
      fontSize:16,
        paddingLeft:10
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start'
    }
});