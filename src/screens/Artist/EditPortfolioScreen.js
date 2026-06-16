import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = ["Bridal", "Engagement", "Arabic", "Festival", "Party"];

export default function EditPortfolioScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("Bridal Mehendi Design");
  const [description, setDescription] = useState(
    "Intricate bridal mehendi design with detailed floral patterns covering both hands up to the forearm."
  );
  const [category, setCategory] = useState("Bridal");
  const [showDropdown, setShowDropdown] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    Alert.alert("Success", "Portfolio updated successfully!");
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert("Delete Item", "Are you sure you want to delete this portfolio item?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Portfolio Item</Text>
          <View style={styles.empty} />
        </View>

        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <Image
              source={require("../../assets/images/Henna.jpg")}
              style={styles.previewImage}
            />
          )}
          <View style={styles.changeOverlay}>
            <Ionicons name="camera-outline" size={20} color="#FFF" />
            <Text style={styles.changeOverlayText}>Change Image</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.form}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>{category}</Text>
            <Ionicons
              name={showDropdown ? "chevron-up" : "chevron-down"}
              size={18}
              color="#666"
            />
          </TouchableOpacity>
          {showDropdown && (
            <View style={styles.dropdownList}>
              {CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.dropdownItem,
                    cat === category && styles.dropdownItemActive,
                  ]}
                  onPress={() => {
                    setCategory(cat);
                    setShowDropdown(false);
                  }}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      cat === category && styles.dropdownItemTextActive,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text style={styles.label}>Title</Text>
          <TextInput
            placeholder="Enter portfolio title"
            placeholderTextColor="#999"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder="Write portfolio description"
            placeholderTextColor="#999"
            multiline
            value={description}
            onChangeText={setDescription}
            style={styles.textArea}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={18} color="#EF4444" />
          <Text style={styles.deleteButtonText}>Delete</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  empty: {
    width: 40,
  },
  uploadBox: {
    height: 240,
    margin: 16,
    borderRadius: 24,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  changeOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 12,
  },
  changeOverlayText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
  form: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 16,
    color: "#111",
  },
  dropdown: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  dropdownText: {
    fontSize: 15,
    color: "#111",
  },
  dropdownList: {
    marginTop: 6,
    backgroundColor: "#FFF",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  dropdownItemActive: {
    backgroundColor: "#FFF1F7",
  },
  dropdownItemText: {
    fontSize: 15,
    color: "#333",
  },
  dropdownItemTextActive: {
    color: PRIMARY,
    fontWeight: "600",
  },
  input: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  textArea: {
    height: 120,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    textAlignVertical: "top",
    fontSize: 15,
    color: "#111",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  footer: {
    padding: 16,
    gap: 10,
    backgroundColor: "#FFF8FA",
  },
  saveButton: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  deleteButton: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#EF4444",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
});
