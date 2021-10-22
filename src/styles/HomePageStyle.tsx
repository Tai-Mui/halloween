import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    homeTitle: {
      color: 'orange',
      fontSize: 35,
      textAlign: 'center',
      lineHeight: 100,
    },
    listMovies: {
      color: 'white',
      fontSize: 20,
      marginVertical: 20,
      marginHorizontal: 20
    },
    categorieContainer: {
      backgroundColor:'orange', 
      marginVertical: 20, 
      marginHorizontal: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    categories: {
      color : 'white',
      fontSize: 40,
      textAlign : 'center',
      lineHeight: 80,
    },
    image: {
      width: "100%",
      height: 300,
      position: 'absolute',
      top: undefined,
      bottom:0
    },
    imageStyle: {
      resizeMode: "cover",
      height: 300,
      alignSelf: "flex-end"
    },
    back: {
      height: 50,
      width: 100
    }
});

