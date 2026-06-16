import Ionicons from "@expo/vector-icons/Ionicons";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const NOTIF_ICONS = {
  booking: "calendar-outline",
  payment: "wallet-outline",
  wallet: "cash-outline",
  review: "star-outline",
  profile: "person-outline",
  promo: "pricetag-outline",
  reminder: "alarm-outline",
  system: "settings-outline",
};

function formatRelativeTime(timestamp) {
  if (!timestamp) return "";
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function groupNotificationsByDate(notifications) {
  const groups = {};
  const now = new Date();
  const today = now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  notifications.forEach((notif) => {
    const date = new Date(notif.createdAt || notif.timestamp);
    let key;
    if (date.toDateString() === today) {
      key = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      key = "Yesterday";
    } else {
      key = date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    }
    if (!groups[key]) groups[key] = [];
    groups[key].push(notif);
  });

  return groups;
}

function NotificationItem({ item, onPress }) {
  const iconName = NOTIF_ICONS[item.type] || "notifications-outline";
  const unread = !item.isRead && !item.read;

  return (
    <TouchableOpacity style={[styles.notifCard, unread && styles.unreadCard]} onPress={() => onPress(item)} activeOpacity={0.7}>
      <View style={[styles.iconCircle, { backgroundColor: unread ? Colors.primaryLight + "40" : Colors.background }]}>
        <Ionicons name={iconName} size={20} color={unread ? Colors.primary : Colors.textTertiary} />
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, unread && styles.unreadTitle]} numberOfLines={1}>{item.title}</Text>
          {unread && <View style={styles.unreadDot} />}
        </View>
        <Text style={styles.body} numberOfLines={2}>{item.body || item.message}</Text>
        <Text style={styles.time}>{formatRelativeTime(item.createdAt || item.timestamp)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function NotificationCenterScreen({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchNotifications = useCallback(async (pageNum = 1, isRefresh = false) => {
    try {
      setLoading(pageNum === 1);
      const items = [];
      if (pageNum === 1) {
        setNotifications(items);
      } else {
        setNotifications((prev) => [...prev, ...items]);
      }
      setHasMore(items.length === 20);
      setPage(pageNum);
    } catch (_) {
    } finally {
      setLoading(false);
      if (isRefresh) setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchNotifications(1); }, [fetchNotifications]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNotifications(1, true);
  }, [fetchNotifications]);

  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    fetchNotifications(page + 1).finally(() => setLoadingMore(false));
  }, [loadingMore, hasMore, page, fetchNotifications]);

  const handleNotificationPress = useCallback((item) => {
    navigation.navigate("NotificationDetails", { id: item._id || item.id });
  }, [navigation]);

  const grouped = groupNotificationsByDate(notifications);
  const sections = Object.entries(grouped);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
      </View>

      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconCircle}>
            <Ionicons name="notifications-off-outline" size={40} color={Colors.primary} />
          </View>
          <Text style={styles.emptyTitle}>No notifications yet</Text>
          <Text style={styles.emptySubtitle}>We'll notify you when something arrives</Text>
        </View>
      ) : (
        <FlatList
          data={sections}
          keyExtractor={(item) => item[0]}
          renderItem={({ item: section }) => (
            <View style={styles.section}>
              <Text style={styles.sectionDate}>{section[0]}</Text>
              {section[1].map((notif) => (
                <NotificationItem key={notif._id || notif.id} item={notif} onPress={handleNotificationPress} />
              ))}
            </View>
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.primary} colors={[Colors.primary]} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={loadingMore ? <View style={styles.footerLoader}><ActivityIndicator size="small" color={Colors.primary} /></View> : null}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primaryLight + "20" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 12 },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  backBtn: { marginRight: 12 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  listContent: { paddingBottom: 30 },
  section: { marginBottom: 8 },
  sectionDate: { fontSize: 13, fontWeight: "600", color: Colors.textTertiary, textTransform: "uppercase", letterSpacing: 0.5, paddingHorizontal: 16, paddingVertical: 8 },
  notifCard: { flexDirection: "row", alignItems: "flex-start", paddingHorizontal: 16, paddingVertical: 12, marginHorizontal: 16, marginBottom: 6, backgroundColor: Colors.white, borderRadius: 14, elevation: 1, shadowColor: Colors.shadow, shadowOpacity: 0.02, shadowRadius: 2, shadowOffset: { width: 0, height: 1 } },
  unreadCard: { backgroundColor: Colors.primaryLight + "20" },
  iconCircle: { width: 42, height: 42, borderRadius: 21, justifyContent: "center", alignItems: "center", marginRight: 12, marginTop: 2 },
  content: { flex: 1 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { fontSize: 15, fontWeight: "500", color: Colors.text, flex: 1 },
  unreadTitle: { fontWeight: "700" },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.primary, marginLeft: 8 },
  body: { fontSize: 13, color: Colors.textSecondary, marginTop: 4, lineHeight: 18 },
  time: { fontSize: 11, color: Colors.textTertiary, marginTop: 6 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  footerLoader: { paddingVertical: 20, alignItems: "center" },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 40 },
  emptyIconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.primaryLight + "40", justifyContent: "center", alignItems: "center", marginBottom: 20 },
  emptyTitle: { fontSize: 18, fontWeight: "700", color: Colors.text },
  emptySubtitle: { fontSize: 14, color: Colors.textTertiary, marginTop: 6, textAlign: "center" },
});
