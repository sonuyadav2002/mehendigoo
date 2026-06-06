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
    customer: "Ananya Sharma",
    bookingId: "#BK102345",
    service: "Bridal Mehendi",
    date: "24 May 2024",
    time: "11:00 AM",
    location: "Bangalore, Karnataka",
    amount: "₹10,000",
    advancePaid: "₹2,000",
    balance: "₹8,000",
    notes:
      "Need bridal mehendi for wedding ceremony. Please arrive 1 hour before event.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  const handleComplete = () => {
    navigation.navigate("Portfolio");
  };

  const InfoRow = ({ icon, label, value }) => (
    <View style={styles.infoRow}>
      <View style={styles.infoLeft}>
        <Ionicons name={icon} size={18} color="#F7146B" />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>

      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Booking Details</Text>

        <View style={styles.headerSpace} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Customer Card */}

        <View style={styles.customerCard}>
          <Image source={{ uri: booking.image }} style={styles.profileImage} />

          <Text style={styles.customerName}>{booking.customer}</Text>

          <Text style={styles.bookingId}>{booking.bookingId}</Text>

          <View style={styles.divider} />

          <InfoRow
            icon="brush-outline"
            label="Service"
            value={booking.service}
          />

          <InfoRow icon="calendar-outline" label="Date" value={booking.date} />

          <InfoRow icon="time-outline" label="Time" value={booking.time} />

          <InfoRow
            icon="location-outline"
            label="Location"
            value={booking.location}
          />
        </View>

        {/* Payment Card */}

        <View style={styles.paymentCard}>
          <View style={styles.paymentHeader}>
            <Ionicons name="wallet-outline" size={20} color="#F7146B" />
            <Text style={styles.sectionTitle}>Payment Details</Text>
          </View>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Amount</Text>
            <Text style={styles.amountText}>{booking.amount}</Text>
          </View>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Advance Paid</Text>
            <Text style={styles.advanceText}>{booking.advancePaid}</Text>
          </View>

          <View style={styles.paymentDivider} />

          <View style={styles.paymentRow}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceText}>{booking.balance}</Text>
          </View>
        </View>

        {/* Details Card */}

        <View style={styles.detailsCard}>
          <Text style={styles.sectionTitle}>Booking Information</Text>

          <InfoRow
            icon="brush-outline"
            label="Service"
            value={booking.service}
          />

          <InfoRow
            icon="calendar-outline"
            label="Booking Date"
            value={booking.date}
          />

          <InfoRow icon="time-outline" label="Time Slot" value={booking.time} />

          <InfoRow
            icon="location-outline"
            label="Location"
            value={booking.location}
          />

          <View style={styles.notesContainer}>
            <View style={styles.notesHeader}>
              <Ionicons
                name="document-text-outline"
                size={18}
                color="#F7146B"
              />
              <Text style={styles.notesTitle}>Notes</Text>
            </View>

            <Text style={styles.notesText}>{booking.notes}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Button */}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.completeButton}
          onPress={handleComplete}
        >
          <Text style={styles.completeButtonText}>Mark As Completed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#F7146B";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  headerSpace: {
    width: 40,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  customerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },

  customerName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  bookingId: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#F2F2F2",
    width: "100%",
    marginVertical: 18,
  },

  paymentCard: {
    backgroundColor: "#FFF0F5",
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#FFD2E4",
  },

  paymentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  sectionTitle: {
    marginLeft: 8,
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  paymentLabel: {
    fontSize: 15,
    color: "#6B7280",
  },

  amountText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  advanceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#16A34A",
  },

  paymentDivider: {
    height: 1,
    backgroundColor: "#FFD2E4",
    marginBottom: 14,
  },

  balanceLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  balanceText: {
    fontSize: 18,
    fontWeight: "700",
    color: PRIMARY,
  },

  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 18,
  },

  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  infoLabel: {
    marginLeft: 10,
    fontSize: 15,
    color: "#6B7280",
  },

  infoValue: {
    flex: 1,
    textAlign: "right",
    fontSize: 15,
    color: "#111827",
    fontWeight: "600",
  },

  notesContainer: {
    marginTop: 24,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
  },

  notesHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  notesTitle: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  notesText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF8FA",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 25,
  },

  completeButton: {
    backgroundColor: PRIMARY,
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: PRIMARY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },

  completeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
