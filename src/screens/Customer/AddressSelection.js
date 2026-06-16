import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

export default function AddressSelection({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const addresses = [
    { id: 1, type: "Home", address: "A-24, Shyam Nagar, Jaipur, Rajasthan 302019" },
    { id: 2, type: "Work", address: "Indiabulls Office, Vaishali Nagar, Jaipur" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Address</Text>
          <Text style={styles.subtitle}>Where should the artist visit?</Text>
        </View>

        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location" size={18} color={Colors.primary} />
          <Text style={styles.locationText}>Use Current Location</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Saved Addresses</Text>

        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => setSelectedAddress(item.id)}
            style={[styles.addressCard, selectedAddress === item.id && styles.selectedCard]}
          >
            <View style={styles.addressTop}>
              <View style={styles.typeBadge}>
                <Text style={styles.typeText}>{item.type}</Text>
              </View>
              <View style={[styles.radio, selectedAddress === item.id && styles.radioActive]} />
            </View>
            <Text style={styles.addressText}>{item.address}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addAddress}>
          <Ionicons name="add-circle-outline" size={20} color={Colors.primary} />
          <Text style={styles.addAddressText}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton title="Continue" onPress={() => navigation.navigate("BookingSummary")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  content: { paddingBottom: 120 },
  header: { paddingHorizontal: 20, paddingTop: Platform.OS === "android" ? 20 : 10, paddingBottom: 30 },
  title: { fontSize: 22, fontWeight: "700", color: Colors.text },
  subtitle: { fontSize: 13, color: Colors.textTertiary, marginTop: 4 },
  locationButton: { marginHorizontal: 20, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50, borderRadius: 12, borderWidth: 1, borderColor: Colors.primary, backgroundColor: Colors.primaryLight + "20" },
  locationText: { marginLeft: 8, color: Colors.primary, fontWeight: "600", fontSize: 14 },
  sectionTitle: { fontSize: 16, fontWeight: "600", color: Colors.text, marginHorizontal: 20, marginTop: 25, marginBottom: 12 },
  addressCard: { marginHorizontal: 20, backgroundColor: Colors.white, borderRadius: 14, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: Colors.border, shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.04, shadowRadius: 3, elevation: 2 },
  selectedCard: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight + "20" },
  addressTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  typeBadge: { backgroundColor: Colors.background, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  typeText: { fontSize: 12, fontWeight: "600", color: Colors.textSecondary },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: Colors.border },
  radioActive: { borderColor: Colors.primary, backgroundColor: Colors.primary },
  addressText: { marginTop: 12, fontSize: 14, lineHeight: 22, color: Colors.textSecondary },
  addAddress: { marginHorizontal: 20, marginTop: 10, height: 54, borderRadius: 12, borderWidth: 1, borderStyle: "dashed", borderColor: Colors.primary, justifyContent: "center", alignItems: "center", flexDirection: "row" },
  addAddressText: { marginLeft: 8, color: Colors.primary, fontSize: 14, fontWeight: "600" },
  footer: { paddingHorizontal: 20, paddingBottom: 25 },
});
