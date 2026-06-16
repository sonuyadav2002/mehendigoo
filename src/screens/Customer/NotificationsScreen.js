import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import Colors from "../../constants/Colors";

const initialNotifications = [
  { id: "1", title: "Booking Confirmed", subtitle: "Your booking with Ananya Sharma is confirmed", time: "2 hours ago", read: false },
  { id: "2", title: "Payment Received", subtitle: "Payment of ₹500 has been credited to your wallet", time: "Yesterday", read: false },
  { id: "3", title: "Reminder", subtitle: "Your appointment is tomorrow at 11:00 AM", time: "2 days ago", read: true },
  { id: "4", title: "Special Offer", subtitle: "Get 20% off on your next booking", time: "3 days ago", read: true },
];

export default function NotificationsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.notifCard, !item.read && styles.unread]}
      onPress={() => navigation.navigate("NotificationDetails")}
    >
      <View style={[styles.iconCircle, { backgroundColor: item.read ? "#F3F4F6" : Colors.primaryLight }]}>
        <Ionicons name="notifications-outline" size={20} color={item.read ? "#6B7280" : Colors.primary} />
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
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
          <View style={{ width: 40 }} />
        </View>
      </View>
      {notifications.length === 0 ? (
        <EmptyState icon="notifications" title="No Notifications" message="You're all caught up! No notifications yet." />
      ) : (
        <FlatList data={notifications} renderItem={renderItem} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false} />
      )}
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8FA", paddingHorizontal: 16 },
  header: { paddingVertical: 16 },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: "#F5F5F5", justifyContent: "center", alignItems: "center" },
  headerTitle: { fontSize: 24, fontWeight: "700", color: "#111" },
  markAll: { fontSize: 13, color: "#F7146B", fontWeight: "600" },
  notifCard: { backgroundColor: "#FFF", borderRadius: 16, padding: 14, marginBottom: 10, flexDirection: "row", elevation: 1, shadowColor: "#000", shadowOpacity: 0.02, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } },
  unread: { backgroundColor: "#FFF5F8" },
  iconCircle: { width: 42, height: 42, borderRadius: 21, justifyContent: "center", alignItems: "center", marginRight: 12 },
  content: { flex: 1 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { fontSize: 15, fontWeight: "500", color: "#111" },
  unreadTitle: { fontWeight: "700" },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#F7146B" },
  subtitle: { fontSize: 13, color: "#666", marginTop: 2 },
  time: { fontSize: 11, color: "#999", marginTop: 4 },
});