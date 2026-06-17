import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import { useArtistOnboarding } from "../../context/ArtistOnboardingContext";

const GENDERS = ["MALE", "FEMALE", "OTHER"];

export default function PersonalDetailsScreen({ navigation, route }) {
  const { artistDetails, updateArtistDetails } = useArtistOnboarding();
  const { phone: routePhone, name: routeName } = route.params || {};

  const [fullName, setFullName] = useState(artistDetails.fullName || routeName || "");
  const [email, setEmail] = useState(artistDetails.email || "");
  const [phone, setPhone] = useState(artistDetails.phone || routePhone || "");
  const [gender, setGender] = useState(artistDetails.gender || "");
  const [bio, setBio] = useState(artistDetails.bio || "");
  const [experienceYears, setExperienceYears] = useState(artistDetails.experienceYears || "");
  const [priceStart, setPriceStart] = useState(artistDetails.priceStart || "");
  const [homeService, setHomeService] = useState(artistDetails.homeService !== false);
  const [salonService, setSalonService] = useState(artistDetails.salonService || false);
  const [city, setCity] = useState(artistDetails.city || "");
  const [state, setState] = useState(artistDetails.state || "");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (routePhone && !artistDetails.phone) {
      setPhone(routePhone);
    }
    if (routeName && !artistDetails.fullName) {
      setFullName(routeName);
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name";
    if (!email.trim()) errs.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Please enter a valid email";
    if (!phone.trim()) errs.phone = "Please enter your mobile number";
    if (!gender) errs.gender = "Please select your gender";
    if (!bio.trim()) errs.bio = "Please enter a short bio";
    if (!experienceYears || isNaN(Number(experienceYears)) || Number(experienceYears) < 0)
      errs.experienceYears = "Please enter valid experience years";
    if (!priceStart || isNaN(Number(priceStart)) || Number(priceStart) < 0)
      errs.priceStart = "Please enter a valid starting price";
    if (!city.trim()) errs.city = "Please enter your city";
    if (!state.trim()) errs.state = "Please enter your state";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;
    updateArtistDetails({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      gender,
      bio: bio.trim(),
      experienceYears,
      priceStart,
      homeService,
      salonService,
      city: city.trim(),
      state: state.trim(),
    });
    navigation.navigate("ProfilePhoto");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tell us about yourself</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={[styles.input, errors.fullName ? styles.inputError : null]}
            value={fullName}
            placeholderTextColor={Colors.placeholder}
            placeholder="Enter your full name"
            onChangeText={(t) => { setFullName(t); setErrors((p) => ({ ...p, fullName: "" })); }}
          />
          {errors.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email ? styles.inputError : null]}
            value={email}
            placeholderTextColor={Colors.placeholder}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={(t) => { setEmail(t); setErrors((p) => ({ ...p, email: "" })); }}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={[styles.input, errors.phone ? styles.inputError : null]}
            value={phone}
            placeholderTextColor={Colors.placeholder}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            maxLength={15}
            onChangeText={(t) => { setPhone(t); setErrors((p) => ({ ...p, phone: "" })); }}
          />
          {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderRow}>
            {GENDERS.map((g) => (
              <TouchableOpacity
                key={g}
                style={[styles.genderBtn, gender === g && styles.genderBtnSelected]}
                onPress={() => { setGender(g); setErrors((p) => ({ ...p, gender: "" })); }}
              >
                <Text style={[styles.genderBtnText, gender === g && styles.genderBtnTextSelected]}>
                  {g === "MALE" ? "Male" : g === "FEMALE" ? "Female" : "Other"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {errors.gender ? <Text style={styles.errorText}>{errors.gender}</Text> : null}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.textArea, errors.bio ? styles.inputError : null]}
            value={bio}
            placeholderTextColor={Colors.placeholder}
            placeholder="Write a short bio about yourself"
            multiline
            numberOfLines={3}
            onChangeText={(t) => { setBio(t); setErrors((p) => ({ ...p, bio: "" })); }}
          />
          {errors.bio ? <Text style={styles.errorText}>{errors.bio}</Text> : null}
        </View>

        <View style={styles.row}>
          <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Experience (Years)</Text>
            <TextInput
              style={[styles.input, errors.experienceYears ? styles.inputError : null]}
              value={experienceYears}
              placeholderTextColor={Colors.placeholder}
              placeholder="e.g. 5"
              keyboardType="numeric"
              onChangeText={(t) => { setExperienceYears(t); setErrors((p) => ({ ...p, experienceYears: "" })); }}
            />
            {errors.experienceYears ? <Text style={styles.errorText}>{errors.experienceYears}</Text> : null}
          </View>
          <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>Starting Price (₹)</Text>
            <TextInput
              style={[styles.input, errors.priceStart ? styles.inputError : null]}
              value={priceStart}
              placeholderTextColor={Colors.placeholder}
              placeholder="e.g. 2000"
              keyboardType="numeric"
              onChangeText={(t) => { setPriceStart(t); setErrors((p) => ({ ...p, priceStart: "" })); }}
            />
            {errors.priceStart ? <Text style={styles.errorText}>{errors.priceStart}</Text> : null}
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Services Offered</Text>
          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[styles.toggleBtn, homeService && styles.toggleBtnSelected]}
              onPress={() => setHomeService(!homeService)}
            >
              <Text style={[styles.toggleText, homeService && styles.toggleTextSelected]}>
                Home Service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleBtn, salonService && styles.toggleBtnSelected]}
              onPress={() => setSalonService(!salonService)}
            >
              <Text style={[styles.toggleText, salonService && styles.toggleTextSelected]}>
                Salon Service
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={[styles.input, errors.city ? styles.inputError : null]}
              value={city}
              placeholderTextColor={Colors.placeholder}
              placeholder="Enter your city"
              onChangeText={(t) => { setCity(t); setErrors((p) => ({ ...p, city: "" })); }}
            />
            {errors.city ? <Text style={styles.errorText}>{errors.city}</Text> : null}
          </View>
          <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={[styles.input, errors.state ? styles.inputError : null]}
              value={state}
              placeholderTextColor={Colors.placeholder}
              placeholder="Enter your state"
              onChangeText={(t) => { setState(t); setErrors((p) => ({ ...p, state: "" })); }}
            />
            {errors.state ? <Text style={styles.errorText}>{errors.state}</Text> : null}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  content: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text, textAlign: "center", marginTop: 10, marginBottom: 25 },
  formGroup: { marginBottom: 18 },
  label: { fontSize: 13, fontWeight: "600", color: Colors.text, marginBottom: 8, marginLeft: 5 },
  input: { height: 55, backgroundColor: Colors.inputBackground, borderRadius: 14, paddingHorizontal: 16, fontSize: 15, color: Colors.text, borderWidth: 1, borderColor: Colors.border },
  inputError: { borderColor: Colors.error || "#FF3B30" },
  textArea: { height: 90, paddingTop: 16, textAlignVertical: "top" },
  errorText: { color: Colors.error || "#FF3B30", fontSize: 12, marginTop: 4, marginLeft: 5 },
  row: { flexDirection: "row" },
  genderRow: { flexDirection: "row", gap: 10 },
  genderBtn: { flex: 1, height: 48, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.inputBackground, justifyContent: "center", alignItems: "center" },
  genderBtnSelected: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight + "30" },
  genderBtnText: { fontSize: 14, fontWeight: "500", color: Colors.textSecondary },
  genderBtnTextSelected: { color: Colors.primary, fontWeight: "700" },
  toggleRow: { flexDirection: "row", gap: 10 },
  toggleBtn: { flex: 1, height: 48, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, backgroundColor: Colors.inputBackground, justifyContent: "center", alignItems: "center" },
  toggleBtnSelected: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight + "30" },
  toggleText: { fontSize: 14, fontWeight: "500", color: Colors.textSecondary },
  toggleTextSelected: { color: Colors.primary, fontWeight: "700" },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: Colors.white, paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10 },
  button: { height: 56, borderRadius: 16, backgroundColor: Colors.primary, justifyContent: "center", alignItems: "center" },
  buttonText: { color: Colors.white, fontSize: 16, fontWeight: "700" },
});
