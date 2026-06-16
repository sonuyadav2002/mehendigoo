import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

export default function ReviewSubmitScreen({ navigation }) {
  const { artistDetails, submitArtistProfile } = useArtistOnboarding();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Review & Submit</Text>
        <Text style={styles.subHeading}>Please review all details before submitting your artist profile.</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="person-circle-outline" size={22} color={Colors.primary} />
            <Text style={styles.cardTitle}>Personal Details</Text>
          </View>
          <Text style={styles.info}>{artistDetails?.fullName || "Artist Name"}</Text>
          <Text style={styles.infoLight}>{artistDetails?.email || "artist@email.com"}</Text>
          <Text style={styles.infoLight}>{artistDetails?.city || "City"}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="document-text-outline" size={22} color={Colors.primary} />
            <Text style={styles.cardTitle}>Documents</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Aadhaar Verified</Text>
            <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>PAN Verified</Text>
            <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Profile Photo Added</Text>
            <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Work Samples Added</Text>
            <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
          </View>
        </View>

        <View style={styles.noteCard}>
          <Ionicons name="information-circle" size={22} color={Colors.primary} />
          <Text style={styles.noteText}>After submission our team will review your profile and approve it within 24-48 hours.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton title="Submit Application" onPress={() => { submitArtistProfile(); navigation.navigate("ApprovalPending"); }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  container: { padding: 20, paddingBottom: 120 },
  heading: { fontSize: 22, fontWeight: "700", color: Colors.text },
  subHeading: { fontSize: 13, color: Colors.textSecondary, marginTop: 5, marginBottom: 25 },
  card: { backgroundColor: Colors.white, borderRadius: 16, padding: 18, marginBottom: 15, borderWidth: 1, borderColor: Colors.border },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  cardTitle: { marginLeft: 8, fontSize: 16, fontWeight: "600", color: Colors.text },
  info: { fontSize: 15, fontWeight: "600", color: Colors.text, marginBottom: 4 },
  infoLight: { fontSize: 13, color: Colors.textSecondary, marginBottom: 4 },
  statusRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  statusText: { fontSize: 14, color: Colors.text },
  noteCard: { flexDirection: "row", backgroundColor: Colors.primaryLight + "40", borderRadius: 14, padding: 15, alignItems: "flex-start" },
  noteText: { flex: 1, marginLeft: 10, color: Colors.textSecondary, fontSize: 13, lineHeight: 20 },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: Colors.white, padding: 20 },
});
