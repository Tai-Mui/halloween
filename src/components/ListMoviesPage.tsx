import React from 'react';
import {View, Text, ListViewBase} from 'react-native';
import { HomeTitle } from './HomeTitle';
import { ListMovies } from './ListMovies';

export class ListMoviesPage extends React.Component<any,any> {
  render() {
    return (
      <View>
        <HomeTitle/>
        <ListMovies/>
      </View>
    );
  };
};