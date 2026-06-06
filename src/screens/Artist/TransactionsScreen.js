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

export default function TransactionsScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("All");

  const transactions = [
    {
      id: "1",
      title: "Booking Payment",
      date: "24 May 2024",
      amount: "+₹10,000",
      type: "Income",
    },
    {
      id: "2",
      title: "Advance Received",
      date: "20 May 2024",
      amount: "+₹2,000",
      type: "Income",
    },
    {
      id: "3",
      title: "Withdrawal",
      date: "18 May 2024",
      amount: "-₹5,000",
      type: "Expense",
    },
    {
      id: "4",
      title: "Refund",
      date: "15 May 2024",
      amount: "-₹1,000",
      type: "Expense",
    },
  ];

  const filteredData =
    selectedTab === "All"
      ? transactions
      : transactions.filter((item) => item.type === selectedTab);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View
          style={[
            styles.iconContainer,
            item.type === "Income" ? styles.incomeBg : styles.expenseBg,
          ]}
        >
          <Ionicons
            name={item.type === "Income" ? "arrow-down" : "arrow-up"}
            size={18}
            color={item.type === "Income" ? "#16A34A" : "#EF4444"}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      <Text
        style={[
          styles.amount,
          item.type === "Income" ? styles.incomeText : styles.expenseText,
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

        <Text style={styles.headerTitle}>Transaction History</Text>

        <View style={styles.placeholder} />
      </View>

      {/* Tabs */}

      <View style={styles.tabContainer}>
        {["All", "Income", "Expense"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Transactions */}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
    alignItems: "center",
    justifyContent: "space-between",
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

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  placeholder: {
    width: 40,
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 4,
    marginTop: 10,
    marginBottom: 16,
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
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },

  activeTabText: {
    color: "#FFF",
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
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

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  incomeBg: {
    backgroundColor: "#DCFCE7",
  },

  expenseBg: {
    backgroundColor: "#FEE2E2",
  },

  info: {
    marginLeft: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },

  date: {
    marginTop: 4,
    fontSize: 12,
    color: "#888",
  },

  amount: {
    fontSize: 15,
    fontWeight: "700",
  },

  incomeText: {
    color: "#16A34A",
  },

  expenseText: {
    color: "#EF4444",
  },
});
