import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignInScreen } from './src/screens/SignInScreen';
import { HomeScreen } from './src/screens/Home';
import { DetailsScreen } from './src/screens/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  useTheme,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUp, SignUpScreen } from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();
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

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="SignInScreen">
    <Stack.Group
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
