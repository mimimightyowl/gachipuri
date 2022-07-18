import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Alert } from 'react-native';
import { IconProps, Text } from '@ui-kitten/components';
import {
  CONFIRMATION_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  VALIDATION_CODE_LENGTH,
} from '../../common/config';
import { CustomInput } from '../../components/CustomInput';
import { FieldValues, useForm } from 'react-hook-form';
import { CustomButton } from '../../components/CustomButton';
import { ISignInPanel } from '../sign-in/SignInPanel';
import { EyeWardenIcon } from '../../common/icons/EyeWardenIcon';

export const NewPasswordPanel: React.FC<ISignInPanel> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues, object>({ mode: 'onChange' });

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

  const onResetPasswordPress = async (data: FieldValues): Promise<void> => {
    const { email, code, password } = data;
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      navigation.navigate('SignIn');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };

  const onBackToSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
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
        name="code"
        label="Code"
        placeholder="Enter your confirmation code"
        onSubmitEditing={handleSubmit(() => {})}
        returnKeyType="done"
        keyboardType="number-pad"
        rules={{
          required: 'Confirmation code is required',
          minLength: {
            value: VALIDATION_CODE_LENGTH,
            message: `Confirmation code should be ${VALIDATION_CODE_LENGTH} characters`,
          },
          pattern: {
            value: CONFIRMATION_REGEX,
            message: 'Confirmation code is invalid',
          },
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
      <CustomButton
        name="Submit"
        disabled={!isValid}
        onPress={handleSubmit(onResetPasswordPress)}
      />
      <TouchableOpacity
        style={styles.returnBackButton}
        onPress={onBackToSignInPress}>
        <Text style={styles.returnBackText} appearance="hint">
          Back to Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  returnBackButton: {
    marginVertical: 10,
  },
  returnBackText: {
    textAlign: 'center',
  },
});
