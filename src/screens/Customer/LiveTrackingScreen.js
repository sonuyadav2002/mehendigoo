import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LiveTrackingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.9124,
          longitude: 75.7873,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 26.9124,
            longitude: 75.7873,
          }}
          title="Your Location"
        />

        <Marker
          coordinate={{
            latitude: 26.9224,
            longitude: 75.7973,
          }}
          pinColor="#F7146B"
          title="Artist Location"
        />
      </MapView>

      <View style={styles.bottomCard}>
        <View style={styles.artistRow}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
            }}
            style={styles.artistImage}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.artistName}>Priya Mehendi Artist</Text>

            <Text style={styles.artistStatus}>Arriving in 15 mins</Text>
          </View>

          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressFill} />
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="call-outline" size={20} color="#F7146B" />
            <Text style={styles.actionText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="chatbubble-outline" size={20} color="#F7146B" />
            <Text style={styles.actionText}>Chat</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryText}>View Booking Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  map: {
    flex: 1,
  },

  bottomCard: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },

  artistRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  artistImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 12,
  },

  artistName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  artistStatus: {
    fontSize: 13,
    color: "#777",
    marginTop: 3,
  },

  liveBadge: {
    backgroundColor: "#E8FFF0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  liveText: {
    color: "#0BA34A",
    fontWeight: "600",
    fontSize: 12,
  },

  progressContainer: {
    height: 6,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    marginTop: 18,
    overflow: "hidden",
  },

  progressFill: {
    width: "70%",
    height: "100%",
    backgroundColor: "#F7146B",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  actionBtn: {
    width: "48%",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F7146B",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    marginLeft: 8,
    color: "#F7146B",
    fontWeight: "600",
  },

  primaryBtn: {
    marginTop: 15,
    height: 52,
    backgroundColor: "#F7146B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
