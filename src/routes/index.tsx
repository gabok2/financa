import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AppRoutes } from './app.routes';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      '939299395665-3q0s4g1p6r34ga0t4v978tr48ksbg3v2.apps.googleusercontent.com',
  });

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
