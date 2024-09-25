import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Header } from "../components/Header/Header";
import { NotificationCard } from "../components/NotificationCard/NotificationCard";

const appData = [
  {
    id: Math.random(),
    appointmentHeader: "Appointment Cancelled!",
    day: "Today",
    time: "09:00",
    dayNight: "AM",
    new: true,
    message: `You have successfully booked an appointment with Dr. Beckett on Dec 24th, 2024 at 10:15am. Don't forget to activate your reminder.`,
    icon: "calendar",
  },
  {
    id: Math.random(),
    appointmentHeader: "Appointment Success!",
    day: "19 Jun, 2024",
    time: "09:30",
    dayNight: "AM",
    new: true,
    message: `You successfully booked an appointment with Dr. Roger Davinson on 19 June 19, 2024. Don't forget to activate your reminders.`,
    icon: "calendar",
  },
  {
    id: Math.random(),
    appointmentHeader: "Schedule Changed!",
    day: "Yesterday",
    time: "09:30",
    dayNight: "AM",
    new: true,
    message: `Your appointment with Dr. Smerka has been changed to  on Dec 24th, 2024 at 10:15am. Don't forget to activate your reminder.`,
    icon: "calendar",
  },
  {
    id: Math.random(),
    appointmentHeader: "Credit Card Connected!",
    day: "Yesterday",
    time: "09:35",
    dayNight: "AM",
    new: true,
    message: `Your credit card ending in 4231 has been successfully added to mhealth at 10:15am. Don't forget to activate your reminder.`,
    icon: "calendar",
  },
];
export const NotificationsScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
     
      <ScrollView contentContainerStyle={styles.container} bounces={true}>
        {appData.map((data) => (
          <NotificationCard key={data.id} data={data} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    paddingHorizontal: 5
  },
  screenContainer: {
    flex: 1,
    width: "94%",
    backgroundColor: 'white',
    margin: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 40
  },
  container: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
