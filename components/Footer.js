import React, { useState } from 'react'
import {
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Svg, { Path } from 'react-native-svg'
import AccordionListItemFooter from './AccordionListItemFooter'
import MostReadSection from './MostReadSection'
export const Footer = (props) => {
  const [ad, setAd] = useState(props.adSelected)
  const show = props.show
  const [showMostReadIn, setShowMostRead] = useState(true)
  const selectedAd = props.adSelected

  const menuData = [
    {
      title: 'News',
      data: [
        { label: 'Latest', value: 'LatestNews' },
        { label: 'Breaking', value: 'BreakingNews' },
        { label: 'Features', value: 'NewsFeatures' },
        { label: 'Investigations', value: 'Investigations' },
        { label: 'Interviews', value: 'Interviews' },
        { label: 'Photo', value: 'PhotoNews' },
        { label: 'Conference', value: 'Conference' },
      ],
    },
    {
      title: 'Comment',
      data: [
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
      ],
    },
    {
      title: 'Clinical',
      data: [
        { label: 'Clinical News', value: 'ClinicalNews' },
        { label: 'Case Studies', value: 'CaseStudies' },
        { label: 'Research', value: 'Research' },
        { label: 'Feature', value: 'Feature' },
      ],
    },
    {
      title: 'Life',
      data: [
        { label: 'Cartoon', value: 'Cartoon' },
        { label: 'Book Review', value: 'BookReview' },
        { label: 'Food and Drink', value: 'FoodAndDrink' },
        { label: 'Motoring', value: 'Motoring' },
        { label: 'Sport', value: 'Sport' },
        { label: 'Finance', value: 'Finance' },
        { label: 'The Gander', value: 'TheGander' },
        { label: 'The Dorsal View', value: 'TheDorsalView' },
      ],
    },
    {
      title: 'Societies',
      data: [
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
        { label: 'INS', value: 'INSScreen' },
        { label: 'HAI', value: 'HAIScreen' },
      ],
    },
    {
      title: 'News Team',
      data: [
        { label: 'Catherine Reilly', value: 'CatherineReilly' },
        { label: 'Niamh Quinlan', value: 'NiamhQuinlan' },
        { label: 'David Lynch', value: 'DavidLynch' },
        { label: 'Paul Mullholand', value: 'PaulMulholland' },
        { label: 'Priscilla Lynch', value: 'PriscillaLynch' },
      ],
    },
    {
      title: 'Contact Us',
      data: [
        { label: 'About Us', value: 'AboutScreen' },
        { label: 'Privacy Policy', value: 'PrivacyScreen' },
        { label: 'Terms & Conditions', value: 'Terms' },
      ],
    },
  ]
  const goToLink = (value) => {
    props.navi.navigate(value)
  }
  const openURL = (url) => {
    Linking.openURL(url)
  }
  const MostREad = () => {
    if (show) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <MostReadSection
            navigation={props.navi}
            showAmount={4}
            mostReadAD={selectedAd}
            pageRouteName={'MostReadScreen'}
          />
        </View>
      )
    } else {
      return <View></View>
    }
  }
  return (
    <SafeAreaView style={styles.stat} overScrollMode="never">
      <SafeAreaView style={styles.drawerContainer} overScrollMode="never">
        <SafeAreaView style={styles.container} overScrollMode="never">
          <FlatList
            overScrollMode="never"
            removeClippedSubviews={true}
            ListHeaderComponent={<MostREad />}
            ListFooterComponent={
              <View style={styles.footerStyle}>
                <View style={styles.header}>
                  <TouchableOpacity>
                    <Svg width={160} height={30} viewBox="0 0 200 50">
                      <Path
                        d="M21.8,17.9c1.3,0,2.4,0.2,3.2,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.4c0.2,1,0.3,2.2,0.3,3.8v12.8
                                c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2.1,0.7v1c-0.6,0-1.4-0.1-2.6-0.1c-1.2,0-2.3-0.1-3.4-0.1c-1.1,0-2.3,0-3.4,0.1
                                c-1.1,0-1.9,0.1-2.5,0.1v-1c0.9,0,1.4-0.2,1.8-0.7c0.3-0.5,0.5-1.4,0.5-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.1-0.6-0.4-1-0.7-1.4
                                C20.3,20.1,19.7,20,19,20c-0.8,0-1.6,0.2-2.3,0.7c-0.7,0.5-1.3,1.1-1.7,2c-0.4,0.8-0.6,1.8-0.6,2.8v13.2c0,1.3,0.2,2.2,0.5,2.7
                                c0.3,0.5,0.9,0.7,1.8,0.7v1c-0.5,0-1.3-0.1-2.4-0.1c-1.1,0-2.1-0.1-3.3-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1
                                c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
                                c1.3,0,2.6-0.1,3.7-0.2c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.8-2.7,3.1-3.4C18.8,18.2,20.2,17.9,21.8,17.9z M36.1,17.9
                                c1.3,0,2.4,0.2,3.2,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.4c0.2,1,0.3,2.2,0.3,3.8v12.8c0,1.3,0.2,2.2,0.7,2.7
                                c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.1,0-2.3,0-3.4,0.1c-1.1,0-1.9,0.1-2.5,0.1v-1
                                c0.9,0,1.4-0.2,1.8-0.7c0.3-0.5,0.5-1.4,0.5-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.1-0.6-0.4-1-0.8-1.4c-0.4-0.3-1-0.5-1.8-0.5
                                c-1.2,0-2.3,0.5-3.2,1.6c-0.9,1.1-1.4,2.4-1.4,4l-0.2-2.9c0.9-1.9,2-3.2,3.4-3.8C32.9,18.2,34.4,17.9,36.1,17.9z"
                        fill="#fff"
                      />
                      <Path
                        d="M57.4,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C55.3,18.4,56.4,18.2,57.4,18z
                                M53.7,6.3c1.3,0,2.4,0.3,3.2,1C57.6,7.9,58,8.8,58,9.9c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C51.3,6.6,52.3,6.3,53.7,6.3z"
                        fill="#fff"
                      />
                      <Path
                        d="M80.1,17.9c1.3,0,2.4,0.2,3.3,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.3c0.2,0.9,0.4,2.2,0.4,3.8
                                v12.8c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.4,0-3.5,0.1
                                c-1.2,0-2,0.1-2.6,0.1v-1c0.9,0,1.6-0.2,2-0.7c0.4-0.5,0.6-1.4,0.6-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.2-0.6-0.4-1-0.9-1.4
                                c-0.4-0.3-1-0.5-1.9-0.5c-1.3,0-2.4,0.5-3.3,1.6c-0.9,1-1.4,2.4-1.4,3.9v13.2c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2,0.7v1
                                c-0.6,0-1.4-0.1-2.5-0.1c-1.1,0-2.2-0.1-3.4-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7
                                c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2
                                c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.9-2.8,3.2-3.4C76.9,18.2,78.4,17.9,80.1,17.9z"
                        fill="#fff"
                      />
                      <Path
                        d="M102.9,17.9c1.4,0,2.6,0.2,3.7,0.7c1.1,0.5,1.9,1.2,2.5,2.3l-0.6,0.5c-0.4-0.8-1-1.3-1.6-1.6
                                c-0.7-0.3-1.4-0.5-2.2-0.5c-1.6,0-2.9,0.9-3.8,2.8c-0.9,1.9-1.4,4.8-1.4,8.7c0,2.7,0.2,4.8,0.5,6.4c0.4,1.6,0.9,2.7,1.6,3.4
                                c0.7,0.7,1.5,1,2.4,1c1.1,0,2-0.4,2.9-1.3c0.9-0.9,1.3-2,1.4-3.5l0.2,1.7c-0.5,1.7-1.2,3-2.3,3.8c-1.1,0.9-2.4,1.3-4.2,1.3
                                c-1.9,0-3.5-0.5-5-1.4c-1.5-0.9-2.6-2.3-3.4-4.2c-0.8-1.9-1.2-4.4-1.2-7.4c0-2.9,0.5-5.3,1.4-7.1c0.9-1.9,2.2-3.3,3.8-4.2
                                C99,18.3,100.8,17.9,102.9,17.9z M115,5.9v32c0,1.4,0.2,2.5,0.7,3.2c0.4,0.7,1.2,1,2.4,1v1c-1-0.1-2-0.1-2.9-0.1
                                c-1.3,0-2.6,0-3.7,0.1c-1.2,0.1-2.2,0.3-3.2,0.5v-32c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
		                        c1.3,0,2.5-0.1,3.7-0.2C112.9,6.3,114,6.1,115,5.9z"
                        fill="#fff"
                      />
                      <Path
                        d="M132.2,17.9c2.3,0,4.3,0.4,6.1,1.3c1.7,0.9,3.1,2.2,4.1,4.1c1,1.9,1.5,4.4,1.5,7.5s-0.5,5.6-1.5,7.5
                                c-1,1.9-2.3,3.3-4.1,4.1c-1.7,0.9-3.8,1.3-6.1,1.3c-2.2,0-4.2-0.4-6-1.3c-1.8-0.9-3.1-2.2-4.1-4.1c-1-1.9-1.5-4.4-1.5-7.5
                                s0.5-5.7,1.5-7.5c1-1.9,2.4-3.3,4.1-4.1C128,18.3,130,17.9,132.2,17.9z M132.2,18.8c-1.3,0-2.3,0.9-3.2,2.8
                                c-0.9,1.9-1.3,4.9-1.3,9.2c0,4.2,0.4,7.3,1.3,9.2c0.9,1.9,1.9,2.8,3.2,2.8c1.3,0,2.4-0.9,3.2-2.8c0.8-1.9,1.3-4.9,1.3-9.2
                                c0-4.2-0.4-7.3-1.3-9.2C134.6,19.8,133.5,18.8,132.2,18.8z"
                        fill="#fff"
                      />
                      <Path
                        d="M152.1,36.4c1.2,0,2.2,0.3,2.9,1c0.7,0.6,1.1,1.5,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.7,0.6-1.7,1-2.9,1
		                        c-1.2,0-2.2-0.3-2.9-1c-0.7-0.6-1.1-1.5-1.1-2.7c0-1.1,0.4-2,1.1-2.7C149.9,36.8,150.9,36.4,152.1,36.4z"
                        fill="#fff"
                      />
                      <Path
                        d="M169.5,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C167.5,18.4,168.5,18.2,169.5,18z
                                M165.8,6.3c1.3,0,2.4,0.3,3.2,1c0.8,0.6,1.2,1.5,1.2,2.7c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C163.4,6.6,164.5,6.3,165.8,6.3z"
                        fill="#fff"
                      />
                      <Path
                        d="M186.8,17.9c2.8,0,5,0.8,6.6,2.5c1.6,1.6,2.4,4.3,2.4,8.1h-15.6l-0.1-0.9h9.7c0-1.6-0.1-3-0.3-4.3
                                c-0.2-1.3-0.6-2.4-1-3.2c-0.5-0.8-1.1-1.2-1.9-1.2c-1.1,0-2,0.7-2.8,2.1c-0.8,1.4-1.2,3.7-1.4,6.9l0.1,0.3c0,0.4-0.1,0.8-0.1,1.2
                                c0,0.4,0,0.8,0,1.3c0,2.2,0.3,4,0.9,5.3c0.6,1.4,1.4,2.4,2.4,3c0.9,0.6,1.9,0.9,2.9,0.9c0.9,0,2-0.2,3.1-0.7
                                c1.1-0.5,2.2-1.5,3.2-3.1l0.9,0.3c-0.4,1.2-1,2.4-1.8,3.5c-0.8,1.1-1.9,2.1-3.1,2.8c-1.3,0.7-2.8,1.1-4.6,1.1
                                c-2.2,0-4.1-0.5-5.7-1.4c-1.6-0.9-2.9-2.3-3.9-4.2c-0.9-1.9-1.4-4.2-1.4-7.1c0-2.9,0.5-5.4,1.5-7.4c1-2,2.4-3.4,4.1-4.4
                                C182.6,18.4,184.6,17.9,186.8,17.9z"
                        fill="#fff"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <Text style={styles.footerText}>
                  © The Medical Independent 2022. All rights reserved.
                </Text>
                <Text style={styles.footerText}>Built by Aaron Keating</Text>
              </View>
            }
            overScrollMode="never"
            removeClippedSubviews={true}
            scrollEnabled={true}
            data={menuData}
            listKey={(item, index) => `outer_key${index.toString()}`}
            keyExtractor={(item, index) => `outer_key${index.toString()}`}
            renderItem={({ item, index }) => {
              return (
                <AccordionListItemFooter title={item.title}>
                  <FlatList
                    scrollEnabled={false}
                    data={item.data}
                    listKey={(item2, index) => `inner_key${index.toString()}`}
                    keyExtractor={(item2, index) =>
                      `inner_key${index.toString()}`
                    }
                    renderItem={({ item, index }) => {
                      return (
                        <View style={styles.item}>
                          <TouchableOpacity
                            onPress={() => goToLink(item.value)}
                          >
                            <Text style={styles.titleSmall}>{item.label}</Text>
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  />
                </AccordionListItemFooter>
              )
            }}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  )
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
    width: '100%',
    height: '100%',
    zIndex: 155555000,
    minWidth: 10,
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
    fontSize: 26,
    fontFamily: 'Merriweather_400Regular',
    fontWeight: '400',
  },
  titleLeft: {
    margin: 10,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize: 26,
    fontFamily: 'Merriweather_300Light',
    fontWeight: '400',
    paddingTop: 50,
  },
  titleSmall: {
    margin: 1,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    fontWeight: '400',
    paddingTop: 10,
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
  iconStyle: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  logoutStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 4,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
  divider: {
    borderBottomColor: '#6c757d',
    borderBottomWidth: 1,
  },
  padding: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  otherLinks: {
    paddingTop: 40,
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
    marginVertical: 5,
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
    marginVertical: -20,
  },
  placeholderStyle: {
    margin: 0,
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize: 23,

    fontWeight: '400',
    marginVertical: -10,
  },
  selectedTextStyle: {
    fontSize: 14,
    backgroundColor: 'black',
    color: 'white',
    height: 15,
    marginVertical: -10,
    paddingLeft: 0,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemStyle: {
    backgroundColor: 'black',
    color: 'white',
  },
  footerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  footerText: {
    color: '#767676',
    fontSize: 13,
    marginBottom: 10,
  },
  stat: {
    paddingTop: 10,
  },
  backToTop: {
    paddingTop: 50,
    alignSelf: 'center',
  },
})

export default Footer
