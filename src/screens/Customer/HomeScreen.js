import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constants/Colors";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const categories = [
  { id: "1", name: "Mehndi", icon: "flower-outline" },
  { id: "2", name: "Makeup", icon: "brush-outline" },
  { id: "3", name: "Photography", icon: "camera-outline" },
  { id: "4", name: "Hair", icon: "cut-outline" },
  { id: "5", name: "Nails", icon: "color-palette-outline" },
];

const artists = [
  { id: "1", name: "Priya Mehndi Artist", rating: "4.9", reviews: "120", price: "₹5,000", image: "https://picsum.photos/400/500?1" },
  { id: "2", name: "Riya Bridal Mehndi", rating: "4.8", reviews: "98", price: "₹4,500", image: "https://picsum.photos/400/500?2" },
  { id: "3", name: "Neha Artist", rating: "4.7", reviews: "85", price: "₹3,500", image: "https://picsum.photos/400/500?3" },
];

export default function HomeScreen({ navigation }) {
  const [loading] = useState(false);

  if (loading) {
    return (
      <View style={[styles.container, { paddingTop: 60, paddingHorizontal: 16 }]}>
        <LoadingSkeleton type="list" count={3} />
        <View style={{ marginTop: 20 }}>
          <LoadingSkeleton type="grid" count={4} columns={2} />
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 120 }}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.userName}>Priya Sharma</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn} onPress={() => navigation.navigate("NotificationCenter")}>
          <Ionicons name="notifications-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons name="search-outline" size={20} color={Colors.textTertiary} />
        <Text style={styles.searchPlaceholder}>Search artists, services...</Text>
        <Ionicons name="options-outline" size={20} color={Colors.primary} />
      </TouchableOpacity>

      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Find Your Perfect Artist</Text>
          <Text style={styles.bannerSubTitle}>Book Mehndi & Makeup experts near you</Text>
          <TouchableOpacity style={styles.bannerBtn} onPress={() => navigation.navigate("ArtistListing")}>
            <Text style={styles.bannerBtnText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: "https://picsum.photos/250/250" }} style={styles.bannerImage} />
      </View>

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
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("ArtistListing", { category: item.name })}>
            <View style={styles.categoryIcon}>
              <Ionicons name={item.icon} size={24} color={Colors.primary} />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.artistCard} onPress={() => navigation.navigate("ArtistProfile", { artistId: item.id })}>
            <Image source={{ uri: item.image }} style={styles.artistImage} />
            <TouchableOpacity style={styles.favoriteBtn} onPress={() => {}}>
              <Ionicons name="heart-outline" size={18} color={Colors.primary} />
            </TouchableOpacity>
            <View style={styles.artistInfo}>
              <Text style={styles.artistName} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.artistRating}>⭐ {item.rating} ({item.reviews})</Text>
              <Text style={styles.artistPrice}>Starting from {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { marginTop: 60, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  hello: { fontSize: 15, color: Colors.textSecondary },
  userName: { fontSize: 24, fontWeight: "700", color: Colors.text, marginTop: 4 },
  notificationBtn: { width: 48, height: 48, borderRadius: 14, backgroundColor: Colors.inputBackground, justifyContent: "center", alignItems: "center" },
  searchContainer: { marginTop: 20, height: 55, backgroundColor: Colors.inputBackground, borderRadius: 16, flexDirection: "row", alignItems: "center", paddingHorizontal: 16 },
  searchPlaceholder: { flex: 1, marginHorizontal: 10, color: Colors.textTertiary, fontSize: 15 },
  banner: { marginTop: 24, backgroundColor: Colors.primary, borderRadius: 24, padding: 20, flexDirection: "row", alignItems: "center", shadowColor: Colors.primary, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 12, elevation: 10 },
  bannerTitle: { color: Colors.white, fontSize: 22, fontWeight: "700" },
  bannerSubTitle: { color: Colors.white, marginTop: 8, opacity: 0.9, fontSize: 13, lineHeight: 20 },
  bannerBtn: { marginTop: 14, backgroundColor: Colors.white, alignSelf: "flex-start", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 12 },
  bannerBtnText: { color: Colors.primary, fontWeight: "700" },
  bannerImage: { width: 90, height: 90, borderRadius: 20, marginLeft: 10 },
  sectionHeader: { marginTop: 24, marginBottom: 14, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  sectionTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  viewAll: { color: Colors.primary, fontWeight: "600" },
  categoryCard: { alignItems: "center", marginRight: 18 },
  categoryIcon: { width: 68, height: 68, borderRadius: 20, backgroundColor: Colors.primaryLight + "30", justifyContent: "center", alignItems: "center" },
  categoryText: { marginTop: 8, fontSize: 12, fontWeight: "500" },
  artistCard: { width: 170, backgroundColor: Colors.white, borderRadius: 18, marginRight: 14, overflow: "hidden", shadowOpacity: 0.08, shadowRadius: 8, elevation: 1 },
  artistImage: { width: "100%", height: 140 },
  favoriteBtn: { position: "absolute", right: 12, top: 12, width: 36, height: 36, borderRadius: 18, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" },
  artistInfo: { padding: 10 },
  artistName: { fontSize: 14, fontWeight: "700", color: Colors.text },
  artistRating: { marginTop: 6, color: Colors.textSecondary },
  artistPrice: { marginTop: 8, color: Colors.primary, fontWeight: "700" },
});
