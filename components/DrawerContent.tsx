import React from 'react';

import { View ,Text as DefaultText, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Svg, { Path } from "react-native-svg";

export function DrawerContent(props) {

    const [isDarkTheme,setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex:1, backgroundColor:'black'}}>
            <DrawerContentScrollView { ...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.logoView}>
                        <Svg
                            width={200}
                            height={50}
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
                                c-1.2,0-2.3,0.5-3.2,1.6c-0.9,1.1-1.4,2.4-1.4,4l-0.2-2.9c0.9-1.9,2-3.2,3.4-3.8C32.9,18.2,34.4,17.9,36.1,17.9z" fill="#6e822b" 
                        />
                        <Path d="M57.4,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C55.3,18.4,56.4,18.2,57.4,18z
                                M53.7,6.3c1.3,0,2.4,0.3,3.2,1C57.6,7.9,58,8.8,58,9.9c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C51.3,6.6,52.3,6.3,53.7,6.3z" fill="#6e822b" 
                        />
                        <Path d="M80.1,17.9c1.3,0,2.4,0.2,3.3,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.3c0.2,0.9,0.4,2.2,0.4,3.8
                                v12.8c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.4,0-3.5,0.1
                                c-1.2,0-2,0.1-2.6,0.1v-1c0.9,0,1.6-0.2,2-0.7c0.4-0.5,0.6-1.4,0.6-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.2-0.6-0.4-1-0.9-1.4
                                c-0.4-0.3-1-0.5-1.9-0.5c-1.3,0-2.4,0.5-3.3,1.6c-0.9,1-1.4,2.4-1.4,3.9v13.2c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2,0.7v1
                                c-0.6,0-1.4-0.1-2.5-0.1c-1.1,0-2.2-0.1-3.4-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7
                                c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2
                                c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.9-2.8,3.2-3.4C76.9,18.2,78.4,17.9,80.1,17.9z" fill="#6e822b" 
                        />
                        <Path d="M102.9,17.9c1.4,0,2.6,0.2,3.7,0.7c1.1,0.5,1.9,1.2,2.5,2.3l-0.6,0.5c-0.4-0.8-1-1.3-1.6-1.6
                                c-0.7-0.3-1.4-0.5-2.2-0.5c-1.6,0-2.9,0.9-3.8,2.8c-0.9,1.9-1.4,4.8-1.4,8.7c0,2.7,0.2,4.8,0.5,6.4c0.4,1.6,0.9,2.7,1.6,3.4
                                c0.7,0.7,1.5,1,2.4,1c1.1,0,2-0.4,2.9-1.3c0.9-0.9,1.3-2,1.4-3.5l0.2,1.7c-0.5,1.7-1.2,3-2.3,3.8c-1.1,0.9-2.4,1.3-4.2,1.3
                                c-1.9,0-3.5-0.5-5-1.4c-1.5-0.9-2.6-2.3-3.4-4.2c-0.8-1.9-1.2-4.4-1.2-7.4c0-2.9,0.5-5.3,1.4-7.1c0.9-1.9,2.2-3.3,3.8-4.2
                                C99,18.3,100.8,17.9,102.9,17.9z M115,5.9v32c0,1.4,0.2,2.5,0.7,3.2c0.4,0.7,1.2,1,2.4,1v1c-1-0.1-2-0.1-2.9-0.1
                                c-1.3,0-2.6,0-3.7,0.1c-1.2,0.1-2.2,0.3-3.2,0.5v-32c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
		                        c1.3,0,2.5-0.1,3.7-0.2C112.9,6.3,114,6.1,115,5.9z" fill="#6e822b" 
                        />
                        <Path d="M132.2,17.9c2.3,0,4.3,0.4,6.1,1.3c1.7,0.9,3.1,2.2,4.1,4.1c1,1.9,1.5,4.4,1.5,7.5s-0.5,5.6-1.5,7.5
                                c-1,1.9-2.3,3.3-4.1,4.1c-1.7,0.9-3.8,1.3-6.1,1.3c-2.2,0-4.2-0.4-6-1.3c-1.8-0.9-3.1-2.2-4.1-4.1c-1-1.9-1.5-4.4-1.5-7.5
                                s0.5-5.7,1.5-7.5c1-1.9,2.4-3.3,4.1-4.1C128,18.3,130,17.9,132.2,17.9z M132.2,18.8c-1.3,0-2.3,0.9-3.2,2.8
                                c-0.9,1.9-1.3,4.9-1.3,9.2c0,4.2,0.4,7.3,1.3,9.2c0.9,1.9,1.9,2.8,3.2,2.8c1.3,0,2.4-0.9,3.2-2.8c0.8-1.9,1.3-4.9,1.3-9.2
                                c0-4.2-0.4-7.3-1.3-9.2C134.6,19.8,133.5,18.8,132.2,18.8z" fill="#6e822b" 
                        />
                        <Path d="M152.1,36.4c1.2,0,2.2,0.3,2.9,1c0.7,0.6,1.1,1.5,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.7,0.6-1.7,1-2.9,1
		                        c-1.2,0-2.2-0.3-2.9-1c-0.7-0.6-1.1-1.5-1.1-2.7c0-1.1,0.4-2,1.1-2.7C149.9,36.8,150.9,36.4,152.1,36.4z" fill="#6e822b" 
                        />    
                        <Path d="M169.5,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C167.5,18.4,168.5,18.2,169.5,18z
                                M165.8,6.3c1.3,0,2.4,0.3,3.2,1c0.8,0.6,1.2,1.5,1.2,2.7c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C163.4,6.6,164.5,6.3,165.8,6.3z" fill="#6e822b" 
                        />
                        <Path d="M186.8,17.9c2.8,0,5,0.8,6.6,2.5c1.6,1.6,2.4,4.3,2.4,8.1h-15.6l-0.1-0.9h9.7c0-1.6-0.1-3-0.3-4.3
                                c-0.2-1.3-0.6-2.4-1-3.2c-0.5-0.8-1.1-1.2-1.9-1.2c-1.1,0-2,0.7-2.8,2.1c-0.8,1.4-1.2,3.7-1.4,6.9l0.1,0.3c0,0.4-0.1,0.8-0.1,1.2
                                c0,0.4,0,0.8,0,1.3c0,2.2,0.3,4,0.9,5.3c0.6,1.4,1.4,2.4,2.4,3c0.9,0.6,1.9,0.9,2.9,0.9c0.9,0,2-0.2,3.1-0.7
                                c1.1-0.5,2.2-1.5,3.2-3.1l0.9,0.3c-0.4,1.2-1,2.4-1.8,3.5c-0.8,1.1-1.9,2.1-3.1,2.8c-1.3,0.7-2.8,1.1-4.6,1.1
                                c-2.2,0-4.1-0.5-5.7-1.4c-1.6-0.9-2.9-2.3-3.9-4.2c-0.9-1.9-1.4-4.2-1.4-7.1c0-2.9,0.5-5.4,1.5-7.4c1-2,2.4-3.4,4.1-4.4
                                C182.6,18.4,184.6,17.9,186.8,17.9z" fill="#6e822b" 
                        />                 
                        </Svg>
                        </View>

                        <View style={styles.row}>

                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="home-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Home"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="newspaper-variant-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="News"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('News')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="comment-text-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Comments"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Comments')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="heart-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Life"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Life')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="home-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Clinical"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Clinical')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="account-group"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Societies"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Societies')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="image-multiple-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Galleries"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Galleries')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="briefcase-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Classifieds"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Classifieds')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="doctor"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Sponsored"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Sponsored')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="account-cash-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Advertise"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Advertise')}}
                        />
                        <DrawerItem
                        icon={({color,size}) => (
                            <Icon
                            name="arm-flex-outline"
                            color={'#6e822b'}
                            size ={size}
                            />
                        )}
                        label="Competition"
                        labelStyle={{color: '#fff'}}
                        onPress={() => {props.navigation.navigate('Competition')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                        name="exit-to-app"
                        color={'#6e822b'}
                        size ={size}
                        />
                    )}
                    label="sign Out"
                    labelStyle={{color: '#fff'}}
                    onPress={() => {}}
                ></DrawerItem>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    logo:{
        borderRadius:0,
        backgroundColor:'transparent'
    },
    logoView:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'center'
    },
    userInfoSection: {
      paddingLeft: 1,
    },
    title: {
      fontSize: 16,
      marginTop: 11,
      fontWeight: 'bold',
      color:'#6e822b',
    },
    caption: {
      fontSize: 12,
      lineHeight: 12,
      marginLeft:20
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      marginLeft:0
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#6e822b',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
      color:'#6e822b'
    },
  });