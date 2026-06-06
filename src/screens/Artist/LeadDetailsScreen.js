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

export default function LeadDetailsScreen() {
  const lead = {
    name: "Ananya Sharma",
    service: "Bridal Mehendi",
    date: "24 May 2024, 11:00 AM",
    location: "Bangalore, Karnataka",
    budget: "₹10,000 - ₹15,000",
    image: "https://picsum.photos/200",
    message:
      "Need bridal mehendi for my wedding. Please share your best work samples and package details.",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Lead Details</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: lead.image }} style={styles.profileImage} />

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{lead.name}</Text>

            <Text style={styles.service}>{lead.service}</Text>
          </View>
        </View>

        {/* Details Card */}
        <View style={styles.detailsCard}>
          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={18} color="#F7146B" />
            <Text style={styles.infoText}>{lead.date}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={18} color="#F7146B" />
            <Text style={styles.infoText}>{lead.location}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="wallet-outline" size={18} color="#F7146B" />
            <Text style={styles.infoText}>Budget : {lead.budget}</Text>
          </View>
        </View>

        {/* Message */}
        <View style={styles.messageCard}>
          <Text style={styles.sectionTitle}>Requirement</Text>

          <Text style={styles.messageText}>{lead.message}</Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.rejectBtn}>
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptBtn}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 18,
    elevation: 2,
    marginBottom: 12,
  },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 14,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  service: {
    marginTop: 4,
    color: "#F7146B",
    fontWeight: "600",
  },

  detailsCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 16,
    elevation: 2,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#444",
  },

  messageCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 18,
    padding: 16,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#222",
  },

  messageText: {
    color: "#666",
    lineHeight: 22,
  },

  footer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  rejectBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F7146B",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 8,
  },

  rejectText: {
    color: "#F7146B",
    fontWeight: "700",
  },

  acceptBtn: {
    flex: 1,
    backgroundColor: "#18B65B",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginLeft: 8,
  },

  acceptText: {
    color: "#fff",
    fontWeight: "700",
  },
});
