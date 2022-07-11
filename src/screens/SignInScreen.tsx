import React from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { SignInPanel } from '../features/sign-in/SignInPanel';

export const SignInScreen: React.FC = ({ navigation }: any) => {
  return (
    <ScreenWrapper>
      <SignInPanel navigation={navigation} />
    </ScreenWrapper>
  );
};
