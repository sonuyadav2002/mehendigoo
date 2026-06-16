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
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor={Colors.placeholder}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.placeholder}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Otp", { phone: mobile })}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Register")}
        >
          Don't have an account? Register
        </Text>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* <Text style={styles.continueText}>or continue with</Text> */}

        {/* <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialIcon}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialIcon}></Text>
          </TouchableOpacity>
        </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 6,
    marginBottom: 35,
  },
  inputContainer: {
    height: 58,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: Colors.inputBackground,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
  },
  loginButton: {
    height: 55,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  loginText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 16,
  },
  forgot: {
    textAlign: "center",
    marginTop: 18,
    color: Colors.textSecondary,
    fontSize: 14,
  },
  continueText: {
    textAlign: "center",
    marginTop: 35,
    color: Colors.textTertiary,
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
    borderColor: Colors.border,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    fontSize: 28,
  },
  linkText: {
    marginTop: 16,
    color: Colors.primary,
    textAlign: "center",
    fontWeight: "600",
  },
});
