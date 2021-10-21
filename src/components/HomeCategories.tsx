import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import { styles } from '../styles/HomePageStyle';
import {useNavigation} from '@react-navigation/native';

type Props = {categories :string[]}

export function HomeCategories(props : Props) {
    const navigation = useNavigation();
    return (
            <View>{
                props.categories.map((cat) => {
                    return (
                        <TouchableHighlight
                            onPress={() =>
                            navigation.navigate('/listMovies', {categorie : cat})
                        }>
                            <View>
                                <Text style = {styles.categories}>
                                    {cat}
                                </Text>
                            </View>
                        </TouchableHighlight>              
                    )
                })
            }</View>
    )
};

