import { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentScreen({ navigation }) {
  const [selectedMethod, setSelectedMethod] = useState("upi");

  const methods = [
    {
      id: "upi",
      title: "UPI Payment",
      subtitle: "Google Pay, PhonePe, Paytm",
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      subtitle: "Visa, Mastercard, RuPay",
    },
    {
      id: "wallet",
      title: "Wallet",
      subtitle: "Paytm Wallet",
    },
    {
      id: "cod",
      title: "Pay At Venue",
      subtitle: "Pay after service",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Payment</Text>

          <Text style={styles.subtitle}>Choose your payment method</Text>
        </View>

        <View style={styles.amountCard}>
          <Text style={styles.amountLabel}>Total Payable</Text>

          <Text style={styles.amount}>₹2,835</Text>
        </View>

        {methods.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => setSelectedMethod(item.id)}
            style={[
              styles.paymentCard,
              selectedMethod === item.id && styles.selectedCard,
            ]}
          >
            <View>
              <Text style={styles.methodTitle}>{item.title}</Text>

              <Text style={styles.methodSub}>{item.subtitle}</Text>
            </View>

            <View
              style={[
                styles.radio,
                selectedMethod === item.id && styles.radioActive,
              ]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate("BookingSuccess")}
      >
        <Text style={styles.payText}>Pay ₹2,835</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 35 : 10,
    paddingBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#777",
  },

  amountCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
  },

  amountLabel: {
    color: "#777",
    fontSize: 13,
  },

  amount: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: "700",
    color: "#F7146B",
  },

  paymentCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectedCard: {
    borderWidth: 1,
    borderColor: "#F7146B",
  },

  methodTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  methodSub: {
    marginTop: 3,
    fontSize: 12,
    color: "#777",
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#DDD",
  },

  radioActive: {
    backgroundColor: "#F7146B",
    borderColor: "#F7146B",
  },

  payButton: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
    height: 54,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  payText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
