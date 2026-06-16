import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function BookingSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark" size={50} color={Colors.white} />
        </View>
        <Text style={styles.title}>Booking Confirmed 🎉</Text>
        <Text style={styles.subtitle}>Your Mehendi Artist has been booked successfully.</Text>

        <View style={styles.bookingCard}>
          <Text style={styles.bookingIdLabel}>Booking ID</Text>
          <Text style={styles.bookingId}>#MG202600123</Text>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Artist</Text>
            <Text style={styles.value}>Priya Mehendi Artist</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>15 June 2026</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>11:00 AM</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.price}>₹2,835</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.trackBtn} onPress={() => navigation.navigate("LiveTracking")}>
        <Text style={styles.trackText}>Track Booking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("MyBookings")}>
        <Text style={styles.buttonText}>View My Bookings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, justifyContent: "space-between" },
  content: { flex: 1, justifyContent: "center", paddingHorizontal: 24 },
  iconContainer: { alignSelf: "center", width: 100, height: 100, borderRadius: 50, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center" },
  title: { marginTop: 25, fontSize: 24, fontWeight: "700", textAlign: "center", color: Colors.text },
  subtitle: { marginTop: 10, fontSize: 14, textAlign: "center", color: Colors.textSecondary, lineHeight: 22 },
  bookingCard: { marginTop: 35, backgroundColor: Colors.background, borderRadius: 16, padding: 18 },
  bookingIdLabel: { fontSize: 12, color: Colors.textSecondary },
  bookingId: { fontSize: 18, fontWeight: "700", color: Colors.primary, marginTop: 4 },
  divider: { height: 1, backgroundColor: Colors.border, marginVertical: 15 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  label: { fontSize: 14, color: Colors.textSecondary },
  value: { fontSize: 14, fontWeight: "600", color: Colors.text },
  price: { fontSize: 15, fontWeight: "700", color: Colors.primary },
  button: { margin: 20, height: 54, borderRadius: 12, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center" },
  buttonText: { color: Colors.white, fontSize: 15, fontWeight: "600" },
  trackBtn: { marginHorizontal: 20, borderWidth: 1, borderColor: Colors.border, borderRadius: 10, height: 45, justifyContent: "center", alignItems: "center" },
  trackText: { color: Colors.textSecondary, fontSize: 14, fontWeight: "500" },
});
