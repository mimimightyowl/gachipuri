import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { SignUpPanel } from '../features/sign-up/SignUpPanel';

export const SignUpScreen: React.FC = ({ navigation }: any) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SignUpPanel navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
});
