import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function PortfolioScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabs = ["All", "Mehendi", "Bridal", "Engagement"];
  const portfolioData = [
    { id: "1", image: require("../../assets/images/Henna.jpg") },
    { id: "2", image: require("../../assets/images/Henna.jpg") },
    { id: "3", image: require("../../assets/images/Henna.jpg") },
    { id: "4", image: require("../../assets/images/Henna.jpg") },
    { id: "5", image: require("../../assets/images/Henna.jpg") },
    { id: "6", image: require("../../assets/images/Henna.jpg") },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.imageCard}>
      <Image source={item.image} style={styles.portfolioImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Portfolio</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tabButton, selectedTab === tab && styles.activeTab]} onPress={() => setSelectedTab(tab)}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList data={portfolioData} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer} />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("AddPortfolio")}>
        <Ionicons name="add" size={28} color={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  tabsContainer: { flexDirection: "row", paddingHorizontal: 16, marginBottom: 16 },
  tabButton: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: Colors.white, marginRight: 8 },
  activeTab: { backgroundColor: Colors.primary },
  tabText: { fontSize: 13, fontWeight: "600", color: Colors.textSecondary },
  activeTabText: { color: Colors.white },
  listContainer: { paddingHorizontal: 12, paddingBottom: 100 },
  imageCard: { flex: 1, margin: 6, backgroundColor: Colors.white, borderRadius: 18, overflow: "hidden", elevation: 3 },
  portfolioImage: { width: "100%", height: 180 },
  fab: { position: "absolute", bottom: 25, right: 20, width: 60, height: 60, borderRadius: 30, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center", elevation: 8 },
});
