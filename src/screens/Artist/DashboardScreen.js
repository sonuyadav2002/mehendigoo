import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import LoadingSkeleton from "../../components/LoadingSkeleton";

export default function ArtistDashboardScreen() {
  const [loading] = useState(false);
  const bookings = [
    { id: 1, name: "Ananya Sharma", service: "Bridal Mehendi", date: "24 May, 11:00 AM", image: "https://picsum.photos/200?1" },
    { id: 2, name: "Ritika Patel", service: "Engagement Mehendi", date: "23 May, 11:00 PM", image: "https://picsum.photos/200?2" },
    { id: 3, name: "Sneha Joshi", service: "Arabic Mehendi", date: "22 May, 04:30 PM", image: "https://picsum.photos/200?3" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{ padding: 20 }}>
          <LoadingSkeleton type="list" count={4} />
        </View>
      ) : (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Priya 👋</Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={22} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { borderLeftColor: Colors.error }]}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Leads</Text>
          </View>
          <View style={[styles.statCard, { borderLeftColor: Colors.warning }]}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>
          <View style={[styles.statCard, { borderLeftColor: Colors.success }]}>
            <Text style={styles.statValue}>₹25,400</Text>
            <Text style={styles.statLabel}>Earnings</Text>
          </View>
          <View style={[styles.statCard, { borderLeftColor: Colors.info }]}>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Bookings</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {bookings.map((item) => (
          <View key={item.id} style={styles.bookingCard}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.bookingInfo}>
              <Text style={styles.customerName}>{item.name}</Text>
              <Text style={styles.serviceName}>{item.service}</Text>
              <View style={styles.dateRow}>
                <Ionicons name="calendar-outline" size={12} color={Colors.textTertiary} />
                <Text style={styles.bookingDate}>{item.date}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewBtnText}>View</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 15, paddingBottom: 20 },
  greeting: { fontSize: 24, fontWeight: "700", color: Colors.text },
  welcomeText: { fontSize: 13, color: Colors.textSecondary, marginTop: 4 },
  notificationBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", shadowColor: Colors.shadow, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  statsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 16 },
  statCard: { width: "48%", backgroundColor: Colors.white, borderRadius: 18, paddingVertical: 18, paddingHorizontal: 15, marginBottom: 12, borderLeftWidth: 5, shadowColor: Colors.shadow, shadowOpacity: 0.06, shadowRadius: 8, elevation: 3 },
  statValue: { fontSize: 20, fontWeight: "700", color: Colors.text },
  statLabel: { marginTop: 6, color: Colors.textSecondary, fontSize: 13 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12, marginBottom: 12, paddingHorizontal: 18 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: Colors.text },
  viewAll: { color: Colors.primary, fontWeight: "600" },
  bookingCard: { flexDirection: "row", alignItems: "center", backgroundColor: Colors.white, marginHorizontal: 16, marginBottom: 12, padding: 14, borderRadius: 18, shadowColor: Colors.shadow, shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 },
  avatar: { width: 58, height: 58, borderRadius: 14 },
  bookingInfo: { flex: 1, marginLeft: 12 },
  customerName: { fontSize: 15, fontWeight: "700", color: Colors.text },
  serviceName: { fontSize: 13, color: Colors.textSecondary, marginTop: 2 },
  dateRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  bookingDate: { fontSize: 12, color: Colors.textTertiary, marginLeft: 4 },
  viewBtn: { backgroundColor: Colors.primary, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 },
  viewBtnText: { color: Colors.white, fontWeight: "600", fontSize: 13 },
});
