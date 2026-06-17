import { useEffect } from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import { secureStorage } from "../../utils/storage";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const init = async () => {
      const token = await secureStorage.getAccessToken();
      const role = await secureStorage.getUserRole();

      if (token && role === "ARTIST") {
        navigation.replace("ArtistStack");
        return;
      }

      if (token && role === "USER") {
        navigation.replace("CustomerStack");
        return;
      }

      setTimeout(() => navigation.replace("Onboarding1"), 500);
    };

    init();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/splash.png")}
          style={styles.splashImage}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
  },
  splashImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
