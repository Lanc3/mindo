import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const GalleriesScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Galleries Screen</Text>

            <Button
            title="meh"
            onPress={() => alert('hello')}
            />

        </View>
    );
};

export default GalleriesScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});