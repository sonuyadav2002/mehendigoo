import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const overallRating = 4.8;
const totalReviews = 120;

const ratingBreakdown = [
  { stars: 5, percentage: 60 },
  { stars: 4, percentage: 25 },
  { stars: 3, percentage: 10 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
];

const reviews = [
  { id: "1", name: "Ananya Sharma", date: "12 May 2026", rating: 5, text: "Absolutely loved the mehendi design! Priya did an amazing job with intricate details. The color turned out so dark and rich. Highly recommend for bridal mehendi." },
  { id: "2", name: "Neha Gupta", date: "8 May 2026", rating: 5, text: "She is incredibly talented and very professional. The Arabic mehendi design was exactly what I wanted. Will definitely book again!" },
  { id: "3", name: "Riya Kapoor", date: "2 May 2026", rating: 4, text: "Great experience overall. The design was beautiful and she finished on time." },
  { id: "4", name: "Priyanka Verma", date: "25 Apr 2026", rating: 5, text: "Best mehendi artist in town! She did my engagement and wedding mehendi. Both turned out stunning." },
  { id: "5", name: "Kriti Singh", date: "18 Apr 2026", rating: 4, text: "Very neat and precise work. She listened to all my requirements and delivered exactly what I wanted." },
  { id: "6", name: "Shreya Mehta", date: "10 Apr 2026", rating: 5, text: "I have been her regular customer for years. She never disappoints!" },
];

const renderRatingBar = (item) => (
  <View key={item.stars} style={styles.breakdownRow}>
    <Text style={styles.starLabel}>{item.stars} Star</Text>
    <View style={styles.barContainer}>
      <View style={[styles.barFill, { width: `${item.percentage}%` }]} />
    </View>
    <Text style={styles.percentageLabel}>{item.percentage}%</Text>
  </View>
);

const renderReview = ({ item }) => (
  <View style={styles.reviewCard}>
    <View style={styles.reviewHeader}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>
      <View style={styles.reviewMeta}>
        <Text style={styles.reviewerName}>{item.name}</Text>
        <Text style={styles.reviewDate}>{item.date}</Text>
      </View>
      <View style={styles.reviewStars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons key={star} name={star <= item.rating ? "star" : "star-outline"} size={14} color={star <= item.rating ? Colors.warning : Colors.border} />
        ))}
      </View>
    </View>
    <Text style={styles.reviewText}>{item.text}</Text>
  </View>
);

export default function ReviewsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reviews</Text>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <View style={styles.summaryCard}>
              <Text style={styles.averageRating}>{overallRating}</Text>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons key={star} name="star" size={20} color={Colors.warning} />
                ))}
              </View>
              <Text style={styles.totalReviews}>{totalReviews} Reviews</Text>
              <View style={styles.breakdownContainer}>{ratingBreakdown.map(renderRatingBar)}</View>
            </View>
            <Text style={styles.sectionTitle}>All Reviews</Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primaryLight + "20" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 16, backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.primaryLight + "80" },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.background, justifyContent: "center", alignItems: "center" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  listContent: { paddingBottom: 30 },
  summaryCard: { marginHorizontal: 20, marginTop: 20, backgroundColor: Colors.white, borderRadius: 16, padding: 24, alignItems: "center", shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  averageRating: { fontSize: 48, fontWeight: "800", color: Colors.text },
  starsRow: { flexDirection: "row", gap: 4, marginTop: 8 },
  totalReviews: { fontSize: 14, color: Colors.textTertiary, marginTop: 8 },
  breakdownContainer: { width: "100%", marginTop: 20 },
  breakdownRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  starLabel: { width: 60, fontSize: 13, color: Colors.textSecondary, fontWeight: "500" },
  barContainer: { flex: 1, height: 8, borderRadius: 4, backgroundColor: Colors.background, marginHorizontal: 10, overflow: "hidden" },
  barFill: { height: "100%", borderRadius: 4, backgroundColor: Colors.warning },
  percentageLabel: { width: 35, fontSize: 13, color: Colors.textSecondary, textAlign: "right", fontWeight: "500" },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: Colors.text, marginHorizontal: 20, marginTop: 24, marginBottom: 14 },
  reviewCard: { marginHorizontal: 20, marginBottom: 14, backgroundColor: Colors.white, borderRadius: 16, padding: 18, borderWidth: 1, borderColor: Colors.primaryLight + "80" },
  reviewHeader: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center" },
  avatarText: { fontSize: 18, fontWeight: "700", color: Colors.white },
  reviewMeta: { flex: 1, marginLeft: 12 },
  reviewerName: { fontSize: 15, fontWeight: "600", color: Colors.text },
  reviewDate: { fontSize: 12, color: Colors.textTertiary, marginTop: 2 },
  reviewStars: { flexDirection: "row", gap: 2 },
  reviewText: { fontSize: 14, color: Colors.textSecondary, lineHeight: 22, marginTop: 12 },
});
