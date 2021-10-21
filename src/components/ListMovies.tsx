import React, { useEffect, useState } from 'react';
import {ScrollView, View, TouchableHighlight} from 'react-native';
import MovieCard from './MovieCard';
import { movieStore } from './MoviesStore';
import {useNavigation} from '@react-navigation/native';

type Props = {
  categorie : string
} 

export function ListMovies(props : Props) {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    movieStore.fetchMovies(props.categorie)
      .then((response) => response.json())
      .then(({results}) => { 
        setMovies(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []) 

  return (
      <ScrollView>
      {
        movies.map((movie, key)=>{
          return (
            <TouchableHighlight key={key}
                onPress={() =>
                  navigation.navigate('/infosMovie', {id : movie.imdb_id})
            }>
             <View key={key}>
                <MovieCard movie={movie} key={key} />
            </View>
            </TouchableHighlight>
          )
        })
      }
      </ScrollView>
  )
};