import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function WalletScreen() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const amounts = [100, 500, 1000, 2000];

  const transactions = [
    { id: "1", title: "Wallet Recharge", amount: "+ ₹500", date: "04 Jun 2026", credit: true },
    { id: "2", title: "Booking Payment", amount: "- ₹2500", date: "02 Jun 2026", credit: false },
    { id: "3", title: "Refund", amount: "+ ₹300", date: "28 May 2026", credit: true },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionCard}>
      <View style={styles.transactionLeft}>
        <View style={[styles.iconBox, { backgroundColor: item.credit ? Colors.success + "20" : Colors.error + "20" }]}>
          <Ionicons name={item.credit ? "arrow-down" : "arrow-up"} size={18} color={item.credit ? Colors.success : Colors.error} />
        </View>
        <View>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <Text style={[styles.amountText, { color: item.credit ? Colors.success : Colors.error }]}>{item.amount}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wallet</Text>
        <Text style={styles.subtitle}>Manage your wallet balance</Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₹ 3,250</Text>
        <TouchableOpacity style={styles.addMoneyBtn}>
          <Text style={styles.addMoneyText}>Add Money</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Quick Add</Text>

      <View style={styles.amountRow}>
        {amounts.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedAmount(item)}
            style={[styles.amountChip, selectedAmount === item && styles.activeChip]}
          >
            <Text style={[styles.amountChipText, selectedAmount === item && styles.activeChipText]}>₹{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, paddingHorizontal: 20 },
  header: { paddingTop: Platform.OS === "android" ? 20 : 20, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text },
  subtitle: { marginTop: 4, fontSize: 13, color: Colors.textTertiary },
  balanceCard: { backgroundColor: Colors.primary, borderRadius: 20, padding: 20, marginBottom: 25 },
  balanceLabel: { color: Colors.white, opacity: 0.9, fontSize: 13 },
  balanceAmount: { color: Colors.white, fontSize: 32, fontWeight: "700", marginTop: 8 },
  addMoneyBtn: { marginTop: 18, backgroundColor: Colors.white, height: 42, borderRadius: 10, justifyContent: "center", alignItems: "center" },
  addMoneyText: { color: Colors.primary, fontWeight: "600" },
  sectionTitle: { fontSize: 16, fontWeight: "600", color: Colors.text, marginBottom: 12 },
  amountRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  amountChip: { width: "23%", height: 44, borderRadius: 10, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" },
  activeChip: { backgroundColor: Colors.primary },
  amountChipText: { fontWeight: "600", color: Colors.textSecondary },
  activeChipText: { color: Colors.white },
  transactionCard: { backgroundColor: Colors.white, borderRadius: 14, padding: 14, marginBottom: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  transactionLeft: { flexDirection: "row", alignItems: "center" },
  iconBox: { width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", marginRight: 12 },
  transactionTitle: { fontSize: 14, fontWeight: "600", color: Colors.text },
  transactionDate: { fontSize: 12, color: Colors.textTertiary, marginTop: 2 },
  amountText: { fontSize: 14, fontWeight: "700" },
});
