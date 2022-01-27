import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const MedicalPracticeScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Advertise Screen</Text>

            <Button
            title="mehs"
            onPress={() => alert('hello')}
            />

        </View>
    );
};

export default MedicalPracticeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});