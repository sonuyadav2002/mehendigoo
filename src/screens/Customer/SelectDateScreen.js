import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SelectDateScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Date</Text>

      <View style={styles.calendarCard}>
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          hideExtraDays
          enableSwipeMonths
          renderArrow={(direction) => (
            <Ionicons
              name={direction === "left" ? "chevron-back" : "chevron-forward"}
              size={20}
              color="#222"
            />
          )}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: "#F7146B",
            },
          }}
          theme={{
            backgroundColor: "#fff",
            calendarBackground: "#fff",
            textSectionTitleColor: "#999",
            monthTextColor: "#222",
            textMonthFontSize: 16,
            textMonthFontWeight: "700",
            dayTextColor: "#222",
            textDayFontSize: 14,
            selectedDayBackgroundColor: "#F7146B",
            selectedDayTextColor: "#fff",
            todayTextColor: "#F7146B",
            arrowColor: "#222",
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("SelectTimeSlot");
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 20,
    textAlign: "center",
  },

  calendarCard: {
    backgroundColor: "#FFF",
    // borderRadius: 20,
    // padding: 8,
  },

  button: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    height: 54,
    backgroundColor: "#F7146B",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
