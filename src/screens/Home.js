import React from 'react';
import { useQuery } from 'react-query';
import { defaultSafeAreaEdges } from '../common/config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Layout, Text } from '@ui-kitten/components';
import { Alert, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const getTodos = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos?userId=5')
      .then(response => response.json())
      .catch(error => console.log(error));
  };

  const query = useQuery('todos', getTodos);

  const onSignOutPress = () =>
    signOut(auth)
      .then(() => {
        Alert.alert('Sign-out successful.');
      })
      .catch(error => {
        Alert.alert('An error happened.', error);
      });

  return (
    <SafeAreaView style={{ flex: 1 }} edges={defaultSafeAreaEdges}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          {query.data !== undefined &&
            query.data.map(todo => <Text key={todo.id}>{todo.title}</Text>)}
        </View>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button onPress={onSignOutPress}>Sign Out</Button>
      </Layout>
    </SafeAreaView>
  );
};
