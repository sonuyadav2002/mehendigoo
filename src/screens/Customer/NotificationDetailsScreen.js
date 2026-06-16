import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationDetailsScreen({ navigation }) {
  const notification = {
    title: "Booking Confirmed!",
    message:
      "Your booking with Priya Mehendi Artist for Bridal Mehendi on 15 Jun 2026 at 11:00 AM has been confirmed. The artist will arrive at your location on time. Please ensure all preparations are complete before the scheduled time.",
    timestamp: "04 Jun 2026, 10:30 AM",
    type: "booking",
    actionLabel: "View Booking",
    actionAvailable: true,
  };

  const getIcon = () => {
    switch (notification.type) {
      case "booking":
        return "calendar-check-outline";
      case "payment":
        return "wallet-outline";
      case "reminder":
        return "alarm-outline";
      case "promo":
        return "pricetag-outline";
      default:
        return "notifications-outline";
    }
  };

  const getIconBg = () => {
    switch (notification.type) {
      case "booking":
        return "#E8FFF0";
      case "payment":
        return "#FFF2F2";
      case "reminder":
        return "#FFF8E1";
      case "promo":
        return "#F3E8FF";
      default:
        return "#F0F0FF";
    }
  };

  const getIconColor = () => {
    switch (notification.type) {
      case "booking":
        return "#16A34A";
      case "payment":
        return "#EF4444";
      case "reminder":
        return "#F59E0B";
      case "promo":
        return "#8B5CF6";
      default:
        return "#6366F1";
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#1D1D1D" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Notification</Text>
        </View>

        <View style={styles.content}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: getIconBg() },
            ]}
          >
            <Ionicons
              name={getIcon()}
              size={32}
              color={getIconColor()}
            />
          </View>

          <Text style={styles.title}>{notification.title}</Text>

          <Text style={styles.timestamp}>{notification.timestamp}</Text>

          <View style={styles.divider} />

          <Text style={styles.message}>{notification.message}</Text>

          {notification.actionAvailable && (
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => navigation.navigate("BookingDetails")}
            >
              <Ionicons name="calendar-outline" size={18} color="#FFF" />

              <Text style={styles.actionBtnText}>
                {notification.actionLabel}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  content: {
    paddingHorizontal: 20,
    alignItems: "center",
    paddingTop: 10,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },
  timestamp: {
    fontSize: 13,
    color: "#999",
    marginTop: 8,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#F1F1F1",
    marginVertical: 24,
  },
  message: {
    fontSize: 15,
    color: "#444",
    lineHeight: 24,
    textAlign: "left",
    width: "100%",
  },
  actionBtn: {
    marginTop: 30,
    marginBottom: 40,
    height: 52,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  actionBtnText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 8,
  },
});