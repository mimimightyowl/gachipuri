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
import { Auth, Hub } from 'aws-amplify';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [user, setUser] = useState(undefined);

  const checkUserAuthorized = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUserAuthorized();
  }, []);

  useEffect(() => {
    const authListener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUserAuthorized();
      }
    };
    Hub.listen('auth', authListener);

    return () => Hub.remove('auth', authListener);
  }, []);

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      {user ? (
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
