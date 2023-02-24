import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRoutes} from './routes/tabRoutes';
import {FirstTab} from './FirstTab';
import {SecondTab} from './SecondTab';
import {Routes} from '../../routes';
import {ThirdTab} from './ThirdTab';
import {Image} from 'react-native';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={TabRoutes.FirstTab}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={TabRoutes.FirstTab} component={FirstTab} />
      <Stack.Screen name={TabRoutes.SecondTab} component={SecondTab} />
    </Stack.Navigator>
  );
};

export const MainTab = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name={Routes.MainTabsRoutes}
        component={MainTabRoutes}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? 'red' : '#000',
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
                }}
              />
            </>
          ),
          tabBarInactiveBackgroundColor: 'orange',
        }}
      />
      <Tabs.Screen name={TabRoutes.ThirdTab} component={ThirdTab} />
    </Tabs.Navigator>
  );
};
