import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageViewing from "react-native-image-viewing";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

const galleryImages = [
  { id: "1", uri: Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri + "?id=1" },
  { id: "2", uri: Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri + "?id=2" },
  { id: "3", uri: Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri + "?id=3" },
  { id: "4", uri: Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri + "?id=4" },
  { id: "5", uri: Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri + "?id=5" },
  { id: "6", uri: Image.resolveAssetSource(require("../../assets/images/Henna.jpg")).uri + "?id=6" },
];

export default function PortfolioScreen({ navigation }) {
  const [visible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImage = (index) => {
    setSelectedIndex(index);
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Portfolio Gallery</Text>
        <View style={{ width: 30 }} />
      </View>

      <FlatList
        data={galleryImages}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.imageContainer} activeOpacity={0.9} onPress={() => openImage(index)}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.bottomContainer}>
        <CustomButton title="Continue" onPress={() => navigation.navigate("SelectService")} />
      </View>

      <ImageViewing images={galleryImages} imageIndex={selectedIndex} visible={visible} onRequestClose={() => setIsVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 10, marginBottom: 15 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.background, justifyContent: "center", alignItems: "center" },
  headerTitle: { fontSize: 22, fontWeight: "700", color: Colors.text },
  listContent: { paddingHorizontal: 10, paddingBottom: 120 },
  imageContainer: { flex: 1, margin: 6 },
  image: { width: "100%", height: 220, borderRadius: 18 },
  bottomContainer: { paddingHorizontal: 20, paddingBottom: 25 },
});
