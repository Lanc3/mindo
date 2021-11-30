import React from "react";
import { View, Text,Button,StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { SocialContent } from "../components/SocialContent";
import { ArticleCard } from "../components/ArticleCard";

const HomeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <SocialContent/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000'
    }
});