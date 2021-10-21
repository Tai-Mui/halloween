import React from 'react';
import {View, Text, ListViewBase} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { HomeTitle } from './HomeTitle';
import { ListMovies } from './ListMovies';

type Props = {
  route: {params: {categorie: string}};
};

export function ListMoviesPage (props : Props){
    return (
      <View>
        <HomeTitle/>
        <ListMovies categorie = {props.route.params.categorie}/>
      </View>
    );
};