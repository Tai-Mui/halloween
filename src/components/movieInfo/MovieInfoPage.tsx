import React from 'react';
import { View } from 'react-native';
import { styles } from './styles/styles';
import { HomeTitle } from '../HomeTitle';
import { Return } from '../Return';
import { MovieInfo } from './MovieInfo'

type Props = {
    route: {params: {id: string}};
};

export function MovieInfoPage(props: Props) {
    return (
        <View style={styles.movieContainer}>
            <HomeTitle />
            <Return />
            <MovieInfo id = {props.route.params.id} />
        </View>
    );

}