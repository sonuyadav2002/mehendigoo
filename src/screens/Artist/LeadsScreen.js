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

export default function LeadsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("All");

  const leads = [
    {
      id: "1",
      name: "Ananya Sharma",
      service: "Bridal Mehendi",
      date: "24 May, 11:00 AM",
      location: "Bangalore",
      budget: "₹10,000",
      image: "https://picsum.photos/200?1",
    },
    {
      id: "2",
      name: "Ritika Patel",
      service: "Engagement Mehendi",
      date: "23 May, 02:00 PM",
      location: "Delhi",
      budget: "₹8,000",
      image: "https://picsum.photos/200?2",
    },
    {
      id: "3",
      name: "Sneha Joshi",
      service: "Arabic Mehendi",
      date: "22 May, 05:00 PM",
      location: "Mumbai",
      budget: "₹5,000",
      image: "https://picsum.photos/200?3",
    },
  ];

  const renderLead = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />

      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.service}>{item.service}</Text>

        <View style={styles.row}>
          <Ionicons name="calendar-outline" size={13} color="#888" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={13} color="#888" />
          <Text style={styles.infoText}>{item.location}</Text>
        </View>

        <Text style={styles.budget}>Budget : {item.budget}</Text>
      </View>

      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => {
          navigation.navigate("LeadDetails");
        }}
      >
        <Text style={styles.viewText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's Leads</Text>

        <TouchableOpacity>
          <Ionicons name="filter-outline" size={22} color="#222" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {["All", "New", "Bid", "Engagement"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={leads}
        keyExtractor={(item) => item.id}
        renderItem={renderLead}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 15,
  },

  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 8,
  },

  activeTab: {
    backgroundColor: "#F7146B",
  },

  tabText: {
    color: "#666",
    fontSize: 13,
    fontWeight: "600",
  },

  activeTabText: {
    color: "#fff",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 15,
  },

  details: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
  },

  service: {
    fontSize: 13,
    color: "#F7146B",
    marginTop: 2,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  infoText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 4,
  },

  budget: {
    marginTop: 6,
    fontWeight: "700",
    color: "#222",
    fontSize: 13,
  },

  viewBtn: {
    alignSelf: "center",
    backgroundColor: "#F7146B",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },

  viewText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});
