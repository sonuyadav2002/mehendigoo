import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function BookingRequestsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Pending");

  const bookings = [
    { id: "1", name: "Ananya Sharma", service: "Bridal Mehendi", date: "24 May 2024", price: "₹10,000", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: "2", name: "Ritu Patel", service: "Engagement Mehendi", date: "23 May 2024", price: "₹8,000", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: "3", name: "Sneha Joshi", service: "Arabic Mehendi", date: "22 May 2024", price: "₹5,000", image: "https://randomuser.me/api/portraits/women/32.jpg" },
  ];

  const renderActions = () => {
    if (activeTab === "Pending") {
      return (
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.acceptButton} onPress={() => navigation.navigate("BookingDetails")}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectButton} onPress={() => Alert.alert("Reject Booking", "Are you sure you want to reject this booking?")}>
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (activeTab === "Accepted") {
      return (
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate("BookingDetails")}>
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.completedBadge}>
        <Ionicons name="checkmark-circle" size={16} color={Colors.success} />
        <Text style={styles.completedText}>Completed</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.row}>
            <Ionicons name="brush-outline" size={13} color={Colors.textTertiary} />
            <Text style={styles.service}>{item.service}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={13} color={Colors.textTertiary} />
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      {renderActions()}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking Requests</Text>
      </View>
      <View style={styles.tabsContainer}>
        {["Pending", "Accepted", "Completed"].map((tab) => (
          <TouchableOpacity key={tab} style={styles.tabButton} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
      <FlatList data={bookings} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15 },
  headerTitle: { fontSize: 24, fontWeight: "700", color: Colors.text },
  tabsContainer: { flexDirection: "row", backgroundColor: Colors.white, marginHorizontal: 16, borderRadius: 14, paddingVertical: 4, marginBottom: 14 },
  tabButton: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 12 },
  tabText: { fontSize: 15, fontWeight: "600", color: Colors.textTertiary },
  activeTabText: { color: Colors.primary },
  activeIndicator: { position: "absolute", bottom: 0, width: 42, height: 3, borderRadius: 10, backgroundColor: Colors.primary },
  listContainer: { paddingHorizontal: 16, paddingBottom: 30 },
  card: { backgroundColor: Colors.white, borderRadius: 18, padding: 15, marginBottom: 14, shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  topSection: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 56, height: 56, borderRadius: 28 },
  infoContainer: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: "700", color: Colors.text, marginBottom: 4 },
  row: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  service: { fontSize: 12, color: Colors.textSecondary, marginLeft: 5 },
  date: { fontSize: 12, color: Colors.textSecondary, marginLeft: 5 },
  price: { fontSize: 16, fontWeight: "700", color: Colors.text },
  actionContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: 16, gap: 12 },
  acceptButton: { backgroundColor: Colors.primary, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 22, marginLeft: 10 },
  acceptButtonText: { color: Colors.white, fontSize: 13, fontWeight: "600" },
  rejectButton: { borderWidth: 1.5, borderColor: Colors.primary, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 22 },
  rejectButtonText: { color: Colors.primary, fontSize: 13, fontWeight: "600" },
  viewButton: { alignSelf: "flex-end", marginTop: 14, backgroundColor: Colors.primary, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 24 },
  viewButtonText: { color: Colors.white, fontSize: 13, fontWeight: "600" },
  completedBadge: { alignSelf: "flex-end", flexDirection: "row", alignItems: "center", marginTop: 14, backgroundColor: Colors.success + "20", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 },
  completedText: { marginLeft: 5, color: Colors.success, fontWeight: "600", fontSize: 12 },
});
