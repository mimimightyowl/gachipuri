import React, { useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, IconProps, Layout } from '@ui-kitten/components';
import { CustomInput } from '../../components/CustomInput';
import { ISignInPanel } from '../sign-in/SignInPanel';
import { CustomButton } from '../../components/CustomButton';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../common/config';
import { EyeWardenIcon } from '../../common/icons/EyeWardenIcon';
import { FieldValues, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase-config';

export const SignUpPanel: React.FC<ISignInPanel> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<FieldValues, object>({ mode: 'onChange' });

  const pwd: string = watch('password');

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const [secureTextEntryRepeated, setSecureTextEntryRepeated] = useState(true);

  const toggleSecureEntryRepeated = () => {
    setSecureTextEntryRepeated(!secureTextEntryRepeated);
  };

  const onSignUpPress = async (data: FieldValues): Promise<void> => {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(`Error code: ${errorCode}`, errorMessage);
      });
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

  const onBackToSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Layout style={styles.container}>
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
      <TouchableOpacity
        style={styles.returnBackButton}
        onPress={onBackToSignInPress}>
        <Text style={styles.returnBackText} appearance="hint">
          Back to Sign In
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnBackButton: {
    marginVertical: 10,
  },
  returnBackText: {
    textAlign: 'center',
  },
});
