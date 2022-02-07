import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableHighlight
} from 'react-native';
import Svg, { Path } from "react-native-svg";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OtherSites } from './components/OtherSites';
import { SocialContent } from './components/SocialContent';
import { Avatar, Button, Card,Surface ,Title,IconButton, Paragraph,Divider } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

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
    { label: 'Conference', value: 'SocietyNews' },
  ];
  const Comment = [
    { label: 'Editorial', value: 'Editorial' },
    { label: 'Medico-Legal', value: 'BreakingNews' },
    { label: 'Dr Paddy Barrett', value: 'DrPaddy' },
    { label: 'Dr Neasa Conneally', value: 'DrNeasa' },
    { label: 'Dr Gabrielle Colleran', value: 'Interviews' },
    { label: 'Dr Michael Conroy', value: 'DrMichael' },
    { label: 'Dr Lucia Gannon', value: 'DrLucia' },
    { label: 'Dr Pat Harrold', value: 'DrPat' },
    { label: 'Prof Brendan Kelly', value: 'ProfBrendan' },
    { label: 'Prof Seamus O’Mahony', value: 'ProfSeamus' },
    { label: 'Dr Christine O’Malley', value: 'DrChristine' },
    { label: 'George Winter', value: 'GeorgeWinter' },
  ];
  const Life = [
    { label: 'Cartoon', value: 'LatestNews' },
    { label: 'Book Review', value: 'BreakingNews' },
    { label: 'Food and Drink', value: 'NewsFeatures' },
    { label: 'Motoring', value: 'Investigations' },
    { label: 'Sport', value: 'Interviews' },
    { label: 'Finance', value: 'PhotoNews' },
    { label: 'The Gander', value: 'SocietyNews' },
    { label: 'The Dorsal View', value: 'SocietyNews' },
  ];
  const Clinical = [
    { label: 'Clinical News', value: 'LatestNews' },
    { label: 'Case Studies', value: 'BreakingNews' },
    { label: 'Research', value: 'NewsFeatures' },
    { label: 'Feature', value: 'Investigations' },
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
    { label: 'IOS', value: 'NewsFeatures' },
  ];
  const links = [
    { label: 'About Us', value: 'CatherineReilly' },
    { label: 'Privacy Policy', value: 'DavidLynch' },
    { label: 'Terms & Conditions', value: 'PaulMulholland' },
  ];
  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const onItemParentPress = (key) => {
    const filteredMainDrawerRoutes = props.drawerItems.find((e) => {
      return e.key === key;
    });
    if (filteredMainDrawerRoutes.routes.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes.routes[0];
      props.navigation.toggleDrawer();
      props.navigation.navigate(selectedRoute.nav, {
        screen: selectedRoute.routeName,
      });
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('userProfile');
      props.navigation.navigate('MainDrawer',{screen :'SignInScreenlogout'});
      return true;
    } catch (exception) {
      setError('Error deleting data');
      return false;
    }
  };
  const goToLink =(value) => {
    console.log(value)
    props.navigation.navigate('MainDrawer',{screen :value});
  };
  const expandable = <Icon name={"chevron-down"} color={'#6e822b'} size ={25} />;

  const goToGallery =() => {
    props.navigation.navigate('MainDrawer',{screen :'GalleriesScreen'});
};
const goToClassifieds =() => {
  props.navigation.navigate('MainDrawer',{screen :'GalleriesScreen'});
};
const goToSponsored =(value) => {
  console.log(value)
  props.navigation.navigate('MainDrawer',{screen :'SponsoredScreen'});
};
const goToAdvertise =() => {
  props.navigation.navigate('MainDrawer',{screen :'AdvertiseScreen'});
};
const goToPrivacy =() => {
  props.navigation.navigate('MainDrawer',{screen :'GalleriesScreen'});
};
const goToTerms =() => {
  props.navigation.navigate('MainDrawer',{screen :'GalleriesScreen'});
};

  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map((parent) => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => {
                onItemParentPress(parent.key);
              }}>
              <View style={styles.parentItem}>
                <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
                <View style={styles.bottom}> 
                  {parent.isExpandable ? expandable : null}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {renderLogoutBtn()}
      </View>
    );
  }

  function renderFilteredItemsDrawer() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => toggleMainDrawer()}
          style={styles.backButtonRow}>
          <Icon name={"keyboard-return"} color={'#6e822b'} size ={25} />
          <Text style={[styles.backButtonText, styles.title]}>{'BACK'}</Text>
        </TouchableOpacity>
        {filteredItems.routes.map((route) => {
          return (
            <TouchableOpacity
              key={route.routeName}
              testID={route.routeName}
              onPress={() =>
                props.navigation.navigate(route.nav, {
                  screen: route.routeName,
                })
              }
              style={styles.item}>
              <Text style={styles.title}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  function renderLogoutBtn() {
    return (
      <View>
          <View style={styles.otherLinks}>
            <View>
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
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'News' : 'News'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={Comment}setIsFocus
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Comment' : 'Comment'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={Life}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Life' : 'Life'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={Clinical}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Clinical' : 'Clinical'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={team}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'News Team' : 'News Team'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={soc}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Scocieties' : 'Scocieties'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          containerStyle={styles.selectedTextStyle}
          selectedStyle={styles.selectedTextStyle}
          data={links}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Quick Links' : 'Quick Links'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            goToLink(item.value)
          }}
        />
      </SafeAreaView>
      {/* <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.centered}>

        </View>
        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </SafeAreaView> */}
      <View>
          <View style={styles.otherLinks}>
            <View>
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
    zIndex: 155555000,
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
    margin: 1,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize:16,
    fontFamily:'sans-serif',
    fontWeight:"400",
    paddingTop:10,
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
    paddingTop:40
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
  }
});

export default CustomDrawerContent;

