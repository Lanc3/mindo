import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AdManager } from './AdManager';
import Carousel from './Carousel';
export const EcopyHeader = ({title,navigation,data}) => {


  return (
    <View style={styles.stat}>
      <AdManager selectedAd={"LDB_MOBILE"} sizeType={"SMALL"}/>
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
        fontWeight:"bold",
        margin:5,
        alignSelf:'center'
    }
  });

export default EcopyHeader;