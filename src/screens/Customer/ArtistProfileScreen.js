import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

export default function ArtistProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={require("../../assets/images/Henna.jpg")} style={styles.coverImage} />
      <TouchableOpacity style={styles.heartBtn}>
        <Text style={styles.heart}>♡</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.name}>Priya Mehendi Artist</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>⭐ 4.8</Text>
          <Text style={styles.location}>📍 Jaipur</Text>
        </View>
        <Text style={styles.experience}>5 Years Experience</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>120+</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>250+</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>98%</Text>
            <Text style={styles.statLabel}>Success</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About Artist</Text>
        <Text style={styles.about}>
          Professional bridal and Arabic mehendi artist with 5+ years of
          experience. Specialized in bridal, engagement, festival and custom
          portrait mehendi designs.
        </Text>

        <View style={styles.featureBox}>
          <Text style={styles.feature}>✔ Bridal Mehendi</Text>
          <Text style={styles.feature}>✔ Arabic Mehendi</Text>
          <Text style={styles.feature}>✔ Engagement Mehendi</Text>
          <Text style={styles.feature}>✔ Home Service Available</Text>
        </View>

        <TouchableOpacity
          style={styles.portfolioBtn}
          onPress={() => navigation.navigate("Portfolio")}
        >
          <Text style={styles.portfolioText}>View Portfolio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => navigation.navigate("SelectService")}
        >
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  coverImage: { width: "100%", height: 320 },
  heartBtn: { position: "absolute", top: 60, right: 20, width: 45, height: 45, borderRadius: 25, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" },
  heart: { fontSize: 26, color: Colors.primary },
  content: { padding: 20 },
  name: { fontSize: 28, fontWeight: "700", color: Colors.text },
  row: { flexDirection: "row", marginTop: 8 },
  rating: { color: Colors.warning, fontWeight: "600", marginRight: 15 },
  location: { color: Colors.textSecondary },
  experience: { marginTop: 8, color: Colors.textSecondary },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 25 },
  statBox: { alignItems: "center", flex: 1 },
  statValue: { fontSize: 20, fontWeight: "700", color: Colors.primary },
  statLabel: { marginTop: 5, color: Colors.textSecondary },
  sectionTitle: { marginTop: 30, fontSize: 20, fontWeight: "700", color: Colors.text },
  about: { marginTop: 10, lineHeight: 24, color: Colors.textSecondary },
  featureBox: { marginTop: 20, backgroundColor: Colors.primaryLight + "40", borderRadius: 15, padding: 15 },
  feature: { marginBottom: 10, color: Colors.textSecondary },
  portfolioBtn: { borderWidth: 1, borderColor: Colors.primary, height: 55, borderRadius: 14, justifyContent: "center", alignItems: "center", marginTop: 25 },
  portfolioText: { color: Colors.primary, fontWeight: "700" },
  bookBtn: { backgroundColor: Colors.primary, height: 55, borderRadius: 14, justifyContent: "center", alignItems: "center", marginTop: 15, marginBottom: 30 },
  bookText: { color: Colors.white, fontWeight: "700", fontSize: 16 },
});
