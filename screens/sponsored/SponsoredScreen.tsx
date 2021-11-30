import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";

const SponsoredScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Sponsored Screen</Text>

            <Button
            title="Sponsored"
            onPress={() => alert('hello')}
            />

        </View>
    );
};

export default SponsoredScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});