import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AdManager } from "../components/AdManager";
import LoadingView from "../components/LoadingView";
import { ShortCard } from "../components/ShortCard";

const SearchScreen = ({props,route}) => {
    const {search_term,listData} = route.params;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState("Most Read");
    const navigation = useNavigation();
    const scrollRef = useRef();

    return(
        <View style={{ flex: 1 }} ref={scrollRef}>
      {listData? (
        <View>
        <FlatList
          ListHeaderComponent={
            <View style={styles.titleContainer}>
                <Text style={styles.pageTitle}>Search Results For: </Text>
                <Text style={styles.nextGreen}>{search_term}</Text>
              </View>
          }
          ListFooterComponent={
          <View>
          <Footer navi={navigation} refS={scrollRef}/>
          </View>
          }
          data={listData}
          listKey={(item, index) => `search_key${index.toString()}_${item.ID}`}
          keyExtractor={(item, index) => `search_key${index.toString()}`}
          renderItem={({ item, index })=>{
            if(index === 3){
                return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            }
            else if(index === 7){
              return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            }
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
          ) : (
            <View style={{}}>
                <LoadingView loadingProgress={loading}/>
            </View>
          )}
        </View>
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
    },
    nextGreen:{
      paddingTop:5,
      fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
      color:'#6e822b',
      },
      titleContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      }
});

