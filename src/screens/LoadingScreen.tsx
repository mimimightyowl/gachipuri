import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';

export const LoadingScreen = () => {
  return (
    <Layout style={styles.loadingScreen}>
      <Spinner status="warning" size="giant" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
