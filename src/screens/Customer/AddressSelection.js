import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AddressSelection({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const addresses = [
    {
      id: 1,
      type: "Home",
      address: "A-24, Shyam Nagar, Jaipur, Rajasthan 302019",
    },
    {
      id: 2,
      type: "Work",
      address: "Indiabulls Office, Vaishali Nagar, Jaipur",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Select Address</Text>

          <Text style={styles.subtitle}>Where should the artist visit?</Text>
        </View>

        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location" size={18} color="#F7146B" />

          <Text style={styles.locationText}>Use Current Location</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Saved Addresses</Text>

        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => setSelectedAddress(item.id)}
            style={[
              styles.addressCard,
              selectedAddress === item.id && styles.selectedCard,
            ]}
          >
            <View style={styles.addressTop}>
              <View style={styles.typeBadge}>
                <Text style={styles.typeText}>{item.type}</Text>
              </View>

              <View
                style={[
                  styles.radio,
                  selectedAddress === item.id && styles.radioActive,
                ]}
              />
            </View>

            <Text style={styles.addressText}>{item.address}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addAddress}>
          <Ionicons name="add-circle-outline" size={20} color="#F7146B" />

          <Text style={styles.addAddressText}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("BookingSummary")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  content: {
    paddingBottom: 120,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 50 : 10,
    paddingBottom: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  locationButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F7146B",
    backgroundColor: "#FFF5F8",
  },

  locationText: {
    marginLeft: 8,
    color: "#F7146B",
    fontWeight: "600",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  addressCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ECECEC",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 2,
  },

  selectedCard: {
    borderColor: "#F7146B",
    backgroundColor: "#FFF7FA",
  },

  addressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  typeBadge: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  typeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#444",
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#DDD",
  },

  radioActive: {
    borderColor: "#F7146B",
    backgroundColor: "#F7146B",
  },

  addressText: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
  },

  addAddress: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  addAddressText: {
    marginLeft: 8,
    color: "#F7146B",
    fontSize: 14,
    fontWeight: "600",
  },

  continueButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 54,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
