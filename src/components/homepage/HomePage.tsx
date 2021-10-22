import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import { styles } from '../../styles/HomePageStyle';
import { HomeTitle } from '../HomeTitle';
import { HomeCategories } from './HomeCategories';

const categories = ['Horror', 'Thriller', 'Mystery']

export class HomePage extends React.Component<any,any> {

  render() {
    return (
        <View style={{flex:1}}>
          <ImageBackground source={require('../../assets/imgHome.jpg')} style={styles.image} imageStyle={styles.imageStyle} />
          <ScrollView style={{flexGrow: 1}}>
            <HomeTitle/>
            <HomeCategories categories = {categories} /> 
          </ScrollView>
      </View>
      
    );
  }
}


  