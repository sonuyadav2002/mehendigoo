import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import Onboarding1 from "../screens/Auth/Onboarding1";
import Onboarding2 from "../screens/Auth/Onboarding2";
import Onboarding3 from "../screens/Auth/Onboarding3";
import OtpScreen from "../screens/Auth/OtpScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import RoleSelectionScreen from "../screens/Auth/RoleSelectionScreen";
import SplashScreen from "../screens/Auth/SplashScreen";
import ArtistFlowStack from "./ArtistFlowStack";
import ArtistStack from "./ArtistStack";
import CustomerStack from "./CustomerStack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="CustomerStack" component={CustomerStack} />
      <Stack.Screen name="ArtistFlowStack" component={ArtistFlowStack} />
      <Stack.Screen name="ArtistStack" component={ArtistStack} />
    </Stack.Navigator>
  );
}
