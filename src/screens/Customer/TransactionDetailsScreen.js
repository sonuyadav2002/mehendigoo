import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionDetailsScreen({ navigation }) {
  const transaction = {
    id: "TXN202606041234",
    type: "debit",
    title: "Booking Payment",
    amount: "â‚¹2,500",
    date: "04 Jun 2026",
    time: "11:30 AM",
    status: "Success",
    paymentMethod: "UPI - GPay",
    bookingRef: "#BK1023",
  };

  const isCredit = transaction.type === "credit";

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#1D1D1D" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Transaction Details</Text>
        </View>

        <View style={styles.iconSection}>
          <View
            style={[
              styles.iconCircle,
              {
                backgroundColor: isCredit ? "#E8FFF0" : "#FFF2F2",
              },
            ]}
          >
            <Ionicons
              name={isCredit ? "arrow-down" : "arrow-up"}
              size={28}
              color={isCredit ? "#16A34A" : "#EF4444"}
            />
          </View>

          <Text style={styles.transactionTitle}>{transaction.title}</Text>

          <Text
            style={[
              styles.transactionAmount,
              { color: isCredit ? "#16A34A" : "#EF4444" },
            ]}
          >
            {isCredit ? "+" : "-"}
            {transaction.amount}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <DetailRow label="Transaction ID" value={transaction.id} />
          <DetailRow label="Date" value={transaction.date} />
          <DetailRow label="Time" value={transaction.time} />
          <DetailRow label="Status" value={transaction.status} isStatus />
          <DetailRow label="Payment Method" value={transaction.paymentMethod} />
          <DetailRow label="Booking Reference" value={transaction.bookingRef} isLast />
        </View>

        <TouchableOpacity style={styles.downloadBtn}>
          <Ionicons name="download-outline" size={20} color="#FFF" />

          <Text style={styles.downloadBtnText}>Download Receipt</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailRow({ label, value, isStatus, isLast }) {
  return (
    <View style={[styles.detailRow, !isLast && styles.detailRowBorder]}>
      <Text style={styles.detailLabel}>{label}</Text>

      {isStatus ? (
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{value}</Text>
        </View>
      ) : (
        <Text style={styles.detailValue}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  iconSection: {
    alignItems: "center",
    paddingVertical: 30,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 28,
    fontWeight: "700",
  },
  detailsCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    paddingHorizontal: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },
  detailRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  detailLabel: {
    fontSize: 14,
    color: "#888",
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: "#111",
    fontWeight: "600",
    flex: 1.5,
    textAlign: "right",
  },
  statusBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: "#16A34A",
    fontWeight: "600",
    fontSize: 12,
  },
  downloadBtn: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  downloadBtnText: {
    color: "#FFF",
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 15,
  },
});