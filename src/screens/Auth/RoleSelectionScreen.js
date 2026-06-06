import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

export default function RoleSelectionScreen({ navigation }) {
  const [selectedRole, setSelectedRole] = useState("customer");
  const { artistProfileCompleted, artistApproved } = useArtistOnboarding();

  const handleContinue = () => {
    if (selectedRole === "customer") {
      navigation.reset({
        index: 0,
        routes: [{ name: "CustomerStack" }],
      });
      return;
    }

    if (!artistProfileCompleted) {
      navigation.reset({
        index: 0,
        routes: [{ name: "ArtistFlowStack" }],
      });
      return;
    }

    if (!artistApproved) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "ArtistFlowStack",
            params: { initialScreen: "ApprovalPending" },
          },
        ],
      });
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "ArtistStack" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Role</Text>

      <Text style={styles.subtitle}>Select an option to continue</Text>

      {/* Customer Card */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.roleCard,
          selectedRole === "customer" && styles.selectedCard,
        ]}
        onPress={() => setSelectedRole("customer")}
      >
        <View>
          <Text style={styles.roleTitle}>I am a Customer</Text>

          <Text style={styles.roleSubtitle}>Book Services</Text>
        </View>

        <View
          style={[
            styles.radioCircle,
            selectedRole === "customer" && styles.activeCircle,
          ]}
        >
          {selectedRole === "customer" && <Text style={styles.check}>✓</Text>}
        </View>
      </TouchableOpacity>

      {/* Artist Card */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.roleCard,
          selectedRole === "artist" && styles.selectedCard,
        ]}
        onPress={() => setSelectedRole("artist")}
      >
        <View>
          <Text style={styles.roleTitle}>I am an Artist</Text>

          <Text style={styles.roleSubtitle}>Offer Services</Text>
        </View>

        <View
          style={[
            styles.radioCircle,
            selectedRole === "artist" && styles.activeCircle,
          ]}
        >
          {selectedRole === "artist" && <Text style={styles.check}>✓</Text>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    fontSize: 14,
    color: "#8A8A8A",
    marginTop: 6,
    marginBottom: 40,
  },

  roleCard: {
    height: 95,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  selectedCard: {
    borderColor: "#F7146B",
    borderWidth: 2,
  },

  roleTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  roleSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "#999",
  },

  radioCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#CFCFCF",
    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: {
    backgroundColor: "#F7146B",
    borderColor: "#F7146B",
  },

  check: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  continueButton: {
    height: 55,
    backgroundColor: "#F7146B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
