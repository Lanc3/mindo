import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import {
  FlatList, Linking, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View
} from 'react-native';
import AccordionListItem from './components/AccordionListItem';
import SearchBar from './components/SearchBar';
import { SocialContent } from './components/SocialContent';

function CustomDrawerContent(props) {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

const menuData = [
    {
      title : "News",
      data :
      [
        { label: 'Latest News', value: 'LatestNews' },
        { label: 'Breaking News', value: 'BreakingNews' },
        { label: 'News Features', value: 'NewsFeatures' },
        { label: 'Investigations', value: 'Investigations' },
        { label: 'Interviews', value: 'Interviews' },
        { label: 'Photo News', value: 'PhotoNews' },
        { label: 'Conference', value: 'Conference' },
      ]
    },
    {
      title : "Comment",
      data :
      [
        { label: 'Editorial', value: 'Editorial' },
        { label: 'Dr Paddy Barrett', value: 'DrPaddy' },
        { label: 'Dr Neasa Conneally', value: 'DrNeasa' },
        { label: 'Dr Gabrielle Colleran', value: 'DrGabrielleScreen' },
        { label: 'Dr Michael Conroy', value: 'DrMichael' },
        { label: 'Dr Lucia Gannon', value: 'DrLucia' },
        { label: 'Dr Pat Harrold', value: 'DrPat' },
        { label: 'Prof Brendan Kelly', value: 'ProfBrendan' },
        { label: 'Prof Seamus O’Mahony', value: 'ProfSeamus' },
        { label: 'Dr Christine O’Malley', value: 'DrChristine' },
        { label: 'George Winter', value: 'GeorgeWinter' },
        { label: 'Medico-Legal', value: 'MedicoLegal' },
      ]
    },
    {
      title : "Clinical",
      data :
      [
        { label: 'Clinical News', value: 'ClinicalNews' },
        { label: 'Case Studies', value: 'CaseStudies' },
        { label: 'Research', value: 'Research' },
        { label: 'Feature', value: 'Feature' },
      ]
    },
    {
      title : "Life",
      data :
      [
        { label: 'Cartoon', value: 'Cartoon' },
        { label: 'Book Review', value: 'BookReview' },
        { label: 'Food and Drink', value: 'FoodAndDrink' },
        { label: 'Motoring', value: 'Motoring' },
        { label: 'Sport', value: 'Sport' },
        { label: 'Finance', value: 'Finance' },
        { label: 'The Gander', value: 'TheGander' },
        { label: 'The Dorsal View', value: 'TheDorsalView' },
      ]
    },
    {
      title : "Societies",
      data :
      [
        { label: 'ISR', value: 'ISR' },
        { label: 'CPI', value: 'CPI' },
        { label: 'ITS', value: 'ITS' },
        { label: 'ISG', value: 'ISG' },
        { label: 'ISMO', value: 'ISMO' },
        { label: 'PCDSI', value: 'PCDSI' },
        { label: 'IICN / INA', value: 'IICNINA' },
        { label: 'IES', value: 'IES' },
        { label: 'ICS', value: 'ICS' },
        { label: 'IOS', value: 'IOSScreen' },
      ]
    },
    {
      title : "News Team",
      data :
      [
        { label: 'Catherine Reilly', value: 'CatherineReilly' },
        { label: 'David Lynch', value: 'DavidLynch' },
        { label: 'Paul Mullholand', value: 'PaulMulholland' },
        { label: 'Priscilla Lynch', value: 'PriscillaLynch' },
      ]
    },

];
    const openPhone = (phoneNumber) =>{
      Linking.openURL(`tel:${phoneNumber}`)
    }
    const openURL = (url) =>{
      Linking.openURL(url)
    }
  const goToLink =(value) => {
    props.navigation.navigate('MainDrawer',{screen :value});
  };
  const expandable = <Icon name={"chevron-down"} color={'#6e822b'} size ={25} />;

  const goToGallery =() => {
    props.navigation.navigate('MainDrawer',{screen :'GalleriesScreen'});
};
const goToClassifieds =() => {
  props.navigation.navigate('MainDrawer',{screen :'ClassifiedsScreen'});
};
const goToSponsored =(value) => {
  props.navigation.navigate('MainDrawer',{screen :'SponsoredScreen'});
};
const goToAdvertise =() => {
  props.navigation.navigate('MainDrawer',{screen :'AdvertiseScreen'});
};
const goToPrivacy =() => {
  props.navigation.navigate('MainDrawer',{screen :'PrivacyScreen'});
};
const goToTerms =() => {
  props.navigation.navigate('MainDrawer',{screen :'Terms'});
};
const goToLogin = () =>{
  props.navigation.navigate('SignInScreen')
}
const goToAbout = () =>{
  props.navigation.navigate('MainDrawer',{screen :'AboutScreen'})
}
const openEmail = (address) =>{
  Linking.openURL(`mailto:${address}`)
}


  return (
    <View style={styles.drawerContainer}>
      <SafeAreaView style={styles.container}>
      <FlatList
       ListFooterComponent={
        <View>
          <View style={styles.otherLinks}>
            <View>
            <SearchBar navi={props.navigation}/>
            <TouchableHighlight onPress={() => goToLogin()}>
                <Text style={styles.titleSmall}>
                  Login
                </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToAbout()}>
                <Text style={styles.titleSmall}>
                  About Mindo
                </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToSponsored()}>
              <Text style={styles.titleSmall}>
              Sponsored
              </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToAdvertise()}>
              <Text style={styles.titleSmall}>
              Advertise
              </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToClassifieds()}>
              <Text style={styles.titleSmall}>
              Classifieds
              </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToPrivacy()}>
              <Text style={styles.titleSmall}>
              Privacy Statement
              </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToTerms()}>
              <Text style={styles.titleSmall}>
              Terms and Conditions
              </Text>
              </TouchableHighlight>
            </View>
          </View>
          
          <View style={styles.padding}>
          <SocialContent></SocialContent>
          </View>
      </View>
          }
      scrollEnabled={true}
      data={menuData}
      listKey={(item, index) => `outer_key${index.toString()}`}
      keyExtractor={(item, index) => `outer_key${index.toString()}`}
      renderItem={({item,index})=>{
        return(
          <AccordionListItem title={item.title}>
          <FlatList
          scrollEnabled={false}
          data={item.data}
          listKey={(item2, index) => `inner_key${index.toString()}`}
          keyExtractor={(item2, index) => `inner_key${index.toString()}`}
          renderItem={({ item, index })=>{
            return(
             <View style={styles.item}>
               <TouchableOpacity onPress={() => goToLink(item.value)}>
               <Text style={styles.titleSmall}>{item.label}</Text>
               </TouchableOpacity>
              </View>
            )
      }}
        />
          </AccordionListItem>
        )
      }}
      />


      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: '100%',
    flexDirection: 'row',
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 75,
  },
  listItem:{
    color:'#fff'
  },
  outlinksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
    color: "#444",
    fontSize: 14
  },
  drawerContainer: {
    backgroundColor: '#181818',
    width:'100%',
    height: '100%',
    zIndex: 100,
    minWidth:10
  },
  container: {

  },
  centered: {
    alignItems: 'center',
  },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6c757d',
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    margin: 5,
    color: '#F0F0F0',
    textAlign: 'center',
    fontSize:26,
    
    fontWeight:"400",
  },
  titleLeft: {
    margin: 10,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize:26,
    fontFamily: 'Merriweather_300Light',

    paddingTop:50,
  },
  titleSmall: {
    color: '#F0F0F0',
    fontSize:16,
    fontFamily: 'Lato_400Regular',

    paddingTop:10,
    paddingLeft:10,
  },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: '#6c757d',
    borderBottomWidth: 1,
  },
  backButtonText: {
    marginLeft: 10,
    color: '#6e822b',
  },
  iconStyle:{
    flexDirection:'row',
      paddingLeft:10
  },
  logoutStyle:{
    flex:1,
    flexDirection:'row',
      paddingLeft:10,
      paddingTop:4
  },
  bottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignSelf:'flex-end',
    alignContent:'flex-end',
    marginRight:10,
    marginBottom:10
  },
  divider:{
    borderBottomColor: '#6c757d',
    borderBottomWidth: 1,
  },
  padding:{
    paddingTop:30,
    paddingBottom:20
  },
  otherLinks:{
    paddingTop:40,
    marginLeft:5
  },
  containers: {
    backgroundColor: 'black',
    padding: 106,
  },
  dropdown: {
    height: 40,
    borderBottomColor: '#6c757d',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    marginVertical:5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    marginVertical:-20,
  },
  placeholderStyle: {
    margin: 0,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize:23,
    
    fontWeight:"400",
    marginVertical:-10,
  },
  selectedTextStyle: {
    fontSize: 14,
    backgroundColor:'black',
    color:'white',
    height:15,
    marginVertical:-10,
    paddingLeft:0
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemStyle:{
    backgroundColor:'black',
    color:'white'
  },
  item:{
  
  }
});

export default CustomDrawerContent;

