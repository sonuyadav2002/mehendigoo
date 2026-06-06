import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

export default function PANVerificationScreen({ navigation }) {
  const { panFile, setPanFile } = useArtistOnboarding();

  const handleUploadPan = () => {
    // Yaha image picker laga lena
    setPanFile("uploaded");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Verify your PAN Card</Text>

        <Text style={styles.subHeading}>
          Upload clear photo of your PAN card
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.uploadBox}
          onPress={handleUploadPan}
        >
          <Ionicons name="cloud-upload-outline" size={55} color="#F7146B" />

          <Text style={styles.uploadTitle}>Upload PAN Card</Text>

          <Text style={styles.uploadSubTitle}>
            Tap to upload clear PAN card photo
          </Text>

          {panFile ? (
            <View style={styles.successBadge}>
              <Ionicons name="checkmark-circle" size={18} color="#22C55E" />
              <Text style={styles.successText}>PAN Card Uploaded</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("ProfilePhoto")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 13,
    color: "#8C8C8C",
    marginBottom: 25,
  },

  uploadBox: {
    height: 260,
    borderWidth: 1,
    borderColor: "#F4D5E2",
    borderRadius: 16,
    backgroundColor: "#FFF8FB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  uploadTitle: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  uploadSubTitle: {
    marginTop: 6,
    fontSize: 13,
    color: "#8C8C8C",
    textAlign: "center",
  },

  successBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#F0FFF4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  successText: {
    marginLeft: 5,
    color: "#22C55E",
    fontWeight: "600",
    fontSize: 13,
  },

  footer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
  },

  continueButton: {
    height: 50,
    backgroundColor: "#F7146B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
