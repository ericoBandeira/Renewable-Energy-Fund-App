
import { Login } from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_700Bold,
  Sora_600SemiBold
} from '@expo-google-fonts/sora'

export default function App() {

  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_700Bold,
    Sora_600SemiBold
  })

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme} >
        <Login />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme} >
      <Login />
    </ThemeProvider>
  );
}
