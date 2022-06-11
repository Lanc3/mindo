import React ,{useState}from "react";
import { StyleSheet,ActivityIndicator, TextInput, View, TouchableOpacity, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import {searchArticles} from '../hooks/useResults'
import { useNavigation } from '@react-navigation/native';
const SearchBar = ({navi}) => {
    const [clicked,setClicked] = useState(false);
    const [searchPhrase,setSearchPhrase] = useState("");
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const navigation = useNavigation();
    const callAPI = async(phrase)=>{
      setLoading(true);
      try{
          const response = await searchArticles(phrase,25,1);
          setData(response.posts);
      }catch(error){
          console.log(error)
      }finally{
        setLoading(false)
        navigation.navigate('SearchScreen',{search_term:phrase,listData:data});
      };
    }

  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search Mindo"
          placeholderTextColor="#404040"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onSubmitEditing={() =>{callAPI(searchPhrase)}}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {isLoading ?(
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#6e822b" />
        </View>
      ):(
        <TouchableOpacity
                onPress={() => {callAPI(searchPhrase)}}
            >
        <Feather
          name="search"
          size={20}
          color="white"
          style={{ marginLeft: 1 }}
        /></TouchableOpacity>)}
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: '#404040',

  },
  searchBar__unclicked: {
    paddingTop: 50,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color:'#fff',
    paddingBottom:10
  },
  loader:{
    paddingRight:20
  }
});