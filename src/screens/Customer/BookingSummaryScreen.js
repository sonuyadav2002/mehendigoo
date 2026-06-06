import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingSummaryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Booking Summary</Text>
          <Text style={styles.subtitle}>Review your booking details</Text>
        </View>

        {/* Artist */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Artist</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Priya Mehendi Artist</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Experience</Text>
            <Text style={styles.value}>8 Years</Text>
          </View>
        </View>

        {/* Service */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Service</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Package</Text>
            <Text style={styles.value}>Bridal Mehendi</Text>
          </View>
        </View>

        {/* Date */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Date & Time</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>15 June 2026</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>11:00 AM</Text>
          </View>
        </View>

        {/* Address */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Address</Text>

          <Text style={styles.address}>
            A-24 Shyam Nagar Jaipur Rajasthan 302019
          </Text>
        </View>

        {/* Price */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Payment Details</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Service Fee</Text>
            <Text style={styles.value}>₹2,500</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Visiting Charge</Text>
            <Text style={styles.value}>₹200</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>GST</Text>
            <Text style={styles.value}>₹135</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>₹2,835</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.buttonText}>Proceed To Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  content: {
    paddingBottom: 120,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 35 : 10,
    paddingBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  card: {
    marginHorizontal: 20,
    marginBottom: 14,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 14,
    color: "#111",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    color: "#666",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  address: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F7146B",
  },

  button: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
    height: 54,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
