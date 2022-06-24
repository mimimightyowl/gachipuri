import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@ui-kitten/components';

interface IEyeWardenIcon {
  isSecure: boolean;
  onPress: () => void;
}
export const EyeWardenIcon: React.FC<IEyeWardenIcon> = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon {...props} name={props.isSecure ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
};
