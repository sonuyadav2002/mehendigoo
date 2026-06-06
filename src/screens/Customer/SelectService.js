import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const services = [
  {
    id: "1",
    name: "Bridal Mehendi",
    price: "₹5,000",
  },
  {
    id: "2",
    name: "Engagement Mehendi",
    price: "₹3,000",
  },
  {
    id: "3",
    name: "Arabic Mehendi",
    price: "₹2,000",
  },
  {
    id: "4",
    name: "Simple Mehendi",
    price: "₹1,000",
  },
];

export default function SelectService({ navigation }) {
  const [selected, setSelected] = useState("1");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.serviceCard, selected === item.id && styles.selectedCard]}
      onPress={() => setSelected(item.id)}
    >
      <View>
        <Text style={styles.serviceName}>{item.name}</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.price}>{item.price}</Text>

        <View
          style={[styles.radio, selected === item.id && styles.radioActive]}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Select Service</Text>

        <View style={{ width: 25 }} />
      </View>

      {/* Services */}

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />

      {/* Continue */}

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate("SelectDate")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  back: {
    fontSize: 24,
    color: "#111",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  serviceCard: {
    height: 75,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 14,
    marginBottom: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },

  selectedCard: {
    borderColor: "#F7146B",
    backgroundColor: "#FFF5F8",
  },

  serviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginRight: 12,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D1D5DB",
  },

  radioActive: {
    borderColor: "#F7146B",
    backgroundColor: "#F7146B",
  },

  bottom: {
    padding: 20,
  },

  continueBtn: {
    height: 55,
    backgroundColor: "#F7146B",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
