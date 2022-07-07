import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Text } from '@ui-kitten/components';
import { ConfirmationCodeField } from '../features/sign-up/ConfirmationCodeField';
import { ISignInPanel } from '../features/auth/SignInPanel';

export const ConfirmSignUpScreen: React.FC<ISignInPanel> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}>
      <Text style={styles.hintHeader} category="h6" status="warning">
        Check your email, we sent you code
      </Text>
      <ConfirmationCodeField navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hintHeader: {
    marginVertical: 30,
    textAlign: 'center',
  },
});
