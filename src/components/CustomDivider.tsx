import React from 'react';
import { Divider, useStyleSheet, StyleService } from '@ui-kitten/components';

export const CustomDivider = () => {
  const styles = useStyleSheet(themedStyles);

  return <Divider style={styles.divider} />;
};

const themedStyles = StyleService.create({
  divider: {
    backgroundColor: 'color-basic-600',
    width: '35%',
  },
});
