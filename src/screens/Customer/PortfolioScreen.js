import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageViewing from "react-native-image-viewing";

const galleryImages = [
  {
    id: "1",
    uri:
      Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri +
      "?id=1",
  },
  {
    id: "2",
    uri:
      Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri +
      "?id=2",
  },
  {
    id: "3",
    uri:
      Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri +
      "?id=3",
  },
  {
    id: "4",
    uri:
      Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri +
      "?id=4",
  },
  {
    id: "5",
    uri:
      Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri +
      "?id=5",
  },
  {
    id: "6",
    uri:
      Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri +
      "?id=6",
  },
];

export default function PortfolioScreen({ navigation }) {
  const [visible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImage = (index) => {
    setSelectedIndex(index);
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Portfolio Gallery</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Gallery */}
      <FlatList
        data={galleryImages}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            activeOpacity={0.9}
            onPress={() => openImage(index)}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      {/* Continue Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate("SelectService")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Full Screen Viewer */}
      <ImageViewing
        images={galleryImages}
        imageIndex={selectedIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  backBtn: {
    fontSize: 24,
    fontWeight: "600",
    color: "#111",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 120, // button ke liye extra space
  },

  imageContainer: {
    flex: 1,
    margin: 6,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 18,
  },

  bottomContainer: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
    zIndex: 999,
  },

  continueBtn: {
    height: 55,
    backgroundColor: "#F7146B",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#F7146B",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
