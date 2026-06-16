import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

export default function ProfilePhotoScreen({ navigation }) {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const openImagePicker = () => {
    Alert.alert("Select Photo", "Choose an option", [
      { text: "Camera", onPress: openCamera },
      { text: "Gallery", onPress: openGallery },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Camera permission required");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1, allowsEditing: true, aspect: [1, 1],
    });
    if (!result.canceled) setProfilePhoto(result.assets[0].uri);
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1, allowsEditing: true, aspect: [1, 1],
    });
    if (!result.canceled) setProfilePhoto(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Upload Profile Photo</Text>
        <Text style={styles.subHeading}>Upload a professional photo so customers can recognize you easily.</Text>

        <TouchableOpacity style={styles.uploadBox} activeOpacity={0.8} onPress={openImagePicker}>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={styles.profileImage} />
          ) : (
            <>
              <Ionicons name="camera-outline" size={55} color={Colors.primary} />
              <Text style={styles.uploadTitle}>Upload Profile Photo</Text>
              <Text style={styles.uploadSubtitle}>Tap to open camera or gallery</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <CustomButton title="Continue" onPress={() => navigation.navigate("WorkSamples")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 15 },
  heading: { fontSize: 22, fontWeight: "700", color: Colors.text, marginBottom: 6 },
  subHeading: { fontSize: 13, color: Colors.textSecondary, marginBottom: 25 },
  uploadBox: { height: 280, borderRadius: 16, backgroundColor: Colors.primaryLight + "20", borderWidth: 1, borderColor: Colors.primaryLight + "80", justifyContent: "center", alignItems: "center", overflow: "hidden" },
  profileImage: { width: "100%", height: "100%" },
  uploadTitle: { marginTop: 15, fontSize: 16, fontWeight: "600", color: Colors.text },
  uploadSubtitle: { marginTop: 5, fontSize: 13, color: Colors.textSecondary },
  footer: { paddingHorizontal: 20, paddingBottom: 25, paddingTop: 10 },
});
