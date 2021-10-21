import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/HomePageStyle';

export class HomeTitle extends React.Component<any,any> {
  render() {
      return (
        <View>
          <Text style= {styles.homeTitle}>
              Halloween movies
          </Text>
        </View>
      );
  }
}

