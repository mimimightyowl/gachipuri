import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { ISignInPanel } from '../features/sign-in/SignInPanel';
import { NewPasswordPanel } from '../features/reset-password/NewPasswordPanel';
import { ScreenWrapper } from '../components/ScreenWrapper';

export const NewPasswordScreen: React.FC<ISignInPanel> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.hintHeader} category="h6" status="warning">
          Reset your password
        </Text>
        <NewPasswordPanel navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  hintHeader: {
    marginVertical: 30,
    textAlign: 'center',
  },
});
