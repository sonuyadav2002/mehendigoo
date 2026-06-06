import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    id: "1",
    name: "Mehndi",
    icon: "flower-outline",
  },
  {
    id: "2",
    name: "Makeup",
    icon: "brush-outline",
  },
  {
    id: "3",
    name: "Photography",
    icon: "camera-outline",
  },
  {
    id: "4",
    name: "Hair",
    icon: "cut-outline",
  },
  {
    id: "5",
    name: "Nails",
    icon: "color-palette-outline",
  },
];

const artists = [
  {
    id: "1",
    name: "Priya Mehndi Artist",
    rating: "4.9",
    reviews: "120",
    price: "₹5,000",
    image: "https://picsum.photos/400/500?1",
  },
  {
    id: "2",
    name: "Riya Bridal Mehndi",
    rating: "4.8",
    reviews: "98",
    price: "₹4,500",
    image: "https://picsum.photos/400/500?2",
  },
  {
    id: "3",
    name: "Neha Artist",
    rating: "4.7",
    reviews: "85",
    price: "₹3,500",
    image: "https://picsum.photos/400/500?3",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 120,
      }}
    >
      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.userName}>Priya Sharma</Text>
        </View>

        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Search */}

      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons name="search-outline" size={20} color="#999" />

        <Text
          style={{
            flex: 1,
            marginHorizontal: 10,
            color: "#999",
            fontSize: 15,
          }}
        >
          Search artists, services...
        </Text>

        <Ionicons name="options-outline" size={20} color="#F7146B" />
      </TouchableOpacity>
      {/* Banner */}

      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Find Your Perfect Artist</Text>

          <Text style={styles.bannerSubTitle}>
            Book Mehndi & Makeup experts near you
          </Text>

          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://picsum.photos/250/250",
          }}
          style={styles.bannerImage}
        />
      </View>

      {/* Categories */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryIcon}>
              <Ionicons name={item.icon} size={24} color="#F7146B" />
            </View>

            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Popular Artists */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Artists</Text>

        <TouchableOpacity onPress={() => navigation.navigate("ArtistListing")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={artists}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.artistCard}>
            <Image source={{ uri: item.image }} style={styles.artistImage} />

            <TouchableOpacity style={styles.favoriteBtn}>
              <Ionicons name="heart-outline" size={18} color="#F7146B" />
            </TouchableOpacity>

            <View style={styles.artistInfo}>
              <Text style={styles.artistName} numberOfLines={1}>
                {item.name}
              </Text>

              <Text style={styles.artistRating}>
                ⭐ {item.rating} ({item.reviews})
              </Text>

              <Text style={styles.artistPrice}>Starting from {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    // paddingHorizontal: 16,
  },

  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hello: {
    fontSize: 15,
    color: "#666",
  },

  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 4,
  },

  notificationBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    marginTop: 20,
    height: 55,
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },

  banner: {
    marginTop: 24,
    backgroundColor: "#F7146B",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#F7146B",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },

  bannerTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
  },

  bannerSubTitle: {
    color: "#FFF",
    marginTop: 8,
    opacity: 0.9,
    fontSize: 13,
    lineHeight: 20,
  },

  bannerBtn: {
    marginTop: 14,
    backgroundColor: "#FFF",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  bannerBtnText: {
    color: "#F7146B",
    fontWeight: "700",
  },

  bannerImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginLeft: 10,
  },

  sectionHeader: {
    marginTop: 24,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  viewAll: {
    color: "#F7146B",
    fontWeight: "600",
  },

  categoryCard: {
    alignItems: "center",
    marginRight: 18,
  },

  categoryIcon: {
    width: 68,
    height: 68,
    borderRadius: 20,
    backgroundColor: "#FFF1F7",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "500",
  },

  artistCard: {
    width: 170,
    backgroundColor: "#FFF",
    borderRadius: 18,
    marginRight: 14,
    overflow: "hidden",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 1,
  },

  artistImage: {
    width: "100%",
    height: 140,
  },

  favoriteBtn: {
    position: "absolute",
    right: 12,
    top: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },

  artistInfo: {
    padding: 10,
  },

  artistName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },

  artistRating: {
    marginTop: 6,
    color: "#666",
  },

  artistPrice: {
    marginTop: 8,
    color: "#F7146B",
    fontWeight: "700",
  },
});
