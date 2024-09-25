import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const image = require("../../assets/myavatar.png");

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageNameContainer}>
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Image source={image} style={styles.imageSpec} />
        </Pressable>

        <View style={styles.greetingNameContainer}>
          <Text style={styles.greetText}>Good Morning</Text>
          <Text style={styles.nameText}>Aaron Graham</Text>
        </View>
      </View>
      <View style={styles.notificationFavContainer}>
        <Pressable
          style={styles.notificationIcon}
          onPress={() => navigation.navigate("NotificationsScreen")}
        >
          <Ionicons
            name={"notifications-outline"}
            color={"#1862b7"}
            size={34}
          />
        </Pressable>
        <Pressable
          style={styles.iconContainer}
          onPress={() => navigation.navigate("FavoriteDrScreen")}
        >
          <Ionicons name={"heart-outline"} color={"#1862b7"} size={34} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 54,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageNameContainer: {
    flexDirection: "row",
  },
  greetText: {
    color: "grey",
    fontSize: 20,
  },
  nameText: {
    fontWeight: "600",
    fontSize: 22,
    marginTop: 5,
  },
  imageSpec: {
    width: 60,
    height: 60,
    borderColor: "#1862b7",
    borderWidth: 2,
    borderRadius: 30,
    marginRight: 16,
  },
  notificationFavContainer: {
    // borderWidth: 1,
    flexDirection: "row",
  },
  notificationIcon: {
    marginRight: 14,
  },
});
