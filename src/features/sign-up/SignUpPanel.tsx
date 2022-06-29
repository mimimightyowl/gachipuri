import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { IAuthPanel } from '../auth/AuthPanel';
import { CustomButton } from '../../components/CustomButton';

interface ISignUpPanel extends IAuthPanel {}

export const SignUpPanel: React.FC<ISignUpPanel> = ({
  login,
  setLogin,
  password,
  secureTextEntry,
  setPassword,
  renderEyeWardenIcon,
  navigation,
}) => {
  return (
    <Layout style={styles.container}>
      <CustomInput
        value={login}
        label="Login"
        placeholder="Login"
        accessoryRight={null}
        onChangeText={(nextValue: string) => setLogin(nextValue)}
      />
      <CustomInput
        value={password}
        label="Password"
        placeholder="Password"
        accessoryRight={renderEyeWardenIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue: string) => setPassword(nextValue)}
      />
      <CustomButton
        name="Submit"
        disabled={login && password ? false : true}
        onPress={() => {
          login && password && navigation.navigate('Auth');
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
