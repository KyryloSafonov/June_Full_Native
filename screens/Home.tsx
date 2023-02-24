import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProps, Routes} from '../routes';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  return (
    <View style={styles.homePage}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to Posts page'}
        onPress={() =>
          navigation.navigate(Routes.Posts, {
            userId: '1',
            title: 'nwelknwkfnwe',
            postId: '1',
          })
        }
      />
      <Button
        title={'Go to MainTab page'}
        onPress={() => navigation.navigate(Routes.MainTabs)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
