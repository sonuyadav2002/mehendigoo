import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const recentSearches = [
  "Mehndi Artist",
  "Makeup Artist",
  "Photographer",
  "Hair Stylist",
];

const trendingSearches = [
  "Bridal Mehndi",
  "Wedding Makeup",
  "Engagement Mehndi",
];

const categories = [
  {
    name: "Mehndi",
    icon: "flower-outline",
  },
  {
    name: "Makeup",
    icon: "brush-outline",
  },
  {
    name: "Photography",
    icon: "camera-outline",
  },
  {
    name: "Hair",
    icon: "cut-outline",
  },
];

const tags = [
  "Bridal Makeup",
  "Engagement Mehndi",
  "Wedding Photographer",
  "Nail Artist",
];

export default function SearchScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Bar */}

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" />

        <TextInput
          placeholder="Search artists, services..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />

        <Ionicons name="close-circle" size={20} color="#C4C4C4" />
      </View>

      {/* Recent Searches */}

      <Text style={styles.sectionTitle}>Recent Searches</Text>

      {recentSearches.map((item, index) => (
        <TouchableOpacity key={index} style={styles.listItem}>
          <Ionicons name="time-outline" size={18} color="#888" />

          <Text style={styles.listText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {/* Trending */}

      <Text style={styles.sectionTitle}>Trending Searches 🔥</Text>

      {trendingSearches.map((item, index) => (
        <TouchableOpacity key={index} style={styles.listItem}>
          <Ionicons name="flame-outline" size={18} color="#F7146B" />

          <Text style={styles.listText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {/* Categories */}

      <Text style={styles.sectionTitle}>Popular Categories</Text>

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryCard}>
            <Ionicons name={item.icon} size={24} color="#F7146B" />

            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tags */}

      <Text style={styles.sectionTitle}>Popular Searches</Text>

      <View style={styles.tagsContainer}>
        {tags.map((item, index) => (
          <TouchableOpacity key={index} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
    color: "#111",
  },

  searchContainer: {
    height: 56,
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 28,
    marginBottom: 16,
    color: "#111",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  listText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#444",
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryCard: {
    width: "48%",
    backgroundColor: "#FFF0F6",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 12,
  },

  categoryText: {
    marginTop: 10,
    fontWeight: "600",
    color: "#111",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  tag: {
    backgroundColor: "#FFF0F6",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 10,
    marginBottom: 10,
  },

  tagText: {
    color: "#F7146B",
    fontWeight: "600",
  },
});
