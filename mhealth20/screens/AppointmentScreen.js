import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AppointmentCard } from "../components/AppointmentCard/AppointmentCard";
import { Header } from "../components/Header/Header";
import { NotificationCard } from "../components/NotificationCard/NotificationCard";
import { AppContext } from "../store/AppContext";

const appData = [
  {
    id: Math.random(),
    name: "Dr. Meg Grace",
    day: "Mon, Feb 02",
    time: "09:00 AM",
    position: "Ortho",
    confirmed: "confirmed",
    reviews: 1400,
    image: require("../assets/femaledoc1.png"),
  },
  {
    id: Math.random(),
    name: "Dr. Julia Thompson",
    day: "Mon, Jan 22",
    time: "09:30 AM",
    position: "Onocology",
    confirmed: "confirmed",
    reviews: 1200,
    image: require("../assets/femaledoc2.png"),
  },
  {
    id: Math.random(),
    name: "Dr. Candice Parker",
    day: "Mon, Mar 21",
    time: "09:45 AM",
    position: "Dentist",
    reviews: 3230,
    confirmed: "confirmed",
    image: require("../assets/femaledoc3.png"),
  },
];

export const AppointmentScreen = ({ navigation }) => {
  const { appointments } = useContext(AppContext);
  console.log(appointments, "<--global appointment data");
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <ScrollView contentContainerStyle={styles.container} bounces={true}>
        {appointments.length === 0 ? (
          <Text style={styles.noDataText}>No appointments at this time</Text>
        ) : (
          appointments.map((data) => (
            <AppointmentCard key={data.id} data={data} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
  },
  screenContainer: {
    flex: 1,
    width: "94%",
    backgroundColor: "white",
    margin: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 40,
  },
  container: {
    marginTop: 10,
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
