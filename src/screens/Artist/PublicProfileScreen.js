import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PublicProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={styles.name}>Aisha Khan</Text>
          <Text style={styles.tagline}>Bridal and event mehendi artist</Text>
          <Text style={styles.rating}>4.9 · 120 reviews</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionText}>
            Experienced mehendi artist with a flair for bridal, engagement, and
            party designs. Available for events across Mumbai and nearby cities.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Services</Text>
          <Text style={styles.sectionText}>
            Bridal Mehendi · Arabic · Floral · Modern
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <Text style={styles.sectionText}>
            Weekdays: 10am - 8pm · Weekends: 9am - 10pm
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },
  tagline: {
    marginTop: 10,
    fontSize: 15,
    color: "#777",
    lineHeight: 22,
  },
  rating: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "700",
    color: "#F7146B",
  },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  sectionText: {
    marginTop: 10,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
});
