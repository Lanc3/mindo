import React, {useState, useRef, useEffect} from 'react';
import { View, Text ,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import Carousel from './Carousel';
export const Header = ({title,navigation,data}) => {


  return (
    <View style={styles.stat}>
      {title != null ?<Text style={styles.pageTitle}>{title}</Text>:null}
        
          <Carousel
        style='slide'
        items={data}
        navigation={navigation}
        nameSlug={title}
      />
    </View>
  );
}
 const styles = StyleSheet.create({
    pageTitle:{
        fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
        margin:5,
        alignSelf:'center'
    }
  });

export default Header;