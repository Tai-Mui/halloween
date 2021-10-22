import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import { styles } from '../../styles/HomePageStyle';

type Props={movie:{title:string}}

const MovieCard = (props:Props) => {
    return (
      <View>
        {<Text style={styles.listMovies}> {props.movie.title} </Text>}         
      </View>
    );
  }

export default MovieCard;