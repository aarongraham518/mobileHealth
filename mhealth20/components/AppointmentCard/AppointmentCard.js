import React, {useContext} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from '../../store/AppContext';

const image = require("../../assets/femaledoc3.png");
export const AppointmentCard = ({ data }) => {
  const {removeAppointment} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.nameImageContainer}>
        <View>
          <Text style={styles.drName}>{data.name}</Text>
          <Text style={styles.position}>{data.position}</Text>
          <Text style={styles.reviews}>{data.reviews} Reviews</Text>
        </View>
        <Image source={data.image} style={styles.imageSpecs}/>
      </View>

      <View style={styles.detailSpecs}>
        <View style={styles.detailSpecsIndi}>
        <Ionicons name={"calendar-outline"} color={"#1862b7"} size={20} />
          <Text style={styles.dateTimeConText}>{data.date}</Text>
        </View>
        <View style={styles.detailSpecsIndi}>
        <Ionicons name={"time-outline"} color={"#1862b7"} size={20} />
          <Text style={styles.dateTimeConText}>{data.time}</Text>
        </View>
        <View style={styles.detailSpecsIndi}>
        <Ionicons name={"checkmark-circle-outline"} color={"#1862b7"} size={20} />
          <Text style={styles.dateTimeConText}>confirmed</Text>
        </View>
      </View>

      <View style={styles.cancelRescheduleBtnContainer}>
        <Pressable style={styles.buttonSpecs} onPress={() => removeAppointment(data.id)}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>

        <Pressable style={[styles.buttonSpecs, styles.reschedule]}>
          <Text style={[styles.buttonText, styles.rescheduleText]}>Reschedule</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: '#1862b7',
    borderWidth: 2,
    width: "95%",
    // height: 130,
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
  },
  nameImageContainer:{
    
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: '#ede7e7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  drName:{
    fontSize: 20,
    fontWeight: '600'
  },
  position: {
    fontSize: 18,
    color: '#696363',
    fontWeight: '500',
    marginTop: 2
  },
  reviews:{
    fontSize: 14,
    color: '#3f3b3b',
    fontWeight: '500',
    marginTop: 6
  },
  imageSpecs:{
    width: 80,
    height: 80,
    borderRadius: 10,
    borderColor: '#1862b7',
    borderWidth: 2
  },
  detailSpecs:{
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10
  },
  detailSpecsIndi:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: "black",
    // borderWidth: 1,
  },
  dateTimeConText:{
    color: "#696363",
    paddingTop: 3,
    paddingLeft: 8
  },
  cancelRescheduleBtnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: "black",
    // borderWidth: 1,
    marginBottom: 10
  },
  buttonSpecs: {
    backgroundColor: "#cfe3fa",
    width: 150,
    marginTop: 15,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 2
  },
  cancelText: {
    color: 'black'
  },
  reschedule: {
    backgroundColor: "#1862b7",
  },
  rescheduleText: {
    color: 'white'
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
});
