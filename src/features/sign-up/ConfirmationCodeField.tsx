import React from 'react';
import {
  Text,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { Alert, TouchableOpacity } from 'react-native';
import {
  CONFIRMATION_REGEX,
  EMAIL_REGEX,
  VALIDATION_CODE_LENGTH,
} from '../../common/config';
import { useForm, FieldValues } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CustomInput } from '../../components/CustomInput';
import { ISignInPanel } from '../sign-in/SignInPanel';
import { useRoute } from '@react-navigation/native';
import { CustomButton } from '../../components/CustomButton';

export const ConfirmationCodeField: React.FC<ISignInPanel> = ({
  navigation,
}) => {
  const route = useRoute();

  const styles = useStyleSheet(themedStyles);

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<FieldValues, object>({
    defaultValues: { email: route?.params?.email },
    mode: 'onChange',
  });

  const email: string = watch('email');

  const onSubmitEditing = async (data: FieldValues): Promise<void> => {
    try {
      await Auth.confirmSignUp(data.email, data.code);
      navigation.navigate('Sign In', { email });
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };

  const onResendCode = async (): Promise<void> => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Success', 'Code was resent to your email');
    } catch (e: any) {
      Alert.alert('Oops', e.message);
    }
  };

  const onBackToSignInPress = () => {
    navigation.navigate('Sign In');
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
        name="code"
        label="Code"
        placeholder="Enter your confirmation code"
        onSubmitEditing={handleSubmit(onSubmitEditing)}
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
      <CustomButton
        name="Confirm"
        disabled={!isValid}
        onPress={handleSubmit(onSubmitEditing)}
      />
      <CustomButton name="Resend code" onPress={handleSubmit(onResendCode)} />
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

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  returnBackButton: {
    marginVertical: 10,
  },
  returnBackText: {
    textAlign: 'center',
  },
});
