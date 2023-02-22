import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes';

export const Home = () => {
  const navigation = useNavigation<any>();
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
            ['template-1234-uuu']: {
              id: '11',
            },
          })
        }
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
