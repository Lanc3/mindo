import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import WebRender from './WebRender';
const ads = [
        {
            name:"LDB_MOBILE",
            private_script:`<!-- - LDB Mobile Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542405 = window.plc542405 || 0;
            document.write('<'+'div id="placement_542405_'+plc542405+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542405, [300,90], 'placement_542405_'+opt.place, opt); }, opt: { place: plc542405++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"MPU",
            private_script:`<!-- - MPU Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542368 = window.plc542368 || 0;
            document.write('<'+'div id="placement_542368_'+plc542368+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542368, [300,250], 'placement_542368_'+opt.place, opt); }, opt: { place: plc542368++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
    ];

export function AdManager(props) {
    const isFocused = useIsFocused();
    const selectedAd = props.selectedAd;
    const sizeType = props.sizeType;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getAd = (adZone) => {
        var __FOUND = ads.find(function(ad, index) {
            if(ad.name === adZone)
               return true;
        });
        if(typeof __FOUND !== 'undefined'){
            if(isLoggedIn)
            {
                return __FOUND.private_script;
            }
            else{
                return __FOUND.public_script;
            }
        }
    }
    const retrieveData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('userProfile');
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value).freeAccount);
      }
      else{

      }
    } catch (error) {
      // Error retrieving data
    }
},[]);
useEffect(() => { 
    (async () => {
        const data = await AsyncStorage.getItem('userProfile');
        if(data !== null)
        setIsLoggedIn(JSON.parse(data).isLoggedIn);
    })()
}, [isFocused]);

    return (
        <View style={styles.container}>
            {sizeType === 'BIG' ?
            <View style={styles.containerBig}>
            <View style={styles.bigImage}>
                <WebRender htmlData={getAd(selectedAd)}/>
            </View>
            </View>
            :
            <View style={styles.container}>
            <View style={styles.image}>
                <WebRender htmlData={getAd(selectedAd)}/>
            </View>
            </View>
            }
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    containerBig:{
        width:310,
        height:300,
    },
    image:{
        width:310,
    },
    bigImage:{
        flex:1,
        width:310,
    }
})