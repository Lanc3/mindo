import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const CompetitionScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Competition Screen</Text>

            <Button
            title="meh"
            onPress={() => alert('hello')}
            />

        </View>
    );
};

export default CompetitionScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});