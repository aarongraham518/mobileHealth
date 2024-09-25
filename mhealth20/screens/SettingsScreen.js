import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingOptions from "../components/SettingOptions/SettingOptions";

const dummy_settings = [
  {
    iconColor: "#fea772",
    backColor: "#f8efea",
    icon: "star",
    messageTxt: "Become a premium member.",
  },
  {
    iconColor: "#fea772",
    backColor: "#f8efea",
    icon: "language",
    messageTxt: "Language",
  },
  {
    iconColor: "#fea772",
    backColor: "#edebf6",
    icon: "call",
    messageTxt: "Invite a friend",
  },
  {
    iconColor: "#209f84",
    backColor: "#e0efec",
    icon: "cash",
    messageTxt: "Payment",
    route: "Payment"
  },
  {
    iconColor: "#a079ec",
    backColor: "#e0efec",
    icon: "help-circle",
    messageTxt: "Help",
  },
];
export const SettingsScreen = () => {

  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/myavatar.png")}
          />
        </View>
        <View style={styles.cameraContainer}>
          <Ionicons name="camera-outline" color="white" size={32} />
        </View>

        <View style={styles.userNameContainer}>
          <Text style={styles.userNameName}>Aaron Graham</Text>
          <Text style={styles.userNameSocial}>@grahamHealth</Text>
        </View>

        <SettingOptions data={dummy_settings} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
    // justifyContent: "center",
  },
  imageContainer: {
    borderColor: '#1862b7',
    borderWidth: 3,
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: "hidden",
    marginTop: 45
    // flex: 1,
  },
  image: {
    // flex: 1,
    // height: 100,
    width: 180,
    height: 180,
  },
  cameraContainer: {
    backgroundColor: '#1862b7',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    width: 50,
    height: 50,
    position: "relative",
    top: -20,
  },
  userNameContainer: {
    alignItems: "center",
    marginBottom: 30
  },
  userNameName: {
    color: '#1862b7',
    fontSize: 24,
    fontWeight: "bold",
  },
  userNameSocial: {
    color: '#1862b7',
    fontSize: 19,
    fontWeight: "bold",
  },
});
