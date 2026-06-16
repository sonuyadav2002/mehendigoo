import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function MyBookingsScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Upcoming");
  const bookings = [
    { id: "1", artist: "Priya Mehendi Artist", service: "Bridal Mehendi", date: "15 Jun 2026", time: "11:00 AM", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500" },
    { id: "2", artist: "Riya Mehendi Artist", service: "Arabic Mehendi", date: "18 Jun 2026", time: "03:00 PM", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500" },
  ];

  const renderBooking = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.artistImage} />
      <View style={styles.info}>
        <Text style={styles.artistName}>{item.artist}</Text>
        <Text style={styles.service}>{item.service}</Text>
        <Text style={styles.date}>{item.date} • {item.time}</Text>
        <TouchableOpacity
          style={styles.detailsBtn}
          onPress={() => navigation.navigate("BookingDetails")}
        >
          <Text style={styles.detailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>

      <View style={styles.tabContainer}>
        {["Upcoming", "Completed", "Cancelled"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {bookings.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="calendar-outline" size={90} color={Colors.primary} />
          <Text style={styles.emptyTitle}>No Bookings Yet</Text>
          <Text style={styles.emptyText}>
            You haven't made any bookings yet. Explore artists and book your
            favourite mehendi artist.
          </Text>
          <TouchableOpacity
            style={styles.dashboardBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.dashboardBtnText}>Browse Artists</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={renderBooking}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { fontSize: 22, fontWeight: "700", marginHorizontal: 20, marginTop: 50, marginBottom: 20, color: Colors.text },
  tabContainer: { flexDirection: "row", marginHorizontal: 20, marginBottom: 20, backgroundColor: Colors.inputBackground, borderRadius: 12, padding: 4 },
  tab: { flex: 1, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 10 },
  activeTab: { backgroundColor: Colors.primary },
  tabText: { fontSize: 13, color: Colors.textSecondary, fontWeight: "500" },
  activeTabText: { color: Colors.white, fontWeight: "600" },
  card: { flexDirection: "row", backgroundColor: Colors.white, borderRadius: 14, padding: 12, marginBottom: 14, borderWidth: 1, borderColor: Colors.border, shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 4, elevation: 2 },
  artistImage: { width: 75, height: 75, borderRadius: 12 },
  info: { flex: 1, marginLeft: 12, justifyContent: "space-between" },
  artistName: { fontSize: 15, fontWeight: "600", color: Colors.text },
  service: { fontSize: 13, color: Colors.textSecondary, marginTop: 3 },
  date: { fontSize: 12, color: Colors.textTertiary, marginTop: 4 },
  detailsBtn: { alignSelf: "flex-start", marginTop: 8, paddingHorizontal: 14, height: 32, borderRadius: 8, backgroundColor: Colors.primaryLight + "50", justifyContent: "center" },
  detailsText: { color: Colors.primary, fontSize: 12, fontWeight: "600" },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 30 },
  emptyTitle: { fontSize: 22, fontWeight: "700", color: Colors.text, marginTop: 15 },
  emptyText: { textAlign: "center", color: Colors.textSecondary, fontSize: 14, lineHeight: 22, marginTop: 10 },
  dashboardBtn: { marginTop: 25, backgroundColor: Colors.primary, paddingHorizontal: 25, height: 50, borderRadius: 12, justifyContent: "center", alignItems: "center" },
  dashboardBtnText: { color: Colors.white, fontSize: 15, fontWeight: "600" },
});
