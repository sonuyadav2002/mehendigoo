import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RefundStatusScreen({ navigation }) {
  const timeline = [
    { key: "initiated", label: "Initiated", completed: true },
    { key: "processing", label: "Processing", completed: true },
    { key: "completed", label: "Completed", completed: false },
  ];

  const currentStep = 1;

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

          <Text style={styles.headerTitle}>Refund Status</Text>
        </View>

        <View style={styles.refundCard}>
          <View style={styles.refundIconCircle}>
            <Ionicons name="refresh-outline" size={32} color="#F7146B" />
          </View>

          <Text style={styles.refundLabel}>Refund Amount</Text>

          <Text style={styles.refundAmount}>Ã¢â€šÂ¹500</Text>

          <Text style={styles.refundSubtext}>
            Estimated completion by 14 Jun 2026
          </Text>
        </View>

        <View style={styles.timelineSection}>
          <Text style={styles.sectionTitle}>Status Timeline</Text>

          <View style={styles.timelineCard}>
            {timeline.map((step, index) => {
              const isActive = index === currentStep;
              const isPast = index < currentStep;
              const isLast = index === timeline.length - 1;

              return (
                <View key={step.key} style={styles.timelineRow}>
                  <View style={styles.timelineLeft}>
                    <View
                      style={[
                        styles.dot,
                        (isActive || isPast) && styles.dotActive,
                        isActive && styles.dotCurrent,
                      ]}
                    >
                      {isPast && (
                        <Ionicons name="checkmark" size={14} color="#FFF" />
                      )}
                    </View>

                    {!isLast && (
                      <View
                        style={[
                          styles.line,
                          isPast && styles.lineActive,
                        ]}
                      />
                    )}
                  </View>

                  <View
                    style={[
                      styles.timelineContent,
                      isActive && styles.timelineContentActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.timelineLabel,
                        isActive && styles.timelineLabelActive,
                      ]}
                    >
                      {step.label}
                    </Text>

                    {isActive && (
                      <Text style={styles.timelineDesc}>
                        Your refund is being processed
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <TouchableOpacity style={styles.supportBtn}>
          <Ionicons name="headset-outline" size={18} color="#F7146B" />

          <Text style={styles.supportBtnText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
  refundCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFF8FA",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFE4EF",
  },
  refundIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  refundLabel: {
    fontSize: 14,
    color: "#888",
  },
  refundAmount: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    marginTop: 6,
  },
  refundSubtext: {
    fontSize: 13,
    color: "#F7146B",
    fontWeight: "500",
    marginTop: 8,
  },
  timelineSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 14,
  },
  timelineCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  timelineRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 60,
  },
  timelineLeft: {
    alignItems: "center",
    width: 30,
  },
  dot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  dotActive: {
    backgroundColor: "#F7146B",
  },
  dotCurrent: {
    backgroundColor: "#F7146B",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: 2,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#EEE",
    marginVertical: 2,
  },
  lineActive: {
    backgroundColor: "#F7146B",
  },
  timelineContent: {
    flex: 1,
    marginLeft: 12,
    paddingBottom: 16,
  },
  timelineContentActive: {
    backgroundColor: "#FFF8FA",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  timelineLabel: {
    fontSize: 15,
    color: "#888",
    fontWeight: "500",
  },
  timelineLabelActive: {
    color: "#111",
    fontWeight: "600",
  },
  timelineDesc: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },
  supportBtn: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  supportBtnText: {
    color: "#F7146B",
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 15,
  },
});