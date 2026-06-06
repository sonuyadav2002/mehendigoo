import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    id: "1",
    title: "Bridal Mehendi",
    image: require("../../assets/images/o1.png"),
  },
  {
    id: "2",
    title: "Engagement Mehendi",
    image: require("../../assets/images/o3.png"),
  },
  {
    id: "3",
    title: "Arabic Mehendi",
    image: require("../../assets/images/o1.png"),
  },
  {
    id: "4",
    title: "Traditional Mehendi",
    image: require("../../assets/images/o1.png"),
  },
  {
    id: "5",
    title: "Party Mehendi",
    image: require("../../assets/images/o1.png"),
  },
  {
    id: "6",
    title: "Festival Mehendi",
    image: require("../../assets/images/o3.png"),
  },
  {
    id: "7",
    title: "Portrait Mehendi",
    image: require("../../assets/images/o1.png"),
  },
  {
    id: "8",
    title: "Kids Mehendi",
    image: require("../../assets/images/o3.png"),
  },
];

export default function CategoriesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("ArtistListing", {
          category: item.title,
        })
      }
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />

      <View style={styles.cardFooter}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Categories</Text>

      <Text style={styles.subHeader}>Choose your Mehendi style</Text>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },

  subHeader: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
    marginBottom: 25,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  image: {
    width: "100%",
    height: 140,
  },

  cardFooter: {
    padding: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
  },
});
