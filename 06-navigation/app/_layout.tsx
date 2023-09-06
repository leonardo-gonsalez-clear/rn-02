import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Drawer } from "expo-router/drawer"
import { Octicons } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'TelaA',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}


const icons = (color: string, size: number) => {

  return {
    TelaA: <Octicons name='code' color={color} size={size} />,
    TelaB: <Octicons name='mail' color={color} size={size} />,
    TelaC: <Octicons name='sync' color={color} size={size} />,
  }
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Drawer initialRouteName = 'TelaA' > * /}
      {/*   <Drawer.Screen name='index' redirect /> */}
      {/*   <Drawer.Screen name="TelaA" /> */}
      {/*   <Drawer.Screen name="TelaB" /> */}
      {/*   <Drawer.Screen name="TelaC" /> */}
      {/* </Drawer> */}
      <Tabs initialRouteName='TelaA' screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          return icons(color, size)[route.name as keyof typeof icons]
        }
      })}>
        <Tabs.Screen name='index' redirect />
        <Tabs.Screen name="TelaA" />
        <Tabs.Screen name="TelaB" />
        <Tabs.Screen name="TelaC" />
      </Tabs>
    </ThemeProvider>
  );
}
