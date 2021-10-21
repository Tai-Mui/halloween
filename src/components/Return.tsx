import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { styles } from "../styles/HomePageStyle";


export function Return() {
    const navigation = useNavigation();
    return (
        <TouchableHighlight onPress={() => navigation.goBack()}>
            <Image style={styles.back} source={require('../assets/arrow-back.jpg')} />
        </TouchableHighlight>

    )
}