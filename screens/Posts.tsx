import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HomeNavigationProps, PostsRouteProps, Routes} from '../routes';

export const Posts = () => {
  const {params} = useRoute<PostsRouteProps<Routes.Posts>>();
  const navigation = useNavigation<HomeNavigationProps>();

  console.log(params);
  return (
    <View>
      <Text>Posts page</Text>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </View>
  );
};
