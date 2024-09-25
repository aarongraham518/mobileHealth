// src/components/BookingComponent.js
import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CustomButton } from "./CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../store/AppContext";

const BookingComponent = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const { addAppointment } = useContext(AppContext);

  const navigation = useNavigation();

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const handleBooking = () => {
    const appointment = {
      id: Math.random(),
      name: data.name,
      position: data.position,
      image: data.image,
      date: date.toDateString(),
      time: time.toTimeString().split(" ")[0],
      reviews: data.reviews,
    };

    addAppointment(appointment);
    Alert.alert(
      "Appointment Booked",
      `Date: ${appointment.date}\nTime: ${appointment.time}`
    );

    navigation.navigate("Appointments");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
      <Text style={styles.title}> with {data.name}</Text>
      <View style={styles.pickersContainer}>
        <View style={styles.picker}>
          <Button onPress={() => setShowDatePicker(true)} title="Select Date" />

          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />

          {/* <Text style={styles.text}>{date.toDateString()}</Text> */}
        </View>
        <View style={styles.picker}>
          <Button onPress={() => setShowTimePicker(true)} title="Select Time" />

          <DateTimePicker
            testID="timePicker"
            value={time}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
          {/* <Text style={styles.text}>{time.toTimeString().split(' ')[0]}</Text> */}
        </View>
      </View>
      <CustomButton onPress={handleBooking}>Book Appointment</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  pickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  picker: {
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default BookingComponent;
