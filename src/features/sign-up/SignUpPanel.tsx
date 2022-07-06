import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { IconProps, Layout } from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { ISignInPanel } from '../auth/SignInPanel';
import { CustomButton } from '../../components/CustomButton';
import { EMAIL_REGEX } from '../../common/config';
import { EyeWardenIcon } from '../../common/icons/EyeWardenIcon';
import { FieldValues, useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

export const SignUpPanel: React.FC<ISignInPanel> = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const [secureTextEntryRepeated, setSecureTextEntryRepeated] = useState(true);

  const toggleSecureEntryRepeated = () => {
    setSecureTextEntryRepeated(!secureTextEntryRepeated);
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
  const renderEyeWardenIconRepeated = (props: IconProps) => {
    return (
      <EyeWardenIcon
        {...props}
        onPress={toggleSecureEntryRepeated}
        isSecure={secureTextEntry}
      />
    );
  };

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<FieldValues, object>({ mode: 'onChange' });

  const pwd: string = watch('password');

  const onSignUpPress = async (data: FieldValues): Promise<void> => {
    const { username, password } = data;
    try {
      await Auth.signUp({ username, password });
      navigation.navigate('Confirm Sign Up', { username });
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <Layout style={styles.container}>
      <CustomInput
        control={control}
        name="username"
        label="Username"
        placeholder="Username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be at least 3 characters',
          },
          maxLength: {
            value: 36,
            message: 'Username should be max 36 characters long',
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
        }}
        secureTextEntry={secureTextEntry}
        accessoryRight={renderEyeWardenIcon}
      />
      <CustomInput
        control={control}
        name="password-repeat"
        label="Password"
        placeholder="Repeat password"
        rules={{
          validate: value => value === pwd || 'Password do not match',
        }}
        secureTextEntry={secureTextEntryRepeated}
        accessoryRight={renderEyeWardenIconRepeated}
      />
      <CustomButton
        name="Sign up"
        disabled={!isValid}
        onPress={handleSubmit(onSignUpPress)}
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
