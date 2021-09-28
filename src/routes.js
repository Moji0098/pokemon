import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// redux
import {useSelectorUserInfo} from './redux/selectors/selectors';
//---stacks
import LoginScreen from './screens/LoginScreen';
import DrawerStack from './routes-stack/DrawerStack';

const Routes = () => {
  const {token} = useSelectorUserInfo() || {token: null};

  return (
    <>
      <NavigationContainer>
        {!token && <LoginScreen />}
        {token && <DrawerStack />}
      </NavigationContainer>
    </>
  );
};

export default Routes;
