/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
 import {SafeAreaView} from 'react-native';
import { HomePage } from './src/components/HomePage';
 import { ListMoviesPage } from './src/components/ListMoviesPage';
 import {createStackNavigator} from '@react-navigation/stack';
 
 const homePageStyle = {backgroundColor : 'black', flex: 1};
 export type TStackRoute = {
  ['/home']: any;
  ['/listMovies']: {categorie : string};
};
const Stack = createStackNavigator<TStackRoute>();
 
 const App = () => {
     return (
       <SafeAreaView style={homePageStyle}>
          <NavigationContainer>
            <HomePage/>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="/home">
              <Stack.Screen name="/home" component={HomePage} />
              <Stack.Screen name="/listMovies" component={ListMoviesPage} />
            </Stack.Navigator>
          </NavigationContainer>
       </SafeAreaView>
     );
 };
 
 export default App;
