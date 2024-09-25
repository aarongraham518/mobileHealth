import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const NotificationCard = ({ data }) => {
  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.iconAppointmentHeaderStatus}> */}

        <Pressable style={styles.iconContainer}>
          <Ionicons name={"calendar"} color={"#2878ff"} size={25} />
        </Pressable>

        <View style={styles.apptHeaderNewContainer}>
          <View style={styles.appointmentTimeContainer}>
            <Text style={styles.appointmentHeader}>
              {data.appointmentHeader}
            </Text>
            <View style={styles.dayTimeContainer}>
              <Text style={styles.day}>{data.day}</Text>
              <Text style={styles.separatorPipe}>|</Text>
              <Text style={styles.time}>{data.time}</Text>
              <Text style={styles.nightDay}>{data.dayNight}</Text>
            </View>
          </View>

          <View style={styles.newContainer}>
            <Text style={styles.newText}>New</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.appMessage}>{data.message}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "purple",
    padding: 7,
    backgroundColor: "white",
    marginBottom: 5,
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
  },
  apptHeaderNewContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  iconAppointmentHeaderStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: 'flex-start',
    marginBottom: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#ddddf3",
    marginRight: 10,
    alignContent: "flex-start",
  },

  appointmentHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dayTimeContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  day: {
    color: "#373636",
  },
  separatorPipe: {
    color: "#373636",
    marginLeft: 5,
    marginRight: 5,
  },
  time: {
    color: "#373636",
  },
  nightDay: {
    color: "#373636",
    marginLeft: 5,
  },
  newContainer: {
    backgroundColor: "#2878ff",
    height: 30,
    width: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  newText: {
    color: "white",
    fontWeight: "bold",
  },
  appMessage: {
    fontSize: 16,
    lineHeight: 22,
    color: "#373636",
    paddingHorizontal: 7,
    marginBottom: 20,
  },
});
