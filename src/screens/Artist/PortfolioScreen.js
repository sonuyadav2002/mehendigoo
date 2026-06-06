import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PortfolioScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Mehendi", "Bridal", "Engagement"];

  const portfolioData = [
    {
      id: "1",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "2",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "3",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "4",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "5",
      image: require("../../assets/images/Henna.jpg"),
    },
    {
      id: "6",
      image: require("../../assets/images/Henna.jpg"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.imageCard}>
      <Image source={item.image} style={styles.portfolioImage} />
    </TouchableOpacity>
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

        <Text style={styles.headerTitle}>My Portfolio</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* Tabs */}

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Portfolio Grid */}

      <FlatList
        data={portfolioData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* FAB */}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddPortfolio")}
      >
        <Ionicons name="add" size={28} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  tabButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginRight: 8,
  },

  activeTab: {
    backgroundColor: "#F7146B",
  },

  tabText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
  },

  activeTabText: {
    color: "#FFF",
  },

  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 100,
  },

  imageCard: {
    flex: 1,
    margin: 6,
    backgroundColor: "#FFF",
    borderRadius: 18,
    overflow: "hidden",
    elevation: 3,
  },

  portfolioImage: {
    width: "100%",
    height: 180,
  },

  fab: {
    position: "absolute",
    bottom: 25,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
});
