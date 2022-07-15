import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const googleConfig = () => {
  GoogleSignin.configure({
    webClientId:
      '928330599825-6oka31ji83aphgmcbga85qt1mkh41000.apps.googleusercontent.com',
  });
};
