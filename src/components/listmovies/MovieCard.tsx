import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import { styles } from '../../styles/HomePageStyle';
import { styles as stylesCard } from './styles/styles'

type Props={movie:{title:string}}

const MovieCard = (props:Props) => {
    return (
      <View style={stylesCard.container}>
        {<Text style={styles.listMovies}> {props.movie.title} </Text>}         
      </View>
    );
  }

export default MovieCard;