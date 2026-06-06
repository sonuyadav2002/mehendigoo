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

export default function AddPortfolioScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Bridal");

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
    Alert.alert("Success", "Portfolio added successfully");

    navigation.navigate("Portfolio");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Add Portfolio</Text>

          <View style={styles.empty} />
        </View>

        {/* Upload Box */}

        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <>
              <Ionicons name="cloud-upload-outline" size={50} color="#F7146B" />

              <Text style={styles.uploadText}>Upload Portfolio Image</Text>

              <Text style={styles.uploadSubText}>JPG, PNG up to 10MB</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Form */}

        <View style={styles.form}>
          <Text style={styles.label}>Category</Text>

          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{category}</Text>

            <Ionicons name="chevron-down" size={18} color="#666" />
          </View>

          <Text style={styles.label}>Title</Text>

          <TextInput
            placeholder="Enter portfolio title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <Text style={styles.label}>Description</Text>

          <TextInput
            placeholder="Write portfolio description"
            multiline
            value={description}
            onChangeText={setDescription}
            style={styles.textArea}
          />
        </View>
      </ScrollView>

      {/* Save Button */}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Portfolio</Text>
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
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#F7146B",
    borderRadius: 24,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  previewImage: {
    width: "100%",
    height: "100%",
  },

  uploadText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  uploadSubText: {
    marginTop: 4,
    fontSize: 13,
    color: "#777",
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
  },

  dropdownText: {
    fontSize: 15,
    color: "#111",
  },

  input: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
  },

  textArea: {
    height: 120,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    textAlignVertical: "top",
    fontSize: 15,
  },

  footer: {
    padding: 16,
    backgroundColor: "#FFF8FA",
  },

  saveButton: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
