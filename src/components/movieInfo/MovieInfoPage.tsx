import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { HomeTitle } from '../HomeTitle';
import { Return } from '../Return';
import { movieInfoStore, TMovieInfo } from "./store/MovieInfoStore";

type Props = {
    route: {params: {id: string}};
};

export function MovieInfoPage(props: Props) {
    const navigation = useNavigation();
    
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
        <View>
            <HomeTitle />
            <Return />
            <Text style={{color: 'white'}}>{movie.title}</Text>
            <Image style={{width: 200, height: 200 }} source={{ uri: movie.image_url }} />
            <Text style={{color: 'white'}}>{movie.year}</Text>
            <Text style={{color: 'white'}}>{movie.rating}</Text>
            <Text style={{color: 'white'}}>{movie.description}</Text>
        </View>
    );
}