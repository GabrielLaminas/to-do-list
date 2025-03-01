import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { useFonts } from "expo-font"
import Home from './src/screens/Home';

export default function App() {
  const [loaded, error] = useFonts({
    'inter-regular': require('./assets/fonts/inter-regular.ttf'),
    'inter-bold': require('./assets/fonts/inter-bold.ttf'),
  })

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar 
        backgroundColor="transparent"
        style='light'
        translucent
      />
      <Home />
    </>
  );
}
