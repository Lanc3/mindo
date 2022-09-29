import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
export function SideMenuItem({title,subTitle}) {


    return (
        <View style={styles.titleContainer}>
        <View style={styles.textAlign}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={35} color="#6e822b" />
          </View>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    bodyBackground: {
        backgroundColor: '#181818',
      overflow: 'hidden',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 1,
      marginLeft: 10,
      marginRight:10,
      borderTopWidth: 0,
      borderBottomWidth: 1,
      borderColor: '#6c757d',
    },
    bodyContainer: {
      paddingLeft: 15,
      position: 'absolute',
      bottom: 0,
    },
    title: {
        color: '#F0F0F0',
        textAlign: 'left',
        fontSize:20,
        paddingLeft:0
  },
  subTitle:{
    color: '#F0F0F0',
        textAlign: 'left',
    fontSize:16,
        paddingLeft:0
  },
  textAlign:{
    flex:1,
    flexDirection:'column',
    marginVertical:10
  }
 });