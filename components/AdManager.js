import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import WebRender from './WebRender';

const adTypes = {LDB_MOBILE_PRIVATE:`<!-- - LDB Mobile Private [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid542405 = window.pid542405 || rnd;
var plc542405 = window.plc542405 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x90;setID=542405;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542405+';place='+(plc542405++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
LDB_MOBILE_PUBLIC:`<!-- - LDB Mobile Public [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid542406 = window.pid542406 || rnd;
var plc542406 = window.plc542406 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x90;setID=542406;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542406+';place='+(plc542406++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
MPU_PRIVATE:`<!-- - MPU Private [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid542368 = window.pid542368 || rnd;
var plc542368 = window.plc542368 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=542368;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542368+';place='+(plc542368++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
MPU_PUBLIC:`<!-- - MPU Public [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid542369 = window.pid542369 || rnd;
var plc542369 = window.plc542369 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=542369;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542369+';place='+(plc542369++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
CPI_LDB:`<!-- CPI LDB Private [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid547129 = window.pid547129 || rnd;
var plc547129 = window.plc547129 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=728x90;setID=547129;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid547129+';place='+(plc547129++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="728" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
CPI_MPU:`<!-- CPI MPU Private [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid547130 = window.pid547130 || rnd;
var plc547130 = window.plc547130 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=547130;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid547130+';place='+(plc547130++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
ICS_LDB:`<!-- ICS LDB Mobile [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid552026 = window.pid552026 || rnd;
var plc552026 = window.plc552026 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x160;setID=552026;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid552026+';place='+(plc552026++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="160" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`,
ICS_MPU:`<!-- ICS MPU [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid545734 = window.pid545734 || rnd;
var plc545734 = window.plc545734 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=545734;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid545734+';place='+(plc545734++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`
}

const getAd = (adType) => {
    return adTypes[adType];
}
const LDB_MOBILE_PUBLIC = `<!-- ICS MPU [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid545734 = window.pid545734 || rnd;
var plc545734 = window.plc545734 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=545734;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid545734+';place='+(plc545734++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`

export function AdManager(props) {
const selectedAd = props.selectedAd;
const sizeType = props.sizeType;
const [isFreeAccount, setIsFreeAccount] = useState(true);
const retrieveData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('userProfile');
      if (value !== null) {
        setIsFreeAccount(JSON.parse(value).freeAccount);
      }
      else{
        console.log("No adManager data found");
      }
    } catch (error) {
      // Error retrieving data
    }
},[]);
useEffect (() => {
    retrieveData();
  },[retrieveData]);
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
        height:260,
    },
    image:{
        width:310,
    },
    bigImage:{
        flex:1,
        width:310,
    }
})