import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import Modal from 'react-native-modal'
import CustomDrawerContent from '../CustomDrawerContent'
import { drawerItemsMain } from '../DrawerItemsMain'
const onPressSignUp = () => {
  navigation.navigate('SignInScreen')
}
export default function DrawerMain({ navi }) {
  const navigation = useNavigation()
  const [drawerAnimation, setDrawerAnimation] = useState(new Animated.Value(50))
  const [toggle, setToggle] = useState(false)
  const windowWidth = Dimensions.get('window').width
  const onPressOpen = () => {
    if (!toggle) {
      setToggle(true)
      Animated.timing(drawerAnimation, {
        toValue: -windowWidth + 50,
        duration: 1000,
        useNativeDriver: true,
      }).start()
    } else {
      setToggle(false)
      Animated.timing(drawerAnimation, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: true,
      }).start()
    }
  }

  return (
    <View>
      <TouchableOpacity style={styles.testingBounds} onPress={onPressOpen}>
        <Icon name={'menu'} color={'#6e822b'} size={25} />
      </TouchableOpacity>
      <Modal
        deviceHeight={600}
        statusBarTranslucent={false}
        useNativeDriver={true}
        backdropColor="transparent"
        theme={{
          colors: {
            backdrop: '#181818',
          },
        }}
        isVisible={toggle}
        onBackdropPress={onPressOpen} // Android back press
        onSwipeComplete={onPressOpen} // Swipe to discard
        animationIn="slideInLeft" // Has others, we want slide in from the left
        animationOut="slideOutLeft" // When discarding the drawer
        swipeDirection="left" // Discard the drawer with swipe to left
        // Faster animation
        // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        style={styles.sideMenuStyle} // Needs to contain the width, 75% of screen width in our case
      >
        <View style={{ height: '100%' }}>
          <CustomDrawerContent
            drawerItems={drawerItemsMain}
            closeDrawer={onPressOpen}
          />
        </View>
      </Modal>
    </View>
  )
}

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  sideMenuStyle: {
    margin: 0,
    top: 50,
  },
  plus: {
    flex: 1,
    color: '#00e5bf',
    fontSize: 50,
  },
  drawerButtonLogOut: {
    marginTop: 100,
    backgroundColor: '#6e822b',
    margin: 5,
    borderRadius: 4,
  },
  container: {
    backgroundColor: 'black',
    height: windowHeight,
    width: windowWidth / 2,
    minHeight: windowHeight,
    minWidth: windowWidth,
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1111,
  },
  logo: {
    flex: 1,
    paddingTop: 2,
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    top: 20,
    zIndex: 2,
  },
  testingBounds: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  menuText: {
    padding: 10,
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'serif',
  },
  DrawerTitle: {
    marginTop: 7,
    color: '#6e822b',
    fontFamily: 'serif',
    fontSize: 25,
  },
  DrawerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  drawerButton: {
    backgroundColor: '#6e822b',
    margin: 5,
    borderRadius: 4,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    zIndex: 1,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    height: 50,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 10,
    margin: 15,
    color: '#fff',
    backgroundColor: '#1A1A1A',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
