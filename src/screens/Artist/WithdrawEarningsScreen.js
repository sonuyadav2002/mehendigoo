import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WithdrawEarningsScreen({ navigation }) {
  const [amount, setAmount] = useState("");
  const [selectedBank] = useState("Bank Transfer (HDFC **** 4321)");

  const availableBalance = "₹25,400";

  const handleWithdraw = () => {
    if (!amount) {
      Alert.alert("Enter Amount", "Please enter withdrawal amount.");
      return;
    }

    Alert.alert(
      "Success",
      `₹${amount} withdrawal request submitted successfully.`,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Withdraw Earnings</Text>

          <View style={styles.placeholder} />
        </View>

        {/* Balance Card */}

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>

          <Text style={styles.balanceAmount}>{availableBalance}</Text>
        </View>

        {/* Amount */}

        <View style={styles.section}>
          <Text style={styles.label}>Enter Amount</Text>

          <TextInput
            placeholder="₹ 5000"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
          />
        </View>

        {/* Bank */}

        <View style={styles.section}>
          <Text style={styles.label}>Select Method</Text>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedBank}</Text>

            <Ionicons name="chevron-down" size={18} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Button */}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.withdrawButton}
          onPress={handleWithdraw}
        >
          <Text style={styles.withdrawButtonText}>Withdraw Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#F7146B";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  placeholder: {
    width: 40,
  },

  balanceCard: {
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  balanceLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },

  balanceAmount: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
  },

  section: {
    marginHorizontal: 16,
    marginTop: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 10,
  },

  input: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },

  dropdown: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },

  dropdownText: {
    fontSize: 14,
    color: "#111",
  },

  footer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 10,
    backgroundColor: "#FFF8FA",
  },

  withdrawButton: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: PRIMARY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  withdrawButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
