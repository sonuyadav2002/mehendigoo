import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WalletScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Withdraw");

  const transactions = [
    {
      id: "1",
      title: "Booking Payment",
      date: "24 May 2024",
      amount: "+₹10,000",
      type: "credit",
    },
    {
      id: "2",
      title: "Advance Received",
      date: "20 May 2024",
      amount: "+₹2,000",
      type: "credit",
    },
    {
      id: "3",
      title: "Withdrawal",
      date: "18 May 2024",
      amount: "-₹5,000",
      type: "debit",
    },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionCard}>
      <View>
        <Text style={styles.transactionTitle}>{item.title}</Text>

        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>

      <Text
        style={[
          styles.amount,
          item.type === "credit" ? styles.credit : styles.debit,
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Wallet</Text>

        <View style={styles.placeholder} />
      </View>

      {/* Wallet Card */}

      <View style={styles.walletCard}>
        <View style={styles.walletTop}>
          <Text style={styles.balanceLabel}>Wallet Balance</Text>

          <Ionicons name="wallet-outline" size={20} color="#FFF" />
        </View>

        <Text style={styles.balance}>₹25,400</Text>

        <Text style={styles.available}>Available for Withdrawal</Text>
      </View>

      {/* Tabs */}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Withdraw" && styles.activeTab]}
          onPress={() => setActiveTab("Withdraw")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Withdraw" && styles.activeTabText,
            ]}
          >
            Withdraw
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Transactions" && styles.activeTab]}
          onPress={() => setActiveTab("Transactions")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Transactions" && styles.activeTabText,
            ]}
          >
            Transactions
          </Text>
        </TouchableOpacity>
      </View>

      {/* Withdraw Section */}

      {activeTab === "Withdraw" ? (
        <TouchableOpacity
          style={styles.withdrawBtn}
          onPress={() => navigation.navigate("WithdrawEarnings")}
        >
          <Text style={styles.withdrawText}>Withdraw Earnings</Text>
        </TouchableOpacity>
      ) : null}

      {/* Recent Transactions */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
      </View>

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
    paddingVertical: 12,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  placeholder: {
    width: 40,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  walletCard: {
    backgroundColor: PRIMARY,
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },

  walletTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  balanceLabel: {
    color: "#FFF",
    fontSize: 13,
  },

  balance: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    marginTop: 8,
  },

  available: {
    color: "#FFE5EF",
    fontSize: 12,
    marginTop: 4,
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 14,
    padding: 4,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: PRIMARY,
  },

  tabText: {
    fontWeight: "600",
    color: "#666",
  },

  activeTabText: {
    color: "#FFF",
  },

  withdrawBtn: {
    backgroundColor: PRIMARY,
    marginHorizontal: 16,
    marginTop: 16,
    height: 52,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  withdrawText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },

  sectionHeader: {
    marginTop: 24,
    marginHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,
  },

  transactionCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  transactionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },

  transactionDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },

  amount: {
    fontSize: 15,
    fontWeight: "700",
  },

  credit: {
    color: "#16A34A",
  },

  debit: {
    color: "#EF4444",
  },
});
