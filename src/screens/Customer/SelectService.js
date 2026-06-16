import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

const services = [
  { id: "1", name: "Bridal Mehendi", price: "₹5,000" },
  { id: "2", name: "Engagement Mehendi", price: "₹3,000" },
  { id: "3", name: "Arabic Mehendi", price: "₹2,000" },
  { id: "4", name: "Simple Mehendi", price: "₹1,000" },
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
        <View style={[styles.radio, selected === item.id && styles.radioActive]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Service</Text>
        <View style={{ width: 25 }} />
      </View>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />

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
  container: { flex: 1, backgroundColor: Colors.white, paddingTop: 55 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 25 },
  back: { fontSize: 24, color: Colors.text },
  title: { fontSize: 22, fontWeight: "700", color: Colors.text },
  serviceCard: { height: 75, borderWidth: 1, borderColor: Colors.border, borderRadius: 14, marginBottom: 14, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: Colors.white },
  selectedCard: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight + "40" },
  serviceName: { fontSize: 16, fontWeight: "600", color: Colors.text },
  rightSection: { flexDirection: "row", alignItems: "center" },
  price: { fontSize: 16, fontWeight: "700", color: Colors.text, marginRight: 12 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: Colors.border },
  radioActive: { borderColor: Colors.primary, backgroundColor: Colors.primary },
  bottom: { padding: 20 },
  continueBtn: { height: 55, backgroundColor: Colors.primary, borderRadius: 14, justifyContent: "center", alignItems: "center" },
  continueText: { color: Colors.white, fontSize: 16, fontWeight: "700" },
});
