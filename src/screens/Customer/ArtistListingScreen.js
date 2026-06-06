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

const artists = [
  {
    id: "1",
    name: "Priya Mehendi Artist",
    rating: "4.8",
    reviews: "120",
    city: "Jaipur",
    exp: "5 Years",
    price: "₹5,000",
    image: require("../../assets/images/Henna.jpg"),
  },
  {
    id: "2",
    name: "Ritu Mehendi Art",
    rating: "4.7",
    reviews: "98",
    city: "Delhi",
    exp: "4 Years",
    price: "₹4,000",
    image: require("../../assets/images/Henna.jpg"),
  },
  {
    id: "3",
    name: "Mehndi By Pooja",
    rating: "4.9",
    reviews: "150",
    city: "Mumbai",
    exp: "6 Years",
    price: "₹6,000",
    image: require("../../assets/images/Henna.jpg"),
  },
  {
    id: "4",
    name: "Neha Mehndi",
    rating: "4.6",
    reviews: "85",
    city: "Ahmedabad",
    exp: "3 Years",
    price: "₹3,500",
    image: require("../../assets/images/Henna.jpg"),
  },
];

export default function ArtistListingScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Top Rated", "Near Me", "Bridal", "Arabic", "Filters"];

  const renderArtist = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.artistImage} />

      <TouchableOpacity style={styles.favoriteBtn}>
        <Text style={styles.heart}>♡</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.verified}>✔</Text>
        </View>

        <Text style={styles.rating}>
          ⭐ {item.rating} ({item.reviews} Reviews)
        </Text>

        <Text style={styles.location}>📍 {item.city}</Text>

        <Text style={styles.exp}>{item.exp} Experience</Text>

        <Text style={styles.price}>Starting from {item.price}</Text>

        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => navigation.navigate("ArtistProfile")}
        >
          <Text style={styles.profileBtnText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Mehndi Artists</Text>

        <View style={styles.headerIcons}>
          <Text style={styles.headerIcon}>🔔</Text>
          <Text style={styles.headerIcon}>♡</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={artists}
        keyExtractor={(item) => item.id}
        renderItem={renderArtist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  back: {
    fontSize: 24,
    color: "#111",
  },

  headerTitle: {
    flex: 1,
    marginLeft: 15,
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerIcon: {
    fontSize: 22,
    marginLeft: 15,
  },

  tabs: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  tab: {
    height: 38,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: "#F7146B",
  },

  tabText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },

  activeTabText: {
    color: "#FFF",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
  },

  artistImage: {
    width: "100%",
    height: 200,
  },

  favoriteBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },

  heart: {
    fontSize: 24,
    color: "#F7146B",
  },

  info: {
    padding: 16,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  verified: {
    color: "#22C55E",
    marginLeft: 6,
    fontSize: 14,
  },

  rating: {
    marginTop: 6,
    color: "#F59E0B",
    fontWeight: "600",
  },

  location: {
    marginTop: 4,
    color: "#6B7280",
  },

  exp: {
    marginTop: 4,
    color: "#6B7280",
  },

  price: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  profileBtn: {
    marginTop: 14,
    backgroundColor: "#F7146B",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  profileBtnText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },
});
