import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const ProfBrendanScreen = () => {
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

export default ProfBrendanScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});