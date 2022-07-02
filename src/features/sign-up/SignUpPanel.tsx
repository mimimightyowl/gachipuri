import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IconProps, Layout } from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { IAuthPanel } from '../auth/AuthPanel';
import { CustomButton } from '../../components/CustomButton';
import { EMAIL_REGEX } from '../../common/config';
import { EyeWardenIcon } from '../../common/icons/EyeWardenIcon';
import { FieldValues, useForm } from 'react-hook-form';

interface ISignUpPanel extends IAuthPanel {}

export const SignUpPanel: React.FC<ISignUpPanel> = ({ navigation }) => {
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

  const onSignUpPress = (data: any) => {
    console.log(data);
    navigation.navigate('Auth');
  };

  return (
    <Layout style={styles.container}>
      <CustomInput
        control={control}
        name="login"
        label="Login"
        placeholder="Login"
        rules={{
          required: 'Login is required',
          minLength: {
            value: 3,
            message: 'Login should be at least 3 characters',
          },
          maxLength: {
            value: 24,
            message: 'Login should be max 24 characters long',
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
