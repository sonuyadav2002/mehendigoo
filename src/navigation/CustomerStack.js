import SupportScreen from "@/screens/Common/SupportScreen";
import AddressSelection from "@/screens/Customer/AddressSelection";
import ArtistListingScreen from "@/screens/Customer/ArtistListingScreen";
import BookingDetailsScreen from "@/screens/Customer/BookingDetailsScreen";
import BookingSuccessScreen from "@/screens/Customer/BookingSuccessScreen";
import CategoriesScreen from "@/screens/Customer/CategoriesScreen";
import CouponsScreen from "@/screens/Customer/CouponsScreen";
import LiveTrackingScreen from "@/screens/Customer/LiveTrackingScreen";
import MyBookingsScreen from "@/screens/Customer/MyBookingsScreen";
import SearchScreen from "@/screens/Customer/SearchScreen";
import SelectDateScreen from "@/screens/Customer/SelectDateScreen";
import SelectService from "@/screens/Customer/SelectService";
import SelectTimeSlotScreen from "@/screens/Customer/SelectTimeSlotScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfileScreen from "../screens/Common/EditProfileScreen";
import SettingsScreen from "../screens/Common/SettingsScreen";
import ArtistProfileScreen from "../screens/Customer/ArtistProfileScreen";
import BookingSummaryScreen from "../screens/Customer/BookingSummaryScreen";
import PaymentScreen from "../screens/Customer/PaymentScreen";
import PortfolioScreen from "../screens/Customer/PortfolioScreen";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CustomerTabs"
        component={BottomTab}
        initialParams={{ role: "customer" }}
      />
      <Stack.Screen name="ArtistProfile" component={ArtistProfileScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="ArtistListing" component={ArtistListingScreen} />
      <Stack.Screen name="SelectService" component={SelectService} />
      <Stack.Screen name="SelectDate" component={SelectDateScreen} />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen name="BookingSummary" component={BookingSummaryScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="SelectTimeSlot" component={SelectTimeSlotScreen} />
      <Stack.Screen name="AddressSelection" component={AddressSelection} />
      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
      <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
      <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
      <Stack.Screen name="Coupons" component={CouponsScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
    </Stack.Navigator>
  );
}
