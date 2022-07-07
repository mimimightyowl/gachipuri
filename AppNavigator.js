import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignInScreen } from './src/screens/SignInScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { NewPasswordScreen } from './src/screens/NewPasswordScreen';
import { ConfirmSignUpScreen } from './src/screens/ConfirmSignUpScreen';
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
import { SignUpScreen } from './src/screens/SignUpScreen';

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
  <Stack.Navigator initialRouteName="Sign In">
    <Stack.Group
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Confirm Sign Up" component={ConfirmSignUpScreen} />
      <Stack.Screen name="New Password" component={NewPasswordScreen} />
      <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
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
