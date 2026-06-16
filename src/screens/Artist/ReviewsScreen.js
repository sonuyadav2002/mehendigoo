import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const overallRating = 4.8;
const totalReviews = 120;

const ratingBreakdown = [
  { stars: 5, percentage: 90 },
  { stars: 4, percentage: 75 },
  { stars: 3, percentage: 40 },
  { stars: 2, percentage: 20 },
  { stars: 1, percentage: 10 },
];

const reviews = [
  { id: "1", name: "Ananya Sharma", date: "20 May 2024", rating: 5, text: "Amazing work! Very professional and on time. The bridal mehendi design was beautiful.", image: "https://picsum.photos/200?1" },
  { id: "2", name: "Ritika Patel", date: "18 May 2024", rating: 5, text: "Beautiful design and great experience. Highly recommended.", image: "https://picsum.photos/200?2" },
];

const renderRatingBar = (item) => (
  <View key={item.stars} style={styles.barRow}>
    <Text style={styles.barLabel}>{item.stars}★</Text>
    <View style={styles.progressBg}>
      <View style={[styles.progressFill, { width: `${item.percentage}%` }]} />
    </View>
  </View>
);

const renderReview = ({ item }) => (
  <View style={styles.reviewCard}>
    <View style={styles.userRow}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
    <View style={styles.reviewStars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Ionicons key={star} name={star <= item.rating ? "star" : "star-outline"} size={14} color={star <= item.rating ? Colors.warning : Colors.border} />
      ))}
    </View>
    <Text style={styles.reviewText}>{item.text}</Text>
  </View>
);

export default function ReviewsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Reviews & Ratings</Text>
            <View style={styles.summaryCard}>
              <Text style={styles.ratingNumber}>{overallRating}</Text>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons key={star} name="star" size={20} color={Colors.warning} />
                ))}
              </View>
              <Text style={styles.reviewCount}>Based on {totalReviews} Reviews</Text>
              <View style={styles.barContainer}>{ratingBreakdown.map(renderRatingBar)}</View>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primaryLight + "20" },
  listContent: { paddingBottom: 30 },
  title: { fontSize: 22, fontWeight: "700", color: Colors.text, paddingHorizontal: 16, paddingTop: 16, marginBottom: 15 },
  summaryCard: { backgroundColor: Colors.white, marginHorizontal: 16, borderRadius: 20, padding: 20, elevation: 2, marginBottom: 15 },
  ratingNumber: { fontSize: 42, fontWeight: "700", color: Colors.text, textAlign: "center" },
  starsRow: { flexDirection: "row", justifyContent: "center", gap: 4, marginTop: 5 },
  reviewCount: { textAlign: "center", color: Colors.textSecondary, marginTop: 5, marginBottom: 20 },
  barContainer: { marginTop: 10 },
  barRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  barLabel: { width: 30, fontWeight: "600", color: Colors.textSecondary },
  progressBg: { flex: 1, height: 8, backgroundColor: Colors.background, borderRadius: 10 },
  progressFill: { height: 8, backgroundColor: Colors.warning, borderRadius: 10 },
  reviewCard: { backgroundColor: Colors.white, marginHorizontal: 16, marginBottom: 12, borderRadius: 18, padding: 15, elevation: 2 },
  userRow: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  name: { fontWeight: "700", fontSize: 15, color: Colors.text },
  date: { color: Colors.textTertiary, fontSize: 12, marginTop: 2 },
  reviewStars: { flexDirection: "row", marginTop: 12 },
  reviewText: { color: Colors.textSecondary, marginTop: 8, lineHeight: 22 },
});
