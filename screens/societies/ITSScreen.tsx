import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const ITSScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Advertise Screen</Text>

            <Button
            title="meh"
            onPress={() => alert('hello')}
            />

        </View>
    );
};

export default ITSScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});