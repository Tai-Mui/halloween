import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { styles } from '../../styles/HomePageStyle';

type Props = {categories :string[]}

export function HomeCategories(props : Props) {
    const navigation = useNavigation();
    return (
            <View>{
                props.categories.map((cat, index) => {
                    return (
                        <TouchableHighlight key = {index}
                            onPress={() =>
                            navigation.navigate('/listMovies', {categorie : cat})
                        }>
                            <View style={styles.categorieContainer}>
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

