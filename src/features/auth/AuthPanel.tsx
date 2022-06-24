import React from 'react';
import {
  Layout,
  Button,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { IconProps } from '../../screens/Auth';
import { GoogleIcon } from '../../common/icons/GoogleIcon';
import { FacebookIcon } from '../../common/icons/FacebookIcon';
import { TwitterIcon } from '../../common/icons/TwitterIcon';
import { CustomDivider } from '../../components/CustomDivider';

interface IAuthPanel {
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
      <Text style={styles.header} category="h6" status="warning">
        Choose a restaurant for tonight
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
      <Button
        disabled={login && password ? false : true}
        style={styles.button}
        onPress={login && password ? () => navigation.navigate('Home') : null}>
        Sign in
      </Button>
      <Button style={styles.button} status="warning" accessoryLeft={GoogleIcon}>
        Continue with Google
      </Button>
      <Button
        style={styles.button}
        status="warning"
        accessoryLeft={FacebookIcon}>
        Continue with Facebook
      </Button>
      <Button
        style={styles.button}
        status="warning"
        accessoryLeft={TwitterIcon}>
        Continue with Twitter
      </Button>
      <Layout style={styles.signUpContainer}>
        <CustomDivider />
        <Text style={styles.suggestionText}>or</Text>
        <CustomDivider />
      </Layout>
      <Button style={styles.button} status="info">
        Create Account
      </Button>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '80%',
    marginTop: '20%',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionText: {
    marginHorizontal: 10,
    color: 'color-basic-600',
  },
});
