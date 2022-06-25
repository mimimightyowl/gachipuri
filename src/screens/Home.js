import React from 'react';
import { useQuery } from 'react-query';
import { defaultSafeAreaEdges } from '../common/config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';

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

  return (
    <SafeAreaView style={{ flex: 1 }} edges={defaultSafeAreaEdges}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          {query.data.map(todo => (
            <Text key={todo.id}>{todo.title}</Text>
          ))}
        </View>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};
