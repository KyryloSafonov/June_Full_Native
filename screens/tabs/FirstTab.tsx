import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabRoutes} from './routes/tabRoutes';

export const FirstTab = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>First</Text>
      <Button
        title={'Go to second'}
        onPress={() => navigation.navigate(TabRoutes.SecondTab)}
      />
    </View>
  );
};
