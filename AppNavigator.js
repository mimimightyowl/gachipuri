import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignInScreen } from './src/screens/SignInScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { NewPasswordScreen } from './src/screens/NewPasswordScreen';
import { ConfirmSignUpScreen } from './src/screens/ConfirmSignUpScreen';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { HomeScreen } from './src/screens/Home';
import { DetailsScreen } from './src/screens/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { auth } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setCurrentUser(user);
        // ...
      } else {
        // User is signed out
        setCurrentUser(null)
        // ...
      }
    });
    console.log({ currentUser });
  }, [currentUser]);

  if (currentUser === undefined) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      {currentUser ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export const AppNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
