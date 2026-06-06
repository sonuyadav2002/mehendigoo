import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ReviewsScreen() {
  const reviews = [
    {
      id: 1,
      name: "Ananya Sharma",
      date: "20 May 2024",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Amazing work! Very professional and on time. The bridal mehendi design was beautiful.",
      image: "https://picsum.photos/200?1",
    },
    {
      id: 2,
      name: "Ritika Patel",
      date: "18 May 2024",
      rating: "⭐⭐⭐⭐⭐",
      review: "Beautiful design and great experience. Highly recommended.",
      image: "https://picsum.photos/200?2",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Header */}
        <Text style={styles.title}>Reviews & Ratings</Text>

        {/* Rating Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.ratingNumber}>4.8</Text>

          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>

          <Text style={styles.reviewCount}>Based on 120 Reviews</Text>

          <View style={styles.barContainer}>
            <View style={styles.barRow}>
              <Text style={styles.barLabel}>5★</Text>

              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: "90%" }]} />
              </View>
            </View>

            <View style={styles.barRow}>
              <Text style={styles.barLabel}>4★</Text>

              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: "75%" }]} />
              </View>
            </View>

            <View style={styles.barRow}>
              <Text style={styles.barLabel}>3★</Text>

              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: "40%" }]} />
              </View>
            </View>

            <View style={styles.barRow}>
              <Text style={styles.barLabel}>2★</Text>

              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: "20%" }]} />
              </View>
            </View>

            <View style={styles.barRow}>
              <Text style={styles.barLabel}>1★</Text>

              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: "10%" }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Reviews List */}
        {reviews.map((item) => (
          <View key={item.id} style={styles.reviewCard}>
            <View style={styles.userRow}>
              <Image source={{ uri: item.image }} style={styles.avatar} />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>

            <Text style={styles.reviewStars}>{item.rating}</Text>

            <Text style={styles.reviewText}>{item.review}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 15,
  },

  summaryCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginBottom: 15,
  },

  ratingNumber: {
    fontSize: 42,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },

  stars: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
  },

  reviewCount: {
    textAlign: "center",
    color: "#777",
    marginTop: 5,
    marginBottom: 20,
  },

  barContainer: {
    marginTop: 10,
  },

  barRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  barLabel: {
    width: 30,
    fontWeight: "600",
  },

  progressBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
  },

  progressFill: {
    height: 8,
    backgroundColor: "#F7B500",
    borderRadius: 10,
  },

  reviewCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 18,
    padding: 15,
    elevation: 2,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  name: {
    fontWeight: "700",
    fontSize: 15,
    color: "#222",
  },

  date: {
    color: "#888",
    fontSize: 12,
    marginTop: 2,
  },

  reviewStars: {
    marginTop: 12,
    fontSize: 15,
  },

  reviewText: {
    color: "#555",
    marginTop: 8,
    lineHeight: 22,
  },
});
