import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BecomeArtistScreen({ navigation }) {
  const benefits = [
    "Get More Leads",
    "Verified Profile",
    "Secure Payments",
    "Grow Your Business",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/o1.png")}
              style={styles.artistImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.title}>
            Become <Text style={{ color: "#F7146B" }}>Verified Artist</Text>
          </Text>

          <Text style={styles.subtitle}>
            Join thousands of artists on Mehandigo and start receiving premium
            bookings from customers near you.
          </Text>

          <View style={styles.benefitsCard}>
            {benefits.map((item, index) => (
              <View key={index} style={styles.benefitRow}>
                <View style={styles.checkCircle}>
                  <Text style={styles.check}>✓</Text>
                </View>

                <Text style={styles.benefitText}>{item}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.joinButton}
            onPress={() => navigation.navigate("KYCVerification")}
          >
            <Text style={styles.joinButtonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    padding: 20,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  artistImage: {
    width: "100%",
    height: 320,
    borderRadius: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: "#8A8A8A",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 15,
  },

  artistImage: {
    width: 220,
    height: 280,
    borderRadius: 20,
  },

  benefitsCard: {
    backgroundColor: "#FFF6F8",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginTop: 25,
  },

  benefitText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
  },

  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  checkCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  check: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  joinButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F7146B",
    alignItems: "center",
    justifyContent: "center",
  },

  joinButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
