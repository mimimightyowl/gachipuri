import React from 'react';
import {
  Input,
  Text,
  IconProps,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface ICustomInput {
  control: Control<FieldValues, any> | undefined;
  name: string;
  label: string;
  placeholder: string;
  rules?: {
    validate?: (value: string) => boolean | string;
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  accessoryRight?: (props: IconProps) => JSX.Element;
  secureTextEntry?: boolean;
}

export const CustomInput: React.FC<ICustomInput> = ({
  control,
  name,
  label,
  placeholder,
  rules = {},
  accessoryRight,
  secureTextEntry,
}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Controller
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <Input
            style={[styles.input, error && styles.notValidInput]}
            value={value}
            label={label}
            placeholder={placeholder}
            accessoryRight={accessoryRight}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            onChangeText={onChange}
          />
          {error && (
            <Text style={styles.validationHint} status="danger">
              {error.message}
            </Text>
          )}
        </>
      )}
      name={name}
    />
  );
};

const themedStyles = StyleService.create({
  input: {
    marginVertical: 5,
    maxWidth: '80%',
  },
  notValidInput: {
    borderColor: 'color-danger-transparent-default-border',
  },
  validationHint: {
    width: '80%',
  },
});
