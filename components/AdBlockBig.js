import React from 'react';
import { View,StyleSheet,Text,Image ,Dimensions} from 'react-native';
import WebRender from './WebRender';
export function AdBlockBig(props) {

const ad = `<!-- PCDSI MPU [iframe] -->
<script type="text/javascript">
var rnd = window.rnd || Math.floor(Math.random()*10e6);
var pid542443 = window.pid542443 || rnd;
var plc542443 = window.plc542443 || 0;
var abkw = window.abkw || '';
var absrc = 'https://servedbyadbutler.com/adserve/;ID=183389;size=300x250;setID=542443;type=iframe;sw='+screen.width+';sh='+screen.height+';spr='+window.devicePixelRatio+';kw='+abkw+';pid='+pid542443+';place='+(plc542443++)+';rnd='+rnd+';click=CLICK_MACRO_PLACEHOLDER';
document.write('<ifr'+'ame src="'+absrc+'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></ifr'+'ame>');
</script>`
    return (
        <View style={styles.container}>
            <View style={styles.image}>
            <WebRender htmlData={ad}/>
            </View>
            
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:250,
        maxWidth:windowWidth,
        paddingBottom:20,
        paddingTop:20,
        marginRight:20,
    },
    image:{
        width:300,
        marginLeft:100
    },
})