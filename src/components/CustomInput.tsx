import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, IconProps } from '@ui-kitten/components';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface ICustomInput {
  control: Control<FieldValues, any> | undefined;
  name: string;
  inputName: string;
  accessoryRight?: (props: IconProps) => JSX.Element;
  secureTextEntry?: boolean;
}

export const CustomInput: React.FC<ICustomInput> = ({
  control,
  name,
  inputName,
  accessoryRight,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          style={styles.input}
          value={value}
          label={inputName}
          placeholder={inputName}
          accessoryRight={accessoryRight}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          onChangeText={onChange}
        />
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    maxWidth: '80%',
  },
});
