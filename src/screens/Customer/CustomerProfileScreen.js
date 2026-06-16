import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";

const PRIMARY = "#F7146B";
const BG = "#FFF8FA";

const menuItems = [
  { icon: "calendar-outline", label: "My Bookings", screen: "MyBookings" },
  { icon: "heart-outline", label: "Wishlist", screen: "Wishlist" },
  { icon: "wallet-outline", label: "Wallet", screen: "Wallet" },
  { icon: "pricetag-outline", label: "Coupons", screen: "Coupons" },
  { icon: "notifications-outline", label: "Notifications", screen: "Notifications" },
  { icon: "headset-outline", label: "Support", screen: "Support" },
  { icon: "settings-outline", label: "Settings", screen: "Settings", params: { role: "customer" } },
  { icon: "shield-checkmark-outline", label: "Privacy Policy", screen: "PrivacyPolicy" },
  { icon: "document-text-outline", label: "Terms & Conditions", screen: "TermsConditions" },
];

export default function CustomerProfileScreen({ navigation }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => logout() },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.photoContainer}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>PS</Text>
            </View>
            <TouchableOpacity
              style={styles.editBadge}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Ionicons name="pencil" size={14} color="#FFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Priya Sharma</Text>
          <Text style={styles.phone}>+91 98765 43210</Text>
          <Text style={styles.email}>priya.sharma@gmail.com</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuCard}
              activeOpacity={0.7}
              onPress={() => navigation.navigate(item.screen, item.params || {})}
            >
              <View style={styles.menuLeft}>
                <View style={styles.menuIconWrap}>
                  <Ionicons name={item.icon} size={20} color={PRIMARY} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={20} color="#E53935" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },
  photoContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatarCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFF",
  },
  editBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: BG,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
  },
  phone: {
    fontSize: 15,
    color: "#666",
    marginBottom: 2,
  },
  email: {
    fontSize: 14,
    color: "#999",
  },
  menuSection: {
    marginBottom: 30,
  },
  menuCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#FFF0F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingVertical: 16,
    borderWidth: 1.5,
    borderColor: "#E53935",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#E53935",
  },
});
