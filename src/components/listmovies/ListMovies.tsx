import React, { useEffect, useState } from 'react';
import {ScrollView, View, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { movieStore } from './store/MoviesStore';
import MovieCard from './MovieCard';

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