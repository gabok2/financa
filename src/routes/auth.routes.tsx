import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import React from 'react';

import { Login } from '@screens/Login';

type AuthRoutesParams = {
  Login: undefined;
};

export type AuthRoutesNavigationProp =
  NativeStackNavigationProp<AuthRoutesParams>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
