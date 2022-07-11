import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { ConfirmationCodeField } from '../features/sign-up/ConfirmationCodeField';
import { ISignInPanel } from '../features/sign-in/SignInPanel';
import { ScreenWrapper } from '../components/ScreenWrapper';

export const ConfirmSignUpScreen: React.FC<ISignInPanel> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.hintHeader} category="h6" status="warning">
          Check your email, we sent you code
        </Text>
        <ConfirmationCodeField navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  hintHeader: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
