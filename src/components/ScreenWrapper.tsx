import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  isAndroid,
  androidKeyboardVerticalOffset,
  iOSKeyboardVerticalOffset,
} from '../common/config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@ui-kitten/components';

export const ScreenWrapper: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-1'] },
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          isAndroid ? androidKeyboardVerticalOffset : iOSKeyboardVerticalOffset
        }
        style={styles.keyboardWrapper}>
        <ScrollView>
          <Pressable>{children}</Pressable>
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
