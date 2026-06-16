import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

export default function AadhaarVerificationScreen({ navigation }) {
  const { aadhaarFiles, updateAadhaarFiles } = useArtistOnboarding();

  const handleUpload = (side) => {
    updateAadhaarFiles({ [side]: side === "front" ? "Aadhaar Front Uploaded" : "Aadhaar Back Uploaded" });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Verify your Aadhaar</Text>
        <Text style={styles.subHeading}>Upload clear photo of your Aadhaar card</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Front Side</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.uploadBox} onPress={() => handleUpload("front")}>
            {aadhaarFiles?.front ? (
              <View style={styles.successContainer}>
                <Ionicons name="checkmark-circle" size={40} color={Colors.success} />
                <Text style={styles.successText}>Front Side Uploaded</Text>
              </View>
            ) : (
              <>
                <Ionicons name="cloud-upload-outline" size={42} color={Colors.primary} />
                <Text style={styles.uploadTitle}>Upload Front Side</Text>
                <Text style={styles.uploadDescription}>Tap here to upload Aadhaar front image</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Back Side</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.uploadBox} onPress={() => handleUpload("back")}>
            {aadhaarFiles?.back ? (
              <View style={styles.successContainer}>
                <Ionicons name="checkmark-circle" size={40} color={Colors.success} />
                <Text style={styles.successText}>Back Side Uploaded</Text>
              </View>
            ) : (
              <>
                <Ionicons name="cloud-upload-outline" size={42} color={Colors.primary} />
                <Text style={styles.uploadTitle}>Upload Back Side</Text>
                <Text style={styles.uploadDescription}>Tap here to upload Aadhaar back image</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <CustomButton title="Continue" onPress={() => navigation.navigate("PANVerification")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 15 },
  heading: { fontSize: 24, fontWeight: "700", color: Colors.text, marginBottom: 6 },
  subHeading: { fontSize: 14, color: Colors.textSecondary, marginBottom: 25 },
  section: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", color: Colors.text, marginBottom: 8 },
  uploadBox: { height: 180, borderWidth: 1.5, borderStyle: "dashed", borderColor: Colors.primary, borderRadius: 16, backgroundColor: Colors.primaryLight + "30", justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  uploadTitle: { marginTop: 12, fontSize: 15, fontWeight: "600", color: Colors.text },
  uploadDescription: { marginTop: 5, fontSize: 12, color: Colors.textSecondary, textAlign: "center" },
  successContainer: { alignItems: "center" },
  successText: { marginTop: 10, fontSize: 14, fontWeight: "600", color: Colors.success },
  footer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20, backgroundColor: Colors.white },
});
