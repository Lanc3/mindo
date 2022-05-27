import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { OtherSites } from './components/OtherSites';
import { SocialContent } from './components/SocialContent';
import AccordionListItem from './components/AccordionListItem';

import SearchBar from './components/SearchBar';

function CustomDrawerContent(props) {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: 'Latest News', value: 'LatestNews' },
    { label: 'Breaking News', value: 'BreakingNews' },
    { label: 'News Features', value: 'NewsFeatures' },
    { label: 'Investigations', value: 'Investigations' },
    { label: 'Interviews', value: 'Interviews' },
    { label: 'Photo News', value: 'PhotoNews' },
    { label: 'Conference', value: 'Conference' },
  ];
  const Comment = [
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
  ];
  const Life = [
    { label: 'Cartoon', value: 'Cartoon' },
    { label: 'Book Review', value: 'BookReview' },
    { label: 'Food and Drink', value: 'FoodAndDrink' },
    { label: 'Motoring', value: 'Motoring' },
    { label: 'Sport', value: 'Sport' },
    { label: 'Finance', value: 'Finance' },
    { label: 'The Gander', value: 'TheGander' },
    { label: 'The Dorsal View', value: 'TheDorsalView' },
  ];
  const Clinical = [
    { label: 'Clinical News', value: 'ClinicalNews' },
    { label: 'Case Studies', value: 'CaseStudies' },
    { label: 'Research', value: 'Research' },
    { label: 'Feature', value: 'Feature' },
  ];
  const team = [
    { label: 'Catherine Reilly', value: 'CatherineReilly' },
    { label: 'David Lynch', value: 'DavidLynch' },
    { label: 'Paul Mullholand', value: 'PaulMulholland' },
    { label: 'Priscilla Lynch', value: 'PriscillaLynch' },
  ];
  const soc = [
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
  ];
  const links = [
    { label: 'About Us', value: 'CatherineReilly' },
    { label: 'Privacy Policy', value: 'DavidLynch' },
    { label: 'Terms & Conditions', value: 'PaulMulholland' },
  ];


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

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView style={styles.container}>
        <AccordionListItem title={'News'}>
        <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={item => item.label}
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
        <AccordionListItem title={'Comment'}>
        <FlatList
        scrollEnabled={false}
        data={Comment}
        keyExtractor={item => item.label}
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
        <AccordionListItem title={'Clinical'}>
        <FlatList
        scrollEnabled={false}
        data={Clinical}
        keyExtractor={item => item.label}
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
        <AccordionListItem title={'Life'}>
        <FlatList
        scrollEnabled={false}
        data={Life}
        keyExtractor={item => item.label}
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
        <AccordionListItem title={'Societies'}>
        <FlatList
        scrollEnabled={false}
        data={soc}
        keyExtractor={item => item.label}
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
        <AccordionListItem title={'News Team'}>
        <FlatList
        scrollEnabled={false}
        data={team}
        keyExtractor={item => item.label}
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
        <SearchBar navi={props.navigation}/>
      </SafeAreaView>
      <View>
          <View style={styles.otherLinks}>
            <View>
            <TouchableHighlight onPress={() => goToLogin()}>
                <Text style={styles.titleSmall}>
                  Login
                </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToGallery()}>
                <Text style={styles.titleSmall}>
                  Gallery
                </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => goToClassifieds()}>
              <Text style={styles.titleSmall}>
              Classifieds
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
          <View style={styles.divider}>
          <Text style={styles.titleLeft}>Related Sites</Text>
          <OtherSites></OtherSites>
          </View>
          <View style={styles.padding}>
          <SocialContent></SocialContent>
          </View>
      </View>
    </ScrollView>
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
  drawerContainer: {
    backgroundColor: '#000',
    width:'100%',
    height: '100%',
    zIndex: 100,
    minWidth:10
  },
  container: {
    flex: 1,
    zIndex: 1000,
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
    fontFamily:'sans-serif',
    fontWeight:"400",
  },
  titleLeft: {
    margin: 10,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize:26,
    fontFamily:'sans-serif',
    fontWeight:"400",
    paddingTop:50,
  },
  titleSmall: {
    color: '#F0F0F0',
    fontSize:16,
    fontFamily:'sans-serif',
    fontWeight:"400",
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
    fontFamily:'sans-serif',
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

