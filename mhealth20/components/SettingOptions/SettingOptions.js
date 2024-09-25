import { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
// import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SettingOptions({ data }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  const goToPayment = () => navigation.navigate("Payment");

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.icon, { backgroundColor: "#edebf6" }]}>
          <Ionicons name="notifications" size={24} color="#a079ec" />
        </View>

        <View style={styles.middleTextContainer}>
          <Text style={styles.middleText}>Notifications</Text>
        </View>

        <View style={styles.switchContainer}>
          {isEnabled ? (
            <Text style={styles.onOffText}>ON</Text>
          ) : (
            <Text style={styles.onOffText}>OFF</Text>
          )}
          <Switch
            trackColor={{ false: "#dddddd", true: "#209f84" }}
            thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#dddddd"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View>
          <Ionicons name="arrow-redo" size={24} color="#1862b7" />
        </View>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.notificationContainer}>
          {/* {Note: just here for showcase} */}
          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentScreen")}
            style={[styles.icon, { backgroundColor: item.backColor }]}
          >
            <Ionicons name={item.icon} size={24} color={item.iconColor} />
          </TouchableOpacity>

          <View style={styles.middleTextContainer}>
            <Text style={styles.middleText}>{item.messageTxt}</Text>
          </View>

          <View>
            <Ionicons name="arrow-redo" size={24} color="#1862b7" />
          </View>
        </View>
      ))}
    </>
  );
}

export default SettingOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  middleTextContainer: {
    flexGrow: 1,
  },
  middleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1862b7",
  },
  onOffText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginRight: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
