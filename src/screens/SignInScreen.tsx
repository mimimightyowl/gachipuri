import React from 'react';
import {
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignInPanel } from '../features/sign-in/SignInPanel';

export const SignInScreen: React.FC = ({ navigation }: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardWrapper}>
        <ScrollView>
          <Pressable style={styles.contentWrapper} onPress={Keyboard.dismiss}>
            <SignInPanel navigation={navigation} />
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardWrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    height: '100%',
  },
});
