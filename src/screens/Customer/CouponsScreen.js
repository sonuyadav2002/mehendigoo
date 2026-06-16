import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function CouponsScreen() {
  const [selectedCoupon, setSelectedCoupon] = useState("1");
  const [couponCode, setCouponCode] = useState("");

  const coupons = [
    { id: "1", code: "WELCOME20", description: "Get 20% off on your first booking", validTill: "Valid till 30 Jun 2026" },
    { id: "2", code: "MEHANDI10", description: "Flat ₹100 off on bookings above ₹999", validTill: "Valid till 15 Jul 2026" },
    { id: "3", code: "BRIDE500", description: "Special bridal package discount", validTill: "Valid till 31 Jul 2026" },
    { id: "4", code: "FESTIVE30", description: "30% off on festive bookings", validTill: "Valid till 15 Aug 2026" },
  ];

  const renderCoupon = ({ item }) => {
    const isSelected = selectedCoupon === item.id;

    return (
      <View style={styles.couponCard}>
        <View style={styles.iconBox}>
          <Ionicons name="gift-outline" size={22} color={Colors.primary} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.couponCode}>{item.code}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.validity}>{item.validTill}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedCoupon(item.id)} style={[styles.applyButton, isSelected && styles.appliedButton]}>
          <Text style={[styles.applyButtonText, isSelected && styles.appliedButtonText]}>{isSelected ? "Applied" : "Apply"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Coupons & Offers</Text>
        <Text style={styles.subtitle}>Save more on your booking</Text>
      </View>

      <View style={styles.couponInputCard}>
        <TextInput value={couponCode} onChangeText={setCouponCode} placeholder="Enter Coupon Code" placeholderTextColor={Colors.textTertiary} style={styles.input} />
        <TouchableOpacity style={styles.inputApplyBtn}>
          <Text style={styles.inputApplyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={coupons} renderItem={renderCoupon} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, paddingHorizontal: 16 },
  header: { paddingTop: 20, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text },
  subtitle: { marginTop: 4, fontSize: 13, color: Colors.textTertiary },
  couponInputCard: { backgroundColor: Colors.white, borderRadius: 14, padding: 10, flexDirection: "row", alignItems: "center", marginBottom: 20, shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  input: { flex: 1, height: 45, fontSize: 14, color: Colors.text },
  inputApplyBtn: { backgroundColor: Colors.primary, paddingHorizontal: 18, height: 42, borderRadius: 10, justifyContent: "center", alignItems: "center" },
  inputApplyText: { color: Colors.white, fontWeight: "600", fontSize: 13 },
  couponCard: { backgroundColor: Colors.white, borderRadius: 14, padding: 14, flexDirection: "row", alignItems: "center", marginBottom: 12, shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  iconBox: { width: 45, height: 45, borderRadius: 12, backgroundColor: Colors.primaryLight + "40", justifyContent: "center", alignItems: "center" },
  detailsContainer: { flex: 1, marginLeft: 12 },
  couponCode: { fontSize: 15, fontWeight: "700", color: Colors.text },
  description: { fontSize: 12, color: Colors.textSecondary, marginTop: 4 },
  validity: { fontSize: 11, color: Colors.textTertiary, marginTop: 5 },
  applyButton: { borderWidth: 1, borderColor: Colors.primary, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  applyButtonText: { color: Colors.primary, fontWeight: "600", fontSize: 13 },
  appliedButton: { backgroundColor: Colors.primary },
  appliedButtonText: { color: Colors.white },
});
