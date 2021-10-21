/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import { HomePage } from './src/components/HomePage';
import { ListMoviesPage } from './src/components/ListMoviesPage';
import {createStackNavigator} from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MovieInfoPage } from './src/components/movieInfo/MovieInfoPage';

 export type TStackRoute = {
  ['/home']: any;
  ['/listMovies']: {categorie : string};
  ['/infosMovie']: {id: string};
};

const Stack = createStackNavigator<TStackRoute>();

const defaultTheme = {
  backgroundColor: 'black',
  color: 'white'
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black'
  },
};

 const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

     return (
       <SafeAreaView
          style={{...backgroundStyle, flex: 1}}
          forceInset={{top: 'always'}}>
          {<NavigationContainer theme= {MyTheme}>
            <Stack.Navigator
             transparentCard={true}
             transitionConfig={{
             containerStyle: {
             backgroundColor: 'transparent',
            },
          }}
          screenOptions={{
            headerShown: false,
          }}
              initialRouteName="/home">
              <Stack.Screen name="/home" component={HomePage} />
              <Stack.Screen name="/listMovies" component={ListMoviesPage} />
              <Stack.Screen name="/infosMovie" component={MovieInfoPage} />
            </Stack.Navigator>
          </NavigationContainer>}
       </SafeAreaView>
     );
 };
 
 export default App;


