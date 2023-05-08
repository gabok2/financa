import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading';
import theme from './src/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/authContext';
import { HomeProvider } from './src/context/homeContext';
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.black,
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <HomeProvider>{fontsLoaded ? <Routes /> : <Loading />}</HomeProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
