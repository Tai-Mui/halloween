import React, { useEffect, useState } from 'react';
import {ScrollView, View, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { movieStore } from './store/MoviesStore';
import MovieCard from './MovieCard';
import { Loadable, LOADING_STATE } from '../../common/Loadable';

type Props = {
  categorie : string
} 

export function ListMovies(props : Props) {
  const navigation = useNavigation();

  return(
    <Loadable 
      promise = {movieStore.fetchMovies(props.categorie)}
      render = {(status, moviesString) => {
        if (status === LOADING_STATE.ERROR || !moviesString) return null;
          const movies = moviesString.results;
          return (
            <ScrollView>
              {
              movies.map((movie, key) => {
                return(
                  <TouchableHighlight key={key}
                      onPress={() =>
                        navigation.navigate('/infosMovie', {id : movie.imdb_id})
                  }>
                  <View key={key}>
                      <MovieCard movie={movie} key={key} />
                  </View>
                  </TouchableHighlight>
                );
              })
            }
            </ScrollView>
          );
          
        }
    }
    />
  )
}