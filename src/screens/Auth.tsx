import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomInput } from '../components/CustomInput';
import { IEyeWardenIcon } from '../common/icons/EyeWardenIcon';

export const AuthScreen: React.FC = () => {
  const [login, setLogin] = useState('');

  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => {
    return (
      <IEyeWardenIcon
        {...props}
        onPress={toggleSecureEntry}
        isSecure={secureTextEntry}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.container}>
        <Layout style={styles.inputsContainer}>
          <CustomInput
            value={login}
            label="Login"
            placeholder="Login"
            accessoryRight={null}
            onChangeText={nextValue => setLogin(nextValue)}
          />
          <CustomInput
            value={password}
            label="Password"
            placeholder="Password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
          />
        </Layout>
        <Layout style={styles.lazySignIn}>
          <TouchableOpacity>
            <Icon style={styles.icon} name="google" fill="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.icon} name="twitter" fill="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.icon} name="facebook" fill="black" />
          </TouchableOpacity>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  inputsContainer: {
    alignItems: 'center',
  },
  lazySignIn: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
