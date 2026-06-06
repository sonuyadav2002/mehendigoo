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

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState("+91 98765 43210");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Mobile */}
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>G</Text>
        <TextInput
          value={mobile}
          onChangeText={setMobile}
          style={styles.input}
          placeholder="Mobile Number"
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Text style={styles.closeIcon}>×</Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Otp")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.linkText}
        onPress={() => navigation.navigate("Register")}
      >
        {" "}
        Don't have an account? Register{" "}
      </Text>
      {/* Forgot */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialIcon}></Text>
        </TouchableOpacity>
      </View>
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
  },

  loginButton: {
    height: 55,
    backgroundColor: "#F7146B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  loginText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  forgot: {
    textAlign: "center",
    marginTop: 18,
    color: "#666",
    fontSize: 14,
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
  linkText: { marginTop: 16, color: "#434f59", textAlign: "center" },
});
