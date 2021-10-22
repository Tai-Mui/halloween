import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Loadable, LOADING_STATE } from '../../common/Loadable';
import { styles } from './styles/styles';
import { movieInfoStore } from './store/MovieInfoStore';

type Props = {
  id : string
} 

export function MovieInfo(props : Props) {
  return(
    <Loadable 
      promise = {movieInfoStore.fetchMovieInfo(props.id)}
      render = {(status, moviesString) => {
        if (status === LOADING_STATE.ERROR || !moviesString) return null;
          const movie = moviesString.results;
          return (
            <ScrollView>
                <Text style={{...styles.movieText, ...styles.movieTitle}}>{movie.title}</Text>
                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
                    <View>
                        <Image style={styles.movieImage} source={{ uri: movie.image_url }} />
                    </View>
                    <View style={{justifyContent: 'space-around'}}>
                        <View style={styles.rightPanel}>
                            <Text style={{...styles.movieText, ...styles.movieLabel}}>Year : </Text>
                            <Text style={styles.movieText}>{movie.year}</Text>
                        </View>
                        <View style={styles.rightPanel}>
                            <Text style={{...styles.movieText, ...styles.movieLabel}}>Rating : </Text>
                            <Text style={styles.movieText}>{movie.rating}</Text>
                        </View>
                        <View style={styles.rightPanel}>
                            <Text style={{...styles.movieText, ...styles.movieLabel}}>Length : </Text>
                            <Text style={styles.movieText}>{movie.movie_length} min.</Text>
                        </View>
                    </View>
                </View>
                <Text style={{...styles.movieText, ...styles.movieLabel}}>Description : </Text>
                <Text style={styles.movieText}>{movie.description}</Text>
            </ScrollView>
          );
          
        }
    }
    />
  )
}