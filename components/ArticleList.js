import React,{useEffect,useState,useCallback} from "react";
import { Image,TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import { ShortCard } from "./ShortCard";
import {getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor} from '../hooks/useResults'
import LoadingView from '../components/LoadingView';
import { AdBlockBig } from "./AdBlockBig";

const ArticleList = ({navigation, slugName,list,titleName,showAmount,pageRouteName}) => {
    //const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState(titleName);
    const [slug,setSlug] = useState(slugName);

    const getContent = useCallback(async() =>{
        try{
          setLoading(0.25);
            const total = await fetchApiData(slug);//getting total pages per slug
            setTotalPages(total)
            const newArray = [];
            for(let i = 0;i < showAmount;i++)
            {
                newArray.push(list[i]);
            }
            setData(newArray);
            setLoading(0.6);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(1);
        };

    },[page]);

     useEffect(() => {
      getContent();
      }, [getContent]);
      const ad = `<!-- PCDSI MPU [iframe] -->
      <script type="text/javascript">
      var rnd = window.rnd || Math.floor(Math.random()*10e6);
      var pid542443 = window.pid542443 || rnd;
      var plc542443 = window.plc542443 || 0;
      var abkw = window.abkw || '';
      var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=542443;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542443+';place='+(plc542443++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
      document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
      </script>`;
    return(
        <View style={{ flex: 1, paddingTop: 5 }}>
      {data.length > 0 ? (
        <View>
        <FlatList
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
          keyExtractor={item => ""+item.date+item.id.toString()}
          renderItem={({ item, index })=>{
            if(index === 3){
                return(<AdBlockBig htmlData={ad}/>)
            }
            return(
              <ShortCard props title={item["title"]["rendered"].toString()}
                excerpt = {item["excerpt"]["rendered"].toString()}
                date = {item["date"].toString()}
                mediaID = {item["featured_media"]}
                totalData = {item["content"]["rendered"]}
                authorId = {item["author"]}
                navi = {navigation}
                nameSlug={title}
                />
            )
        }}
          />
          </View>
          ) : (
          <View>
            <LoadingView loading={1}/>
          </View>
          )}
        </View>
      );
    };

export default ArticleList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
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