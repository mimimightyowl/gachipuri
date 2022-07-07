import { useTheme } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUpPanel } from '../features/sign-up/SignUpPanel';

export const SignUpScreen: React.FC = ({ navigation }: any) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}>
      <SignUpPanel navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
