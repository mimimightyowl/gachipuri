import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { IconProps } from '../../features/auth/AuthPanel';

interface IEyeWardenIcon extends IconProps {
  isSecure: boolean;
  onPress: () => void;
}
export const EyeWardenIcon: React.FC<IEyeWardenIcon> = ({
  style,
  isSecure,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon style={style} name={isSecure ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
};
