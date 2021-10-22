import React from 'react';
import { View } from 'react-native';
import { HomeTitle } from '../HomeTitle';
import { Return } from '../Return';
import { ListMovies } from './ListMovies';


type Props = {
  route: {params: {categorie: string}};
};

export function ListMoviesPage (props : Props){
    return (
      <View>
        <HomeTitle/>
        <Return />
        <ListMovies categorie = {props.route.params.categorie}/>
      </View>
    );
};