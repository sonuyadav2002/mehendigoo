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

export default function PersonalDetailsScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Tell us about yourself</Text>

        <View style={styles.profileWrapper}>
          <Image
            source={require("../../assets/images/o1.png")}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            placeholderTextColor="#6B7280"
            placeholder="Enter your full name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholderTextColor="#6B7280"
            placeholder="Enter your email"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={dob}
            placeholderTextColor="#6B7280"
            placeholder="Enter your date of birth"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            value={city}
            placeholderTextColor="#6B7280"
            placeholder="Enter your city"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AadhaarVerification")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 30,
  },

  profileWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },

  profileBorder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFF",
  },

  formGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
    marginLeft: 5,
  },

  input: {
    height: 55,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111",
    elevation: 1,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },

  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
