import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createContext, ReactNode, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string | null;
  email: string;
  photo?: string | null;
  familyName: string | null;
  givenName: string | null;
};

interface AuthContextData {
  user: User;
  signIn: () => Promise<FirebaseAuthTypes.UserCredential>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function loadUserFromStorage() {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const savedUser = JSON.parse(userString);
        setUser(savedUser);
      }
    }
    loadUserFromStorage();
  }, []);

  async function signIn(): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken, user } = await GoogleSignin.signIn();
      setUser(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const signOut = async () => {
    await auth()
      .signOut()
      .then(async () => {
        await GoogleSignin.signOut().then(() =>
          console.log('User signed out!')
        );
        await AsyncStorage.removeItem('user');
        setUser({} as User);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
