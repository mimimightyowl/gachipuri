import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IconProps, useTheme } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignUpPanel } from '../features/sign-up/SignUpPanel';
import { EyeWardenIcon } from '../common/icons/EyeWardenIcon';

export const SignUpScreen: React.FC = ({ navigation }: any) => {
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
      <SignUpPanel
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        secureTextEntry={secureTextEntry}
        renderEyeWardenIcon={renderEyeWardenIcon}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
