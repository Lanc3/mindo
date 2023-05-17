import { MaterialIcons } from '@expo/vector-icons'
import * as Notifications from 'expo-notifications'
import { default as React, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
const NotificationToggle = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false)
  const [permissionStatus, setPermissionStatus] = useState('')

  useEffect(() => {
    // Check notification permissions when component mounts
    checkNotificationPermissions()
  }, [])

  const checkNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync()
    setPermissionStatus(status)
    setNotificationEnabled(status === 'granted')
  }

  const handleToggleSwitch = async () => {
    if (notificationEnabled) {
      // If notifications are currently enabled, turn them off
      await Notifications.setNotificationHandler({
        handleNotification: () => null,
      })
      setNotificationEnabled(false)
    } else {
      // If notifications are currently disabled, ask for permission to turn them on
      const { status } = await Notifications.getPermissionsAsync()
      console.log(status)
      setPermissionStatus(status)
      setNotificationEnabled(status === 'granted')
    }
  }

  if (permissionStatus === 'granted') {
    // If notification permission is granted, show text message
    return (
      <View>
        <View style={styles.titleContainer}>
          <View style={styles.textAlign}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subTitle}>
            You will find missed notifications in this section of the app.
            </Text>
          </View>

          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={35}
              color="#6e822b"
            />
          </View>
        </View>
      </View>
    )
  } else {
    // If notification permission is not granted, show toggle button to request permission
    return (
      <View>
        <View style={styles.titleContainer}>
          <View style={styles.textAlign}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subTitle}>
            Notifications are managed through the App setting in your phone settings menu.
            </Text>
          </View>

          <View>
            <MaterialIcons
              name="notifications-off"
              size={35}
              color="#6e822b"
            />
          </View>
        </View>
      </View>
    )
  }
}
const windowWidth = Dimensions.get('window').width
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
    marginRight: 10,
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
    fontSize: 20,
    paddingLeft: 0,
  },
  subTitle: {
    color: '#F0F0F0',
    textAlign: 'left',
    fontSize: 16,
    paddingLeft: 0,
  },
  textAlign: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
  },
})
export default NotificationToggle
