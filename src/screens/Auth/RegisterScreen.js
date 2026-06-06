import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Register to continue</Text>

      {/* Full Name */}
      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
        />
      </View>

      {/* Mobile */}
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>G</Text>
        <TextInput
          value={mobile}
          onChangeText={setMobile}
          style={styles.input}
          placeholder="+91 98765 43210"
          placeholderTextColor="#999"
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <Text style={styles.closeIcon}>×</Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Otp")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Continue With */}
      <Text style={styles.continueText}>or continue with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialIcon}></Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    fontSize: 14,
    color: "#8A8A8A",
    marginTop: 6,
    marginBottom: 35,
  },

  inputContainer: {
    height: 58,
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 16,
  },

  icon: {
    fontSize: 18,
    marginRight: 10,
  },

  closeIcon: {
    fontSize: 18,
    color: "#999",
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },

  registerButton: {
    height: 55,
    backgroundColor: "#F7146B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  registerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  continueText: {
    textAlign: "center",
    marginTop: 35,
    color: "#999",
    fontSize: 14,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 18,
  },

  socialBtn: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  socialIcon: {
    fontSize: 28,
  },

  loginLink: {
    textAlign: "center",
    marginTop: 30,
    color: "#F7146B",
    fontWeight: "600",
  },
});
