import { useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

export default function SelectTimeSlotScreen({ navigation }) {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Time Slot</Text>
          <Text style={styles.subtitle}>Choose your preferred booking time</Text>
        </View>

        <View style={styles.slotContainer}>
          {timeSlots.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedTime(item)}
              style={[styles.slotCard, selectedTime === item && styles.selectedSlot]}
            >
              <Text style={[styles.slotText, selectedTime === item && styles.selectedText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton title="Continue" disabled={!selectedTime} onPress={() => navigation.navigate("AddressSelection")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  content: { paddingBottom: 100 },
  header: { paddingHorizontal: 20, paddingTop: Platform.OS === "android" ? 20 : 10, paddingBottom: 30 },
  title: { fontSize: 22, fontWeight: "700", color: Colors.text, letterSpacing: 0.2 },
  subtitle: { marginTop: 4, fontSize: 13, color: Colors.textTertiary },
  slotContainer: { paddingHorizontal: 20 },
  slotCard: { height: 50, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", marginBottom: 10, shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.03, shadowRadius: 3, elevation: 1 },
  selectedSlot: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  slotText: { fontSize: 14, fontWeight: "500", color: Colors.textSecondary },
  selectedText: { color: Colors.white, fontWeight: "600" },
  footer: { paddingHorizontal: 20, paddingBottom: 25 },
});
