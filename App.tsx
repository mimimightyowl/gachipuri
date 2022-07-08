import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
