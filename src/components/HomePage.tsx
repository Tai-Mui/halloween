import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from '../styles/HomePageStyle';
import { HomeCategories } from './HomeCategories';

import { HomeTitle } from './HomeTitle';

const categories = ['Horror', 'Thriller', 'Mystery']

export class HomePage extends React.Component<any,any> {

  render() {
    return (
      <View>
        <HomeTitle/>       
        <HomeCategories categories = {categories}/>
        <Image source={require('../assets/imgHome.jpg')} style={styles.image}/>
      </View>

    );
  };
};


  