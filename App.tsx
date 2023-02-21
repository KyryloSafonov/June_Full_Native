/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const fetchUsers = () => {
    fetch(`${baseUrl}/users`)
      .then(resp => resp.json())
      .then(json => setUsers(json));
  };
  const fetchPosts = () => {
    fetch(`${baseUrl}/posts`)
      .then(resp => resp.json())
      .then(json => setPosts(json));
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <Text key={item.id}>
        {item.id} --- {item.title}
      </Text>
    );
  };

  return (
    <SafeAreaView>
      <Button title={'Get Users'} onPress={fetchUsers} />
      <TouchableOpacity onLongPress={fetchPosts} style={styles.button}>
        <Text>Get Posts</Text>
      </TouchableOpacity>
      <View>
        <Text>Users</Text>
      </View>
      <View style={styles.scrollView}>
        <ScrollView>
          {!!users.length &&
            users.map(item => {
              return (
                <Text key={item.id}>
                  {item.name} --- {item.username}
                </Text>
              );
            })}
        </ScrollView>
      </View>
      <View style={styles.postTitle}>
        <Text>Posts</Text>
      </View>
      <View>
        {!!posts.length && <FlatList data={posts} renderItem={renderItem} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 50,
  },
  postTitle: {
    backgroundColor: 'red',
  },
  button: {
    width: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    backgroundColor: 'pink',
  },
});

export default App;
