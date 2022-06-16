import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/Home';
import { DetailsScreen } from './src/screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  useTheme,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme['background-basic-color-1'] }}
      edges={['bottom']}>
      <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Details" />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Group
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Group>
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
