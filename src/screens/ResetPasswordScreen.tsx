import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { ISignInPanel } from '../features/sign-in/SignInPanel';
import { ResetPasswordPanel } from '../features/reset-password/ResetPasswordPanel';
import { ScreenWrapper } from '../components/ScreenWrapper';

export const ResetPasswordScreen: React.FC<ISignInPanel> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.hintHeader} category="h6" status="warning">
          Reset your password
        </Text>
        <ResetPasswordPanel navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  hintHeader: {
    marginVertical: 30,
    textAlign: 'center',
  },
});
