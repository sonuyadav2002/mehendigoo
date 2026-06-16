import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReviewSubmissionScreen({ navigation }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const artist = {
    name: "Priya Mehendi Artist",
    service: "Bridal Mehendi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#1D1D1D" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Write a Review</Text>
        </View>

        <View style={styles.artistCard}>
          <Image source={{ uri: artist.image }} style={styles.artistImage} />

          <View style={styles.artistInfo}>
            <Text style={styles.artistName}>{artist.name}</Text>

            <Text style={styles.artistService}>{artist.service}</Text>
          </View>
        </View>

        <View style={styles.ratingSection}>
          <Text style={styles.ratingLabel}>Your Rating</Text>

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                style={styles.starBtn}
              >
                <Ionicons
                  name={star <= rating ? "star" : "star-outline"}
                  size={36}
                  color={star <= rating ? "#F59E0B" : "#DDD"}
                />
              </TouchableOpacity>
            ))}
          </View>

          {rating > 0 && (
            <Text style={styles.ratingHint}>
              {rating === 1
                ? "Poor"
                : rating === 2
                ? "Fair"
                : rating === 3
                ? "Good"
                : rating === 4
                ? "Very Good"
                : "Excellent"}
            </Text>
          )}
        </View>

        <View style={styles.reviewSection}>
          <Text style={styles.reviewLabel}>Your Review</Text>

          <TextInput
            style={styles.reviewInput}
            placeholder="Share your experience..."
            placeholderTextColor="#CCC"
            value={review}
            onChangeText={setReview}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity
          style={[styles.submitBtn, rating === 0 && styles.submitBtnDisabled]}
          disabled={rating === 0}
        >
          <Text style={styles.submitBtnText}>Submit Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  artistCard: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8FA",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#FFE4EF",
  },
  artistImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  artistInfo: {
    marginLeft: 14,
    flex: 1,
  },
  artistName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  artistService: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
  },
  ratingSection: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  ratingLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 16,
  },
  starsRow: {
    flexDirection: "row",
    gap: 6,
  },
  starBtn: {
    padding: 4,
  },
  ratingHint: {
    marginTop: 12,
    fontSize: 15,
    color: "#F59E0B",
    fontWeight: "600",
  },
  reviewSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  reviewLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    fontWeight: "500",
  },
  reviewInput: {
    height: 140,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 15,
    color: "#111",
    backgroundColor: "#F2F4F7",
  },
  submitBtn: {
    marginHorizontal: 20,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  submitBtnDisabled: {
    opacity: 0.5,
  },
  submitBtnText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});