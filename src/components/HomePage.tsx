import React from 'react';
import {View, Text} from 'react-native';
import { HomeCategories } from './HomeCategories';
import { HomeTitle } from './HomeTitle';

const categories = ['Horror', 'Thriller', 'Mystery']

export class HomePage extends React.Component<any,any> {

  render() {
    return (
      <View>
        <HomeTitle/>       
        <HomeCategories categories = {categories}/>
      </View>

    );
  };
};


  