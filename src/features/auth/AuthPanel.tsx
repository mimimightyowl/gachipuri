import React, { useState } from 'react';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { GoogleIcon } from '../../common/icons/GoogleIcon';
import { FacebookIcon } from '../../common/icons/FacebookIcon';
import { TwitterIcon } from '../../common/icons/TwitterIcon';
import { CustomDivider } from '../../components/CustomDivider';
import { TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { useForm } from 'react-hook-form';
import { EyeWardenIcon } from '../../common/icons/EyeWardenIcon';

export interface IAuthPanel {
  navigation: any;
}

export type IconProps = {
  style: {
    height: number;
    width: number;
    marginHorizontal: number;
    tintColor: string;
  };
};

export const AuthPanel: React.FC<IAuthPanel> = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderEyeWardenIcon = (props: IconProps) => {
    return (
      <EyeWardenIcon
        {...props}
        onPress={toggleSecureEntry}
        isSecure={secureTextEntry}
      />
    );
  };

  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout style={styles.container}>
      <Text style={styles.headerText} category="h6" status="warning">
        Help you with choosing a restaurant for tonight
      </Text>

      <CustomInput control={control} name="login" inputName="Login" />
      <CustomInput
        control={control}
        name="password"
        inputName="Password"
        accessoryRight={renderEyeWardenIcon}
      />
      <TouchableOpacity style={styles.restorePassword}>
        <Text style={styles.restorePasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton
        name="Sign in"
        // disabled={login && password ? false : true}
        onPress={
          handleSubmit(onSubmit)
          // login && password && navigation.navigate('Home');
        }
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
