import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, useTheme } from '@ui-kitten/components';

export const TwitterIcon = () => {
  const theme = useTheme();

  return (
    <Icon
      style={styles.icon}
      name="twitter"
      fill={theme['color-primary-100']}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
