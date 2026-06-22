import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState("Priya Mehendi Artist");
  const [email, setEmail] = useState("priya@gmail.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [experience, setExperience] = useState("3 Years");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
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

          <TouchableOpacity style={styles.cameraBtn}>
            <Ionicons name="camera" size={18} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.changePhoto}>Change Photo</Text>
        </View>

        {/* Form */}
        <View style={styles.formCard}>
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            placeholder="Enter Full Name"
          />

          <Text style={styles.label}>Email Address</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter Email"
          />

          <Text style={styles.label}>Mobile Number</Text>

          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter Phone Number"
          />

          <Text style={styles.label}>Experience</Text>

          <TextInput
            value={experience}
            onChangeText={setExperience}
            style={styles.input}
            placeholder="Experience"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.navigate("PublicProfile")}
        >
          <Text style={styles.saveBtnText}>Save Changes</Text>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  profileSection: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  cameraBtn: {
    position: "absolute",
    bottom: 22,
    right: 130,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  changePhoto: {
    marginTop: 12,
    color: "#F7146B",
    fontWeight: "600",
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

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    fontSize: 14,
  },

  saveBtn: {
    backgroundColor: "#F7146B",
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  saveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
