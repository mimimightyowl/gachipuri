import React from 'react';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { IconProps } from '../../screens/AuthScreen';
import { GoogleIcon } from '../../common/icons/GoogleIcon';
import { FacebookIcon } from '../../common/icons/FacebookIcon';
import { TwitterIcon } from '../../common/icons/TwitterIcon';
import { CustomDivider } from '../../components/CustomDivider';
import { TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components/CustomButton';

export interface IAuthPanel {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  secureTextEntry: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  renderEyeWardenIcon: (props: IconProps) => JSX.Element;
  navigation: any;
}

export const AuthPanel: React.FC<IAuthPanel> = ({
  login,
  setLogin,
  password,
  secureTextEntry,
  setPassword,
  renderEyeWardenIcon,
  navigation,
}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.container}>
      <Text style={styles.headerText} category="h6" status="warning">
        Help you with choosing a restaurant for tonight
      </Text>
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
      <TouchableOpacity style={styles.restorePassword}>
        <Text style={styles.restorePasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton
        name="Sign in"
        disabled={login && password ? false : true}
        onPress={() => {
          login && password && navigation.navigate('Home');
        }}
      />
      <CustomButton
        name="Continue with Google"
        status="warning"
        accessoryLeft={GoogleIcon}
        onPress={() => {}}
      />
      <CustomButton
        name="Continue with Facebook"
        status="warning"
        accessoryLeft={FacebookIcon}
        onPress={() => {}}
      />
      <CustomButton
        name="Continue with Twitter"
        status="warning"
        accessoryLeft={TwitterIcon}
        onPress={() => {}}
      />
      <Layout style={styles.signUpContainer}>
        <CustomDivider />
        <Text style={styles.suggestionText}>or</Text>
        <CustomDivider />
      </Layout>
      <CustomButton
        name="Create Account"
        status="info"
        onPress={() => navigation.navigate('Sign Up')}
      />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    width: '80%',
    marginTop: '20%',
    marginBottom: 20,
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restorePassword: {
    width: '80%',
    marginTop: 10,
    marginBottom: 20,
  },
  restorePasswordText: {
    color: 'color-basic-600',
  },
  suggestionText: {
    marginHorizontal: 10,
    color: 'color-basic-600',
  },
});
