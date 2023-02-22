import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export const Posts = () => {
  const {params} = useRoute<any>();
  const navigation = useNavigation<any>();
  console.log('params----', params['template-1234-uuu'].id);
  return (
    <View>
      <Text>Posts page</Text>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </View>
  );
};
