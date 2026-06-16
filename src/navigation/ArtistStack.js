import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChangePasswordScreen from "../screens/Common/ChangePasswordScreen";
import DeleteAccountScreen from "../screens/Common/DeleteAccountScreen";
import EditProfileScreen from "../screens/Common/EditProfileScreen";
import NotificationCenterScreen from "../screens/Common/NotificationCenterScreen";
import PrivacyPolicyScreen from "../screens/Common/PrivacyPolicyScreen";
import SettingsScreen from "../screens/Common/SettingsScreen";
import TermsConditionsScreen from "../screens/Common/TermsConditionsScreen";

import AddPortfolioScreen from "../screens/Artist/AddPortfolioScreen";
import BookingDetailsScreen from "../screens/Artist/BookingDetailsScreen";
import KycScreen from "../screens/Artist/KycScreen";
import LeadDetailsScreen from "../screens/Artist/LeadDetailsScreen";
import NotificationDetailsScreen from "../screens/Artist/NotificationDetailsScreen";
import PortfolioScreen from "../screens/Artist/PortfolioScreen";
import ProfileScreen from "../screens/Artist/ProfileScreen";
import PublicProfileScreen from "../screens/Artist/PublicProfileScreen";
import TransactionsScreen from "../screens/Artist/TransactionsScreen";
import WalletScreen from "../screens/Artist/WalletScreen";
import WithdrawEarningsScreen from "../screens/Artist/WithdrawEarningsScreen";

import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

export default function ArtistStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArtistTabs" component={BottomTab} initialParams={{ role: "artist" }} />
      <Stack.Screen name="LeadDetails" component={LeadDetailsScreen} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen name="AddPortfolio" component={AddPortfolioScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Kyc" component={KycScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="WithdrawEarnings" component={WithdrawEarningsScreen} />
      <Stack.Screen name="PublicProfile" component={PublicProfileScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="NotificationCenter" component={NotificationCenterScreen} />
      <Stack.Screen name="NotificationDetails" component={NotificationDetailsScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
    </Stack.Navigator>
  );
}
