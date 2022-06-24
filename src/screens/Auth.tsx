import React, { useState } from 'react';
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
import { EyeWardenIcon } from '../common/icons/EyeWardenIcon';
import { AuthPanel } from '../features/auth/AuthPanel';

export type IconProps = {
  style: {
    height: number;
    width: number;
    marginHorizontal: number;
    tintColor: string;
  };
};

export const AuthScreen: React.FC = ({ navigation }: any) => {
  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const theme = useTheme();
  const renderEyeWardenIcon = (props: IconProps) => {
    return (
      <EyeWardenIcon
        {...props}
        onPress={toggleSecureEntry}
        isSecure={secureTextEntry}
      />
    );
  };

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
            <AuthPanel
              login={login}
              setLogin={setLogin}
              password={password}
              setPassword={setPassword}
              secureTextEntry={secureTextEntry}
              renderEyeWardenIcon={renderEyeWardenIcon}
              navigation={navigation}
            />
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
