import React, { useEffect, useState } from 'react';
import {ScrollView, Text, StyleSheet, FlatList, View} from 'react-native';
import MovieCard from './MovieCard';
import { fetchMovies } from './moviesStore';

export function ListMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetchMovies()
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
             <View>
                <MovieCard movie={movie} key={key} />
            </View>
          )
        })
      }
      </ScrollView>
  )
};