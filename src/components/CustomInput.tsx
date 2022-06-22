import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '@ui-kitten/components';

interface ICustomInput {
  value: string;
  label: string;
  placeholder: string;
  caption?: string;
  accessoryRight?: any;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

export const CustomInput: React.FC<ICustomInput> = ({
  value,
  label,
  placeholder,
  caption,
  accessoryRight,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <Input
      style={styles.input}
      value={value}
      label={label}
      placeholder={placeholder}
      caption={caption}
      accessoryRight={accessoryRight}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 15,
    maxWidth: '80%',
  },
});
