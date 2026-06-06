import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingDetailsScreen({ navigation }) {
  const booking = {
    bookingId: "#BK1023",
    artist: "Priya Mehendi Artist",
    service: "Bridal Mehendi",
    date: "15 Jun 2026",
    time: "11:00 AM",
    location: "Jaipur, Rajasthan",
    amount: "₹1499",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#111" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Booking Details</Text>
        </View>
        <Image source={{ uri: booking.image }} style={styles.artistImage} />

        <View style={styles.content}>
          <View style={styles.statusRow}>
            <Text style={styles.bookingId}>{booking.bookingId}</Text>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{booking.status}</Text>
            </View>
          </View>

          <Text style={styles.artistName}>{booking.artist}</Text>

          <Text style={styles.service}>{booking.service}</Text>

          <View style={styles.card}>
            <DetailRow
              icon="calendar-outline"
              label="Date"
              value={booking.date}
            />

            <DetailRow icon="time-outline" label="Time" value={booking.time} />

            <DetailRow
              icon="location-outline"
              label="Location"
              value={booking.location}
            />

            <DetailRow
              icon="wallet-outline"
              label="Amount"
              value={booking.amount}
            />
          </View>

          <TouchableOpacity style={styles.callBtn}>
            <Ionicons name="call-outline" size={18} color="#FFF" />

            <Text style={styles.callBtnText}>Call Artist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.leftRow}>
        <Ionicons name={icon} size={18} color="#F7146B" />

        <Text style={styles.label}>{label}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  backBtn: {
    marginRight: 15,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  artistImage: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bookingId: {
    fontSize: 14,
    color: "#777",
    fontWeight: "600",
  },

  statusBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#16A34A",
    fontWeight: "600",
    fontSize: 12,
  },

  artistName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 12,
  },

  service: {
    fontSize: 15,
    color: "#666",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#F1F1F1",
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    marginLeft: 10,
    fontSize: 14,
    color: "#555",
  },

  value: {
    fontSize: 14,
    color: "#111",
    fontWeight: "600",
  },

  callBtn: {
    marginTop: 25,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  callBtnText: {
    color: "#FFF",
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 15,
  },

  cancelBtn: {
    marginTop: 12,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  cancelBtnText: {
    color: "#F7146B",
    fontWeight: "600",
    fontSize: 15,
  },
});
