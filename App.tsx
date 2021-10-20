/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {SafeAreaView} from 'react-native';
 import { ListMoviesPage } from './src/components/ListMoviesPage';
 
 const homePageStyle = {backgroundColor : 'black', flex: 1};
 
 const App = () => {
     return (
       <SafeAreaView style={homePageStyle}>
          <ListMoviesPage/>
       </SafeAreaView>
     );
 };
 
 export default App;
