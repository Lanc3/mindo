import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const NewsScreen = () => {
    return(
        <View style={styles.container}>
            <Text>News Screen</Text>

            <Button
            title="meh"
            onPress={() => alert('hello')}
            />

        </View>
    );
};

export default NewsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});