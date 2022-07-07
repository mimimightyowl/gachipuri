import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Text } from '@ui-kitten/components';
import { ISignInPanel } from '../features/auth/SignInPanel';
import { ResetPasswordPanel } from '../features/reset-password/ResetPasswordPanel';

export const ResetPasswordScreen: React.FC<ISignInPanel> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}>
      <Text style={styles.hintHeader} category="h6" status="warning">
        Reset your password
      </Text>
      <ResetPasswordPanel navigation={navigation} />
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
