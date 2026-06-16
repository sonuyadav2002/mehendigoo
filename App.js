import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { ArtistOnboardingProvider } from "./src/context/ArtistOnboardingContext";
import { AuthProvider } from "./src/context/AuthContext";
import RootNavigator from "./src/navigation/RootNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: Poppins_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AuthProvider>
        <ArtistOnboardingProvider>
          <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ArtistOnboardingProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
