import React, {useState, useRef, useEffect} from 'react';
import { View, Text,FlatList ,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { SocialContent } from './SocialContent';
import Svg, { Path } from "react-native-svg";
import { FontAwesome } from '@expo/vector-icons';
import { AdBlock } from './AdBlock';
import AccordionListItem from './AccordionListItem';
export const Footer = ({navi,refS}) => {

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
    { label: 'Medico-Legal', value: 'MedicoLegal' },
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
    navi.navigate('MainDrawer',{screen :value});
  };
  const onPressTouch = () => {
    refS.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }
  const ad = `<!-- - LDB Mobile Public [iframe] -->
  <script type="text/javascript">
  var rnd = window.rnd || Math.floor(Math.random()*10e6);
  var pid542406 = window.pid542406 || rnd;
  var plc542406 = window.plc542406 || 0;
  var abkw = window.abkw || '';
  var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x90;setID=542406;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542406+';place='+(plc542406++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
  document.write('<ifr'+'ame src="'+absrc+'" width="300" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
  </script>
  <noscript>
  <iframe src="https://servedbyadbutler.com/adserve/;ID=183389;size=300x90;setID=542406;type=iframe" width="300" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no">
  <a href="https://servedbyadbutler.com/go2/;ID=183389;size=300x90;setID=542406" target="_blank"><img src="https://servedbyadbutler.com/adserve/;ID=183389;size=300x90;setID=542406;type=img;click=CLICK_MACRO_PLACEHOLDER" width="300" height="90"></a>
  </iframe>
  </noscript>`
  
  return (
    <View style={styles.stat}>
      <AdBlock htmlData={ad}/>
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
        <AccordionListItem title={'Team'}>
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
        <AccordionListItem title={'Society'}>
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
        <AccordionListItem title={'Quick Links'}>
        <FlatList
        scrollEnabled={false}
        data={links}
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
      </SafeAreaView>
      <View style={styles.footerStyle}>
      <View style={styles.header}>
        <TouchableOpacity
        >
        <Svg
                            width={160}
                            height={30}
                            viewBox="0 0 200 50"
                        >
                        <Path d="M21.8,17.9c1.3,0,2.4,0.2,3.2,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.4c0.2,1,0.3,2.2,0.3,3.8v12.8
                                c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2.1,0.7v1c-0.6,0-1.4-0.1-2.6-0.1c-1.2,0-2.3-0.1-3.4-0.1c-1.1,0-2.3,0-3.4,0.1
                                c-1.1,0-1.9,0.1-2.5,0.1v-1c0.9,0,1.4-0.2,1.8-0.7c0.3-0.5,0.5-1.4,0.5-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.1-0.6-0.4-1-0.7-1.4
                                C20.3,20.1,19.7,20,19,20c-0.8,0-1.6,0.2-2.3,0.7c-0.7,0.5-1.3,1.1-1.7,2c-0.4,0.8-0.6,1.8-0.6,2.8v13.2c0,1.3,0.2,2.2,0.5,2.7
                                c0.3,0.5,0.9,0.7,1.8,0.7v1c-0.5,0-1.3-0.1-2.4-0.1c-1.1,0-2.1-0.1-3.3-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1
                                c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
                                c1.3,0,2.6-0.1,3.7-0.2c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.8-2.7,3.1-3.4C18.8,18.2,20.2,17.9,21.8,17.9z M36.1,17.9
                                c1.3,0,2.4,0.2,3.2,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.4c0.2,1,0.3,2.2,0.3,3.8v12.8c0,1.3,0.2,2.2,0.7,2.7
                                c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.1,0-2.3,0-3.4,0.1c-1.1,0-1.9,0.1-2.5,0.1v-1
                                c0.9,0,1.4-0.2,1.8-0.7c0.3-0.5,0.5-1.4,0.5-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.1-0.6-0.4-1-0.8-1.4c-0.4-0.3-1-0.5-1.8-0.5
                                c-1.2,0-2.3,0.5-3.2,1.6c-0.9,1.1-1.4,2.4-1.4,4l-0.2-2.9c0.9-1.9,2-3.2,3.4-3.8C32.9,18.2,34.4,17.9,36.1,17.9z" fill="#fff" 
                        />
                        <Path d="M57.4,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C55.3,18.4,56.4,18.2,57.4,18z
                                M53.7,6.3c1.3,0,2.4,0.3,3.2,1C57.6,7.9,58,8.8,58,9.9c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C51.3,6.6,52.3,6.3,53.7,6.3z" fill="#fff" 
                        />
                        <Path d="M80.1,17.9c1.3,0,2.4,0.2,3.3,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.3c0.2,0.9,0.4,2.2,0.4,3.8
                                v12.8c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.4,0-3.5,0.1
                                c-1.2,0-2,0.1-2.6,0.1v-1c0.9,0,1.6-0.2,2-0.7c0.4-0.5,0.6-1.4,0.6-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.2-0.6-0.4-1-0.9-1.4
                                c-0.4-0.3-1-0.5-1.9-0.5c-1.3,0-2.4,0.5-3.3,1.6c-0.9,1-1.4,2.4-1.4,3.9v13.2c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2,0.7v1
                                c-0.6,0-1.4-0.1-2.5-0.1c-1.1,0-2.2-0.1-3.4-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7
                                c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2
                                c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.9-2.8,3.2-3.4C76.9,18.2,78.4,17.9,80.1,17.9z" fill="#fff" 
                        />
                        <Path d="M102.9,17.9c1.4,0,2.6,0.2,3.7,0.7c1.1,0.5,1.9,1.2,2.5,2.3l-0.6,0.5c-0.4-0.8-1-1.3-1.6-1.6
                                c-0.7-0.3-1.4-0.5-2.2-0.5c-1.6,0-2.9,0.9-3.8,2.8c-0.9,1.9-1.4,4.8-1.4,8.7c0,2.7,0.2,4.8,0.5,6.4c0.4,1.6,0.9,2.7,1.6,3.4
                                c0.7,0.7,1.5,1,2.4,1c1.1,0,2-0.4,2.9-1.3c0.9-0.9,1.3-2,1.4-3.5l0.2,1.7c-0.5,1.7-1.2,3-2.3,3.8c-1.1,0.9-2.4,1.3-4.2,1.3
                                c-1.9,0-3.5-0.5-5-1.4c-1.5-0.9-2.6-2.3-3.4-4.2c-0.8-1.9-1.2-4.4-1.2-7.4c0-2.9,0.5-5.3,1.4-7.1c0.9-1.9,2.2-3.3,3.8-4.2
                                C99,18.3,100.8,17.9,102.9,17.9z M115,5.9v32c0,1.4,0.2,2.5,0.7,3.2c0.4,0.7,1.2,1,2.4,1v1c-1-0.1-2-0.1-2.9-0.1
                                c-1.3,0-2.6,0-3.7,0.1c-1.2,0.1-2.2,0.3-3.2,0.5v-32c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
		                        c1.3,0,2.5-0.1,3.7-0.2C112.9,6.3,114,6.1,115,5.9z" fill="#fff" 
                        />
                        <Path d="M132.2,17.9c2.3,0,4.3,0.4,6.1,1.3c1.7,0.9,3.1,2.2,4.1,4.1c1,1.9,1.5,4.4,1.5,7.5s-0.5,5.6-1.5,7.5
                                c-1,1.9-2.3,3.3-4.1,4.1c-1.7,0.9-3.8,1.3-6.1,1.3c-2.2,0-4.2-0.4-6-1.3c-1.8-0.9-3.1-2.2-4.1-4.1c-1-1.9-1.5-4.4-1.5-7.5
                                s0.5-5.7,1.5-7.5c1-1.9,2.4-3.3,4.1-4.1C128,18.3,130,17.9,132.2,17.9z M132.2,18.8c-1.3,0-2.3,0.9-3.2,2.8
                                c-0.9,1.9-1.3,4.9-1.3,9.2c0,4.2,0.4,7.3,1.3,9.2c0.9,1.9,1.9,2.8,3.2,2.8c1.3,0,2.4-0.9,3.2-2.8c0.8-1.9,1.3-4.9,1.3-9.2
                                c0-4.2-0.4-7.3-1.3-9.2C134.6,19.8,133.5,18.8,132.2,18.8z" fill="#fff" 
                        />
                        <Path d="M152.1,36.4c1.2,0,2.2,0.3,2.9,1c0.7,0.6,1.1,1.5,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.7,0.6-1.7,1-2.9,1
		                        c-1.2,0-2.2-0.3-2.9-1c-0.7-0.6-1.1-1.5-1.1-2.7c0-1.1,0.4-2,1.1-2.7C149.9,36.8,150.9,36.4,152.1,36.4z" fill="#fff" 
                        />    
                        <Path d="M169.5,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C167.5,18.4,168.5,18.2,169.5,18z
                                M165.8,6.3c1.3,0,2.4,0.3,3.2,1c0.8,0.6,1.2,1.5,1.2,2.7c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C163.4,6.6,164.5,6.3,165.8,6.3z" fill="#fff" 
                        />
                        <Path d="M186.8,17.9c2.8,0,5,0.8,6.6,2.5c1.6,1.6,2.4,4.3,2.4,8.1h-15.6l-0.1-0.9h9.7c0-1.6-0.1-3-0.3-4.3
                                c-0.2-1.3-0.6-2.4-1-3.2c-0.5-0.8-1.1-1.2-1.9-1.2c-1.1,0-2,0.7-2.8,2.1c-0.8,1.4-1.2,3.7-1.4,6.9l0.1,0.3c0,0.4-0.1,0.8-0.1,1.2
                                c0,0.4,0,0.8,0,1.3c0,2.2,0.3,4,0.9,5.3c0.6,1.4,1.4,2.4,2.4,3c0.9,0.6,1.9,0.9,2.9,0.9c0.9,0,2-0.2,3.1-0.7
                                c1.1-0.5,2.2-1.5,3.2-3.1l0.9,0.3c-0.4,1.2-1,2.4-1.8,3.5c-0.8,1.1-1.9,2.1-3.1,2.8c-1.3,0.7-2.8,1.1-4.6,1.1
                                c-2.2,0-4.1-0.5-5.7-1.4c-1.6-0.9-2.9-2.3-3.9-4.2c-0.9-1.9-1.4-4.2-1.4-7.1c0-2.9,0.5-5.4,1.5-7.4c1-2,2.4-3.4,4.1-4.4
                                C182.6,18.4,184.6,17.9,186.8,17.9z" fill="#fff" 
                        />                 
        </Svg>
        </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>© The Medical Independent 2022. All rights reserved.
        </Text>
        <Text style={styles.footerText}>Built by Aaron Keating</Text>
      <SocialContent/>
      </View>
      <TouchableOpacity style={styles.backToTop} onPress={onPressTouch}>
      <FontAwesome  name="chevron-up" size={13} color="#6e822b" backgroundColor="#000" >
                </FontAwesome>
      </TouchableOpacity>
      </ScrollView>
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
},
footerStyle:{
  flex:1,
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  paddingTop:30
},
footerText:{
  color:'#767676',
  fontSize:13,
  marginBottom:10
},
stat:{
  paddingTop:10
},
backToTop:{
  paddingTop:50,
  alignSelf:'center'
}
  });

export default Footer;