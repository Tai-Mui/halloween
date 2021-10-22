import React from 'react';
import { Text, View } from 'react-native';
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
        <View style={{marginLeft: 20}}>
          <Return />
          <Text style={{color: 'white', fontSize: 20, marginVertical: 10, fontWeight: 'bold'}}>
            {"Category : " + props.route.params.categorie}
          </Text>
        </View>
        <ListMovies categorie = {props.route.params.categorie}/>
      </View>
    );
};