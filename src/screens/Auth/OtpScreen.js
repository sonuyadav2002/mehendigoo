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

export default function OtpScreen({ navigation }) {
  const [otp1, setOtp1] = useState("4");
  const [otp2, setOtp2] = useState("2");
  const [otp3, setOtp3] = useState("7");
  const [otp4, setOtp4] = useState("8");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Verify Your Number</Text>

      <Text style={styles.subtitle}>Enter 4 digit code sent to</Text>

      <Text style={styles.mobile}>✦ +91 98765 43210</Text>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpBox}
          maxLength={1}
          value={otp1}
          onChangeText={setOtp1}
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.otpBox}
          maxLength={1}
          value={otp2}
          onChangeText={setOtp2}
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.otpBox}
          maxLength={1}
          value={otp3}
          onChangeText={setOtp3}
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.otpBox}
          maxLength={1}
          value={otp4}
          onChangeText={setOtp4}
          keyboardType="number-pad"
        />
      </View>

      <Text style={styles.resend}>
        Resend OTP in <Text style={styles.timer}>00:30</Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RoleSelection")}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#8A8A8A",
  },

  mobile: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },

  otpBox: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  resend: {
    textAlign: "center",
    marginTop: 30,
    color: "#888",
    fontSize: 14,
  },

  timer: {
    color: "#F7146B",
    fontWeight: "700",
  },

  button: {
    height: 55,
    backgroundColor: "#F7146B",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
