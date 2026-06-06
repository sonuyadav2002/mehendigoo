import Ionicons from "@expo/vector-icons/Ionicons";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

export default function ApprovalPendingScreen({ navigation }) {
  const { artistApproved } = useArtistOnboarding();

  const handleDashboard = () => {
    if (artistApproved) {
      navigation.reset({
        index: 0,
        routes: [{ name: "ArtistStack" }],
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Icon */}
        <View style={styles.iconWrapper}>
          <Ionicons name="time-outline" size={50} color="#F7146B" />
        </View>

        {/* Title */}
        <Text style={styles.title}>Application Submitted</Text>

        {/* Description */}
        <Text style={styles.description}>
          Your artist profile has been successfully submitted for verification.
        </Text>

        {/* Status Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Pending Approval</Text>
        </View>

        {/* Info Box */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>What happens next?</Text>

          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#22C55E" />
            <Text style={styles.infoText}>Documents will be verified</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#22C55E" />
            <Text style={styles.infoText}>Profile quality review</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#22C55E" />
            <Text style={styles.infoText}>Dashboard access after approval</Text>
          </View>
        </View>

        {/* Note */}
        <Text style={styles.note}>Verification usually takes 24-48 hours.</Text>
      </View>

      <View style={styles.footer}>
        {/* <TouchableOpacity
          disabled={artistApproved}
          style={[styles.button, !artistApproved && styles.disabledButton]}
          onPress={handleDashboard}
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "ArtistStack" }],
            })
          }
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>

        {!artistApproved && (
          <Text style={styles.pendingText}>
            Dashboard will unlock once approved.
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 50,
  },

  iconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFF1F7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },

  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  badge: {
    marginTop: 20,
    backgroundColor: "#F7146B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },

  badgeText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
  },

  infoCard: {
    width: "100%",
    marginTop: 30,
    backgroundColor: "#FFF8FB",
    borderRadius: 16,
    padding: 20,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 15,
    color: "#111",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  infoText: {
    marginLeft: 10,
    color: "#555",
    fontSize: 14,
  },

  note: {
    marginTop: 20,
    color: "#999",
    fontSize: 13,
  },

  footer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },

  button: {
    height: 52,
    backgroundColor: "#F7146B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  disabledButton: {
    opacity: 0.5,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },

  pendingText: {
    marginTop: 12,
    textAlign: "center",
    color: "#999",
    fontSize: 13,
  },
});
