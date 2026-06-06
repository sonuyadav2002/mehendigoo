import Ionicons from "@expo/vector-icons/Ionicons";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ServicesScreen({ navigation }) {
  const services = [
    {
      id: "1",
      name: "Bridal Mehendi",
      type: "Bridal",
      price: "₹10,000",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "2",
      name: "Engagement Mehendi",
      type: "Bridal",
      price: "₹6,000",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "3",
      name: "Arabic Mehendi",
      type: "Bridal",
      price: "₹3,000",
      image: require("../../assets/images/Henna.jpg"),
    },
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
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Services</Text>

        <View style={styles.placeholder} />
      </View>

      {/* Services List */}

      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Add Service Button */}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddService")}
        >
          <Ionicons name="add" size={18} color="#FFF" />

          <Text style={styles.addButtonText}>Add Service</Text>
        </TouchableOpacity>
      </View>
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

  backBtn: {
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

  list: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 12,
  },

  info: {
    marginLeft: 12,
    flex: 1,
  },

  serviceName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  serviceType: {
    marginTop: 4,
    fontSize: 12,
    color: "#999",
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },

  addButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: PRIMARY,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: PRIMARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  addButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },
});
