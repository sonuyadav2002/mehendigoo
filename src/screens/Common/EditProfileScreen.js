import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState("Priya Mehendi Artist");
  const [email, setEmail] = useState("priya@gmail.com");
  const [phone, setPhone] = useState("9876543210");

  const handleSave = () => {
    if (!fullName.trim()) {
      Alert.alert("Error", "Please enter your name");
      return;
    }

    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    if (!phone.trim() || phone.length < 10) {
      Alert.alert("Error", "Please enter valid phone number");
      return;
    }

    Alert.alert("Success", "Profile Updated Successfully");

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Profile</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Profile Image */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://picsum.photos/300",
            }}
            style={styles.profileImage}
          />

          <TouchableOpacity style={styles.cameraButton}>
            <Ionicons name="camera" size={18} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.changePhoto}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.formCard}>
          <Text style={styles.label}>Full Name</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#888" />

            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter Full Name"
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Email Address</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#888" />

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Email"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Phone Number</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="call-outline" size={20} color="#888" />

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter Phone Number"
              keyboardType="phone-pad"
              maxLength={10}
              style={styles.input}
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },

  scrollContainer: {
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  profileSection: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  cameraButton: {
    position: "absolute",
    right: 140,
    bottom: 30,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  changePhoto: {
    marginTop: 12,
    color: "#F7146B",
    fontWeight: "600",
    fontSize: 14,
  },

  formCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 18,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 54,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#222",
  },

  saveButton: {
    backgroundColor: "#F7146B",
    marginHorizontal: 16,
    marginTop: 25,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
