import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

export default function SelectDateScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Date</Text>

      <View style={styles.calendarCard}>
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          hideExtraDays
          enableSwipeMonths
          renderArrow={(direction) => (
            <Ionicons name={direction === "left" ? "chevron-back" : "chevron-forward"} size={20} color={Colors.text} />
          )}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: Colors.primary },
          }}
          theme={{
            backgroundColor: Colors.white,
            calendarBackground: Colors.white,
            textSectionTitleColor: Colors.textTertiary,
            monthTextColor: Colors.text,
            textMonthFontSize: 16,
            textMonthFontWeight: "700",
            dayTextColor: Colors.text,
            textDayFontSize: 14,
            selectedDayBackgroundColor: Colors.primary,
            selectedDayTextColor: Colors.white,
            todayTextColor: Colors.primary,
            arrowColor: Colors.text,
          }}
        />
      </View>

      <View style={styles.footer}>
        <CustomButton title="Continue" onPress={() => navigation.navigate("SelectTimeSlot")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 22, fontWeight: "700", color: Colors.text, marginBottom: 20, textAlign: "center" },
  calendarCard: { backgroundColor: Colors.white },
  footer: { paddingHorizontal: 20, paddingBottom: 25, paddingTop: 10 },
});
