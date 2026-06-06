import Ionicons from "@expo/vector-icons/Ionicons";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

export default function ReviewSubmitScreen({ navigation }) {
  const { artistDetails, submitArtistProfile } = useArtistOnboarding();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.heading}>Review & Submit</Text>

        <Text style={styles.subHeading}>
          Please review all details before submitting your artist profile.
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="person-circle-outline" size={22} color="#F7146B" />
            <Text style={styles.cardTitle}>Personal Details</Text>
          </View>

          <Text style={styles.info}>
            {artistDetails?.fullName || "Artist Name"}
          </Text>

          <Text style={styles.infoLight}>
            {artistDetails?.email || "artist@email.com"}
          </Text>

          <Text style={styles.infoLight}>{artistDetails?.city || "City"}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="document-text-outline" size={22} color="#F7146B" />
            <Text style={styles.cardTitle}>Documents</Text>
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Aadhaar Verified</Text>

            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusText}>PAN Verified</Text>

            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Profile Photo Added</Text>

            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Work Samples Added</Text>

            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
          </View>
        </View>

        <View style={styles.noteCard}>
          <Ionicons name="information-circle" size={22} color="#F7146B" />

          <Text style={styles.noteText}>
            After submission our team will review your profile and approve it
            within 24-48 hours.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            submitArtistProfile();
            navigation.navigate("ApprovalPending");
          }}
        >
          <Text style={styles.submitText}>Submit Application</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  container: {
    padding: 20,
    paddingBottom: 120,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  subHeading: {
    fontSize: 13,
    color: "#888",
    marginTop: 5,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#F1F1F1",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  cardTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  info: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },

  infoLight: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  statusText: {
    fontSize: 14,
    color: "#333",
  },

  noteCard: {
    flexDirection: "row",
    backgroundColor: "#FFF7FA",
    borderRadius: 14,
    padding: 15,
    alignItems: "flex-start",
  },

  noteText: {
    flex: 1,
    marginLeft: 10,
    color: "#666",
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    padding: 20,
  },

  submitButton: {
    height: 52,
    backgroundColor: "#F7146B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  submitText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
