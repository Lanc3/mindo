import React from 'react';
import { StyleSheet, Platform, StatusBar,View } from 'react-native';

export function IOSStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
  }

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
const styles = StyleSheet.create({statusBar: {height: STATUSBAR_HEIGHT}});