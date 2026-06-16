import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

export default function ServicesScreen({ navigation }) {
  const services = [
    { id: "1", name: "Bridal Mehendi", type: "Bridal", price: "₹10,000", image: require("../../assets/images/Henna.jpg") },
    { id: "2", name: "Engagement Mehendi", type: "Bridal", price: "₹6,000", image: require("../../assets/images/Henna.jpg") },
    { id: "3", name: "Arabic Mehendi", type: "Bridal", price: "₹3,000", image: require("../../assets/images/Henna.jpg") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.serviceName}>{item.name}</Text>
          <Text style={styles.serviceType}>{item.type}</Text>
        </View>
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Services</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <CustomButton title="Add Service" onPress={() => navigation.navigate("AddService")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primaryLight + "20" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", elevation: 2 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  placeholder: { width: 40 },
  list: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 120 },
  card: { backgroundColor: Colors.white, borderRadius: 18, padding: 14, marginBottom: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center", shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  leftSection: { flexDirection: "row", alignItems: "center", flex: 1 },
  image: { width: 55, height: 55, borderRadius: 12 },
  info: { marginLeft: 12, flex: 1 },
  serviceName: { fontSize: 15, fontWeight: "700", color: Colors.text },
  serviceType: { marginTop: 4, fontSize: 12, color: Colors.textTertiary },
  price: { fontSize: 15, fontWeight: "700", color: Colors.text },
  footer: { paddingHorizontal: 16, paddingBottom: 20 },
});
