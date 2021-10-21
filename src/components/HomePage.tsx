import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import { styles } from '../styles/HomePageStyle';
import { HomeCategories } from './HomeCategories';

import { HomeTitle } from './HomeTitle';

const categories = ['Horror', 'Thriller', 'Mystery']

export class HomePage extends React.Component<any,any> {

  render() {
    return (
      <View style={{flex: 1}}>
        <HomeTitle/>
        <HomeCategories categories = {categories} />
        <ImageBackground source={require('../assets/imgHome.jpg')} style={styles.image} imageStyle={styles.imageStyle} />
      </View>
    );
  }
}


  