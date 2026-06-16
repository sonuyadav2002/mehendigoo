import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function PersonalDetailsScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tell us about yourself</Text>

        <View style={styles.profileWrapper}>
          <Image source={require("../../assets/images/o1.png")} style={styles.profileImage} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} value={fullName} placeholderTextColor={Colors.placeholder} placeholder="Enter your full name" onChangeText={setFullName} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} placeholderTextColor={Colors.placeholder} placeholder="Enter your email" onChangeText={setEmail} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} value={dob} placeholderTextColor={Colors.placeholder} placeholder="DD/MM/YYYY" onChangeText={setDob} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput style={styles.input} value={city} placeholderTextColor={Colors.placeholder} placeholder="Enter your city" onChangeText={setCity} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AadhaarVerification")}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  content: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text, textAlign: "center", marginTop: 10 },
  profileWrapper: { alignItems: "center", marginBottom: 30 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  formGroup: { marginBottom: 18 },
  label: { fontSize: 13, fontWeight: "600", color: Colors.text, marginBottom: 8, marginLeft: 5 },
  input: { height: 55, backgroundColor: Colors.inputBackground, borderRadius: 14, paddingHorizontal: 16, fontSize: 15, color: Colors.text, borderWidth: 1, borderColor: Colors.border },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: Colors.white, paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10 },
  button: { height: 56, borderRadius: 16, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center" },
  buttonText: { color: Colors.white, fontSize: 16, fontWeight: "700" },
});
