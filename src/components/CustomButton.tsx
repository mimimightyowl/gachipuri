import React from 'react';
import { StyleSheet, ImageProps } from 'react-native';
import { RenderProp } from '@ui-kitten/components/devsupport/components/falsyFC/falsyFC.component';

import { Button } from '@ui-kitten/components';

interface ICustomButton {
  accessoryLeft?: RenderProp<Partial<ImageProps>> | undefined;
  accessoryRight?: RenderProp<Partial<ImageProps>> | undefined;
  status?:
    | 'basic'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'control';
  appearance?: 'filled' | 'outline' | 'ghost';
  disabled?: boolean;
  name: string;
  onPress: () => void;
}
export const CustomButton: React.FC<ICustomButton> = props => {
  return (
    <Button style={styles.button} {...props}>
      {props.name}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    marginVertical: 10,
  },
});
