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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {Home} from './screens/Home';
import {Posts} from './screens/Posts';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          statusBarColor: '#fff',
        }}
        initialRouteName={Routes.Home}>
        <Stack.Screen
          name={Routes.Home}
          component={Home}
          options={{title: "June's Home screen"}}
        />
        <Stack.Screen
          name={Routes.Posts}
          component={Posts}
          options={{title: 'Posts Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
