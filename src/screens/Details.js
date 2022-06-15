import React from 'react';
import { defaultSafeAreaEdges } from '../common/config';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = props => <Icon {...props} name="arrow-back" />;
export const DetailsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1 }} edges={defaultSafeAreaEdges}>
        <TopNavigation
          title="MyApp"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category="h1">DETAILS</Text>
        </Layout>
      </SafeAreaView>
    </>
  );
};
