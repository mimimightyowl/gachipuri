import React, { useState, useEffect } from 'react';
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
import { Alert, TouchableOpacity } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { useForm, FieldValues } from 'react-hook-form';
import { EyeWardenIcon } from '../../common/icons/EyeWardenIcon';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../common/config';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

export interface ISignInPanel {
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

export const SignInPanel: React.FC<ISignInPanel> = ({ navigation }) => {
  const route = useRoute();

  const styles = useStyleSheet(themedStyles);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues, object>({
    defaultValues: { email: route?.params?.email },
    mode: 'onChange',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

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

  const onForgotPasswordPress = () => navigation.navigate('Reset Password');

  const onSignInPress = async (data: FieldValues): Promise<void> => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await Auth.signIn(data.email, data.password);
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);

    navigation.navigate('Home');
  };

  useEffect(() => {}, [route]);

  return (
    <Layout style={styles.container}>
      <Text style={styles.headerText} category="h6" status="warning">
        Help you with choosing a restaurant for tonight
      </Text>
      <CustomInput
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        rules={{
          required: 'Email is required',
          minLength: {
            value: 3,
            message: 'Email should be at least 3 characters',
          },
          maxLength: {
            value: 36,
            message: 'Email should be max 36 characters long',
          },
          pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
        }}
      />
      <CustomInput
        control={control}
        name="password"
        label="Password"
        placeholder="Password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password should be at least 6 characters',
          },
          pattern: {
            value: PASSWORD_REGEX,
            message:
              'Must contain digit, lower & uppercase letters, special character',
          },
        }}
        secureTextEntry={secureTextEntry}
        accessoryRight={renderEyeWardenIcon}
      />
      <TouchableOpacity
        style={styles.restorePassword}
        onPress={onForgotPasswordPress}>
        <Text style={styles.restorePasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton
        name={!loading ? 'Sign in' : 'Loading...'}
        disabled={!isValid && !loading}
        onPress={handleSubmit(onSignInPress)}
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
