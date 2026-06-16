import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

export default function EditProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState("Priya Mehendi Artist");
  const [email, setEmail] = useState("priya@gmail.com");
  const [phone, setPhone] = useState("9876543210");

  const handleSave = () => {
    if (!fullName.trim()) { Alert.alert("Error", "Please enter your name"); return; }
    if (!email.trim()) { Alert.alert("Error", "Please enter your email"); return; }
    if (!phone.trim() || phone.length < 10) { Alert.alert("Error", "Please enter valid phone number"); return; }
    Alert.alert("Success", "Profile Updated Successfully");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: "https://picsum.photos/300" }} style={styles.profileImage} />
            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera" size={18} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.changePhoto}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color={Colors.textTertiary} />
            <TextInput value={fullName} onChangeText={setFullName} placeholder="Enter Full Name" placeholderTextColor={Colors.textTertiary} style={styles.input} />
          </View>

          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color={Colors.textTertiary} />
            <TextInput value={email} onChangeText={setEmail} placeholder="Enter Email" placeholderTextColor={Colors.textTertiary} keyboardType="email-address" style={styles.input} />
          </View>

          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="call-outline" size={20} color={Colors.textTertiary} />
            <TextInput value={phone} onChangeText={setPhone} placeholder="Enter Phone Number" placeholderTextColor={Colors.textTertiary} keyboardType="phone-pad" maxLength={10} style={styles.input} />
          </View>
        </View>

        <View style={styles.footer}>
          <CustomButton title="Save Changes" onPress={handleSave} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primaryLight + "20" },
  scrollContainer: { paddingBottom: 40 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 18, paddingVertical: 18 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  profileSection: { alignItems: "center", marginTop: 10, marginBottom: 25 },
  avatarWrapper: { position: "relative" },
  profileImage: { width: 110, height: 110, borderRadius: 55 },
  cameraButton: { position: "absolute", right: 0, bottom: 5, width: 36, height: 36, borderRadius: 18, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center" },
  changePhoto: { marginTop: 12, color: Colors.primary, fontWeight: "600", fontSize: 14 },
  formCard: { backgroundColor: Colors.white, marginHorizontal: 16, borderRadius: 20, padding: 18, elevation: 2, shadowColor: Colors.shadow, shadowOpacity: 0.05, shadowRadius: 8 },
  label: { fontSize: 14, fontWeight: "600", color: Colors.textSecondary, marginBottom: 8, marginTop: 12 },
  inputContainer: { flexDirection: "row", alignItems: "center", backgroundColor: Colors.background, borderWidth: 1, borderColor: Colors.border, borderRadius: 14, paddingHorizontal: 14, height: 54 },
  input: { flex: 1, marginLeft: 10, fontSize: 15, color: Colors.text },
  footer: { paddingHorizontal: 16, paddingTop: 25 },
});
