import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MedLocationDetails ({data}){
  return (
    <View style={styles.container}>       
      <View>
        <Text style={styles.pharmacyName}>{data.pharmacyName}</Text>
        <Text style={styles.pharmacyAddress}>{data.address}</Text>
        <View style={styles.timeOpenWrap}>
            <Text style={styles.pharmacyTime}>{data.time}</Text>
            <View style={styles.pharmacyOpenStatusContainer}>
                <Text style={styles.pharmacyOpenStatus}>Open</Text>
            </View>
        </View>
      </View>
      <View style={styles.pharmacyDistanceCostWrap}>
        <Text style={styles.pharmacyDistance}>{data.miles}mi</Text>
        <Text style={styles.pharmacyCost}>${data.cost}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 20

  },
  pharmacyName: {
    color: '#1862b7',
    fontWeight: 'bold',
    fontSize: 16
  },
  pharmacyAddress: {
    color: 'grey',
    marginTop: 10,
    fontSize: 14
  },
  pharmacyTime: {
    color: 'grey',
    marginTop: 7,
    fontSize: 14
  },
  timeOpenWrap: {
    flexDirection: 'row',
    marginTop: 8
  },
  pharmacyOpenStatusContainer: {
    backgroundColor: '#42b83e',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 15,
    position: 'relative',
    top: 5
  },
  pharmacyOpenStatus:{
    color: '#ffffff',
    fontWeight: 'bold',
  },
  pharmacyDistanceCostWrap: {
    // justifyContent: 'flex-end'
  },
  pharmacyDistance: {
    color: 'grey',
    fontSize: 20,
    textAlign: 'right'
  },
  pharmacyCost: {
    marginTop: 10,
    fontSize: 23,
    textAlign: 'right'
  }
});
