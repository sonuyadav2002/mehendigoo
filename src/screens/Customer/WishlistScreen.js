import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WishlistScreen({ navigation }) {
  const [wishlist, setWishlist] = useState([
    {
      id: "1",
      name: "Priya Mehendi Artist",
      location: "Jaipur, Rajasthan",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      id: "2",
      name: "Riya Mehendi Artist",
      location: "Udaipur, Rajasthan",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    },
    {
      id: "3",
      name: "Kavita Mehendi Artist",
      location: "Jodhpur, Rajasthan",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    },
  ]);

  const removeWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => navigation.navigate("ArtistProfile")}
    >
      <Image source={{ uri: item.image }} style={styles.artistImage} />

      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.artistName}>
          {item.name}
        </Text>

        <Text style={styles.location}>📍 {item.location}</Text>

        <View style={styles.bottomRow}>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={12} color="#FFC107" />
            <Text style={styles.ratingText}>4.9</Text>
          </View>

          <Text style={styles.price}>Starting ₹2,500</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => removeWishlist(item.id)}
      >
        <Ionicons name="heart" size={20} color="#F7146B" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <Text style={styles.headerSubTitle}>
          Your favourite mehendi artists
        </Text>
      </View>

      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={60} color="#D9D9D9" />

          <Text style={styles.emptyTitle}>No Wishlist Yet</Text>

          <Text style={styles.emptySubtitle}>
            Save your favorite artists here
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 55 : 20,
    paddingBottom: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  headerSubTitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#888",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 14,
    borderRadius: 16,
    padding: 12,
    elevation: 0.7,
  },
  artistImage: {
    width: 72,
    height: 72,
    borderRadius: 14,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },

  artistName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },

  location: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF7E0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 11,
    fontWeight: "600",
  },

  price: {
    fontSize: 12,
    fontWeight: "600",
    color: "#F7146B",
  },

  heartButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFF0F6",
    justifyContent: "center",
    alignItems: "center",
  },
});
