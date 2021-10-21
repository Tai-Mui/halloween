import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles/styles';
import { HomeTitle } from '../HomeTitle';
import { Return } from '../Return';
import { movieInfoStore, TMovieInfo } from "./store/MovieInfoStore";
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    route: {params: {id: string}};
};

export function MovieInfoPage(props: Props) {

    const [movie, setMovie] = useState<TMovieInfo>();

    useEffect(() => {
        movieInfoStore
            .fetchMovieInfo(props.route.params.id)
            .then((response) => response.json())
            .then((res: {results:TMovieInfo}) => { 
                setMovie(res.results);
                //console.log(results)
            })
            .catch((error) => {
                console.error(error);
            });
      }, []) 
    
    if (!movie) {
        return null;
    }

    return (
        <View style={styles.movieContainer}>
            <HomeTitle />
            <Return />
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
        </View>
    );
}