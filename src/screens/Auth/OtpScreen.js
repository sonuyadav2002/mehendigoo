import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
import { verifyUserOtp } from "../../services/auth";

export default function OtpScreen({ navigation, route }) {
  const { phone, name, role, otp: initialOtp } = route.params || {};
  const [otp, setOtp] = useState(initialOtp ? initialOtp.split("") : ["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (initialOtp && initialOtp.length === 6) {
      inputRefs.current[5]?.focus();
    }
  }, []);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    const otpStr = otp.join("");
    if (otpStr.length < 6) {
      Alert.alert("Validation Error", "Please enter the complete OTP");
      return;
    }

    if (!phone) {
      navigation.reset({
        index: 0,
        routes: [{ name: "RoleSelection" }],
      });
      return;
    }

    setLoading(true);
    try {
      const data = await verifyUserOtp(phone, otpStr);
      const userRole = data.user?.role || role;

      if (userRole === "ARTIST") {
        navigation.reset({
          index: 0,
          routes: [{ name: "ArtistFlowStack" }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "CustomerStack" }],
        });
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Invalid OTP. Please try again.";
      Alert.alert("Verification Failed", message);
    } finally {
      setLoading(false);
    }
  };

  const displayPhone = phone ? `+91 ${phone.replace(/^\+91/, "")}` : "+91 98765 43210";

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.title}>Verify Your Number</Text>
        <Text style={styles.subtitle}>Enter 6 digit code sent to</Text>
        <Text style={styles.mobile}>{displayPhone}</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpBox}
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              editable={!loading}
            />
          ))}
        </View>

        <Text style={styles.resend}>
          {timer > 0 ? (
            <>
              Resend OTP in{" "}
              <Text style={styles.timer}>
                00:{timer.toString().padStart(2, "0")}
              </Text>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setTimer(30);
                setOtp(["", "", "", "", "", ""]);
                inputRefs.current[0]?.focus();
              }}
            >
              <Text style={styles.timer}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </Text>

        <TouchableOpacity
          style={[styles.button, loading && styles.disabledButton]}
          onPress={handleVerify}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={Colors.white} size="small" />
          ) : (
            <Text style={styles.buttonText}>Verify</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  container: { flex: 1, backgroundColor: Colors.white, justifyContent: "center", paddingHorizontal: 24 },
  title: { fontSize: 30, fontWeight: "700", color: Colors.text },
  subtitle: { marginTop: 8, fontSize: 14, color: Colors.textSecondary },
  mobile: { marginTop: 15, fontSize: 15, fontWeight: "600", color: Colors.text },
  otpContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 35 },
  otpBox: { width: 50, height: 60, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, textAlign: "center", fontSize: 22, fontWeight: "700", color: Colors.text, backgroundColor: Colors.inputBackground },
  resend: { textAlign: "center", marginTop: 30, color: Colors.textTertiary, fontSize: 14 },
  timer: { color: Colors.primary, fontWeight: "700" },
  button: { height: 55, backgroundColor: Colors.primary, borderRadius: 12, justifyContent: "center", alignItems: "center", marginTop: 30 },
  disabledButton: { opacity: 0.7 },
  buttonText: { color: Colors.white, fontSize: 16, fontWeight: "700" },
});
