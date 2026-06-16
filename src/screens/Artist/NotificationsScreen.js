import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const notifications = [
  { id: "1", title: "New Booking Request", subtitle: "Ananya Sharma sent a booking request for Bridal Mehendi", time: "30 min ago", read: false },
  { id: "2", title: "Payment Received", subtitle: "Payment of ₹3,000 credited to your wallet", time: "2 hours ago", read: false },
  { id: "3", title: "Booking Completed", subtitle: "Mehendi session with Priya Sharma completed", time: "Yesterday", read: true },
  { id: "4", title: "Review Received", subtitle: "Priya Sharma left a 5-star review", time: "2 days ago", read: true },
];

export default function NotificationsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.notifCard, !item.read && styles.unread]}
      onPress={() => navigation.navigate("NotificationDetails")}
    >
      <View style={[styles.iconCircle, { backgroundColor: item.read ? Colors.background : Colors.primaryLight + "40" }]}>
        <Ionicons name="notifications-outline" size={20} color={item.read ? Colors.textTertiary : Colors.primary} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, !item.read && styles.unreadTitle]}>{item.title}</Text>
          {!item.read && <View style={styles.dot} />}
        </View>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAll}>Mark all read</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primaryLight + "20" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", elevation: 1 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  markAll: { fontSize: 13, color: Colors.primary, fontWeight: "600" },
  notifCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 14, marginBottom: 10, flexDirection: "row", elevation: 1, shadowColor: Colors.shadow, shadowOpacity: 0.02, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } },
  unread: { backgroundColor: Colors.primaryLight + "20" },
  iconCircle: { width: 42, height: 42, borderRadius: 21, justifyContent: "center", alignItems: "center", marginRight: 12 },
  content: { flex: 1 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { fontSize: 15, fontWeight: "500", color: Colors.text },
  unreadTitle: { fontWeight: "700" },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.primary },
  subtitle: { fontSize: 13, color: Colors.textSecondary, marginTop: 2 },
  time: { fontSize: 11, color: Colors.textTertiary, marginTop: 4 },
});
