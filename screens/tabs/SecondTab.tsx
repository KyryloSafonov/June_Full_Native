import React from 'react';
import {Button, Text, View} from 'react-native';
import {TabRoutes} from './routes/tabRoutes';
import {useNavigation} from '@react-navigation/native';

export const SecondTab = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Second</Text>
      <Button
        title={'Go to First'}
        onPress={() => navigation.navigate(TabRoutes.FirstTab)}
      />
    </View>
  );
};
