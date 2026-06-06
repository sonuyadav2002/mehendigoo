import { useState } from "react";
import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function SelectTimeSlotScreen({ navigation }) {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Select Time Slot</Text>

          <Text style={styles.subtitle}>
            Choose your preferred booking time
          </Text>
        </View>

        <View style={styles.slotContainer}>
          {timeSlots.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedTime(item)}
              style={[
                styles.slotCard,
                selectedTime === item && styles.selectedSlot,
              ]}
            >
              <Text
                style={[
                  styles.slotText,
                  selectedTime === item && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        disabled={!selectedTime}
        style={[styles.button, !selectedTime && styles.disabledButton]}
        onPress={() => navigation.navigate("AddressSelection")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingBottom: 100,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 50 : 10,
    paddingBottom: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111111",
    letterSpacing: 0.2,
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#777777",
    lineHeight: 18,
  },

  slotContainer: {
    paddingHorizontal: 20,
  },

  slotCard: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },

  selectedSlot: {
    backgroundColor: "#F7146B",
    borderColor: "#F7146B",
  },

  slotText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },

  selectedText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  button: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,

    height: 52,
    borderRadius: 12,

    backgroundColor: "#F7146B",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#F7146B",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  disabledButton: {
    opacity: 0.5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
});
