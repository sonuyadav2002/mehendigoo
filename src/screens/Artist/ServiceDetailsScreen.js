import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ServiceDetailsScreen({ navigation }) {
  const service = {
    name: "Bridal Mehendi",
    category: "Bridal",
    price: "Ã¢â€šÂ¹10,000",
    description:
      "Full bridal mehendi design including intricate patterns on both hands and feet. Premium quality natural henna with dark stain. Includes aftercare tips and touch-up within 24 hours.",
    image: require("../../assets/images/Henna.jpg"),
    totalBookings: 48,
    rating: "4.8",
  };

  const handleEdit = () => {
    navigation.navigate("EditService");
  };

  const handleDelete = () => {
    Alert.alert("Delete Service", "Are you sure you want to delete this service? This action cannot be undone.", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Service Details</Text>
          <View style={styles.empty} />
        </View>

        <Image source={service.image} style={styles.image} />

        <View style={styles.body}>
          <View style={styles.titleRow}>
            <View style={styles.titleInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{service.category}</Text>
              </View>
            </View>
            <Text style={styles.price}>{service.price}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{service.description}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Ionicons name="calendar-outline" size={22} color={PRIMARY} />
              <Text style={styles.statValue}>{service.totalBookings}</Text>
              <Text style={styles.statLabel}>Total Bookings</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="star-outline" size={22} color={PRIMARY} />
              <Text style={styles.statValue}>{service.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Ionicons name="create-outline" size={18} color="#FFF" />
          <Text style={styles.editButtonText}>Edit Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={18} color="#EF4444" />
          <Text style={styles.deleteButtonText}>Delete Service</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#F7146B";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  empty: {
    width: 40,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleInfo: {
    flex: 1,
    marginRight: 12,
  },
  serviceName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  categoryBadge: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#FFF1F7",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "600",
    color: PRIMARY,
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    color: PRIMARY,
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginTop: 8,
  },
  statLabel: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },
  footer: {
    padding: 16,
    gap: 10,
    backgroundColor: "#FFF8FA",
  },
  editButton: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  editButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
  deleteButton: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#EF4444",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
});
