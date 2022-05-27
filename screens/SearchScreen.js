import React,{useEffect,useState,useCallback,useRef} from "react";
import { TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import SearchItem from "../components/SearchItem";
import Footer from "../components/Footer";
import { AdManager } from "../components/AdManager";
const SearchScreen = ({navigation,props,route}) => {
  const {search_term,listData} = route.params;
    const scrollRef = useRef();

    return(
        <FlatList
          ListHeaderComponent={
            <View>
              <AdManager selectedAd={"LDB_MOBILE_PUBLIC"} sizeType={"SMALL"}/>
              <View style={styles.titleContainer}>
                <Text style={styles.pageTitle}>Search Results For: </Text>
                <Text style={styles.nextGreen}>{search_term}</Text>
              </View>
              
            </View>

        }
          ListFooterComponent={
            <View>
          <Footer navi={navigation} refS={scrollRef}/>
            </View>
          }
          data={listData}
          keyExtractor={item => ""+item.ID}
          renderItem={({ item, index })=>{
 
            return(
              
              <SearchItem title={item.post_title.toString()} itemDate={item.post_date_gmt.toString()} htmlData={item.post_content.toString()} author={item.post_author.toString()}/>
            )
        }}
          />
      );
    };

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    pageTitle:{
      paddingTop:10,
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
      paddingTop:10,
      fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
        margin:5,
      color:'#6e822b',
    },
    titleContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
    }
});