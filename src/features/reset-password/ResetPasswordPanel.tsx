import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { EMAIL_REGEX } from '../../common/config';
import { CustomInput } from '../../components/CustomInput';
import { FieldValues, useForm } from 'react-hook-form';
import { CustomButton } from '../../components/CustomButton';
import { ISignInPanel } from '../sign-in/SignInPanel';
import { Auth } from 'aws-amplify';
export const ResetPasswordPanel: React.FC<ISignInPanel> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FieldValues, object>({ mode: 'onChange' });

  const onSendPress = async (data: FieldValues): Promise<void> => {
    try {
      await Auth.forgotPassword(data.email);
      navigation.navigate('NewPassword');
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
      <CustomButton
        name="Send"
        disabled={!isValid}
        onPress={handleSubmit(onSendPress)}
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
