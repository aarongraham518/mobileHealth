import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MedLocationDetails from "../components/MedLocationDetails/MedLocationDetails";
import { meds } from "../data/appData";

let mapData = [
  {
    latitude: 27.76757844065867,
    longitude: -82.63462421336362,
    pharmacyName: "CVS Pharmacy",
    address: "2175 Main St",
    miles: 5.2,
    time: "8 AM - 11PM",
    cost: '5.99'
  },
  {
    latitude: 27.75480468996914,
    longitude: -82.64110732487218,
    pharmacyName: "Walmart Pharmacy",
    address: "St Petersburg, 123 State st",
    miles: 3.2,
    time: "8 AM - 7PM",
    cost: '4.35'
  },
  {
    latitude: 27.75715042467095,
    longitude: -82.63028084852364,
    pharmacyName: "Unity Express Pharmacy",
    address: "St Petersburg, 32 State st",
    miles: 15.2,
    time: "8 AM - 9PM",
    cost: '5.00'
  },
  {
    latitude: 27.77012170753001,
    longitude: -82.63024891201522,
    pharmacyName: "Pop and Go Pharmacy",
    address: "St Petersburg, 123 State st",
    miles: 5.2,
    time: "8 AM - 11PM",
    cost: '2.99'
  },
  {
    latitude: 27.785035576059684,
    longitude: -82.64435979282699,
    pharmacyName: "Organic Pharmacy",
    address: "Clearwater, 123 State st",
    miles: 5.2,
    time: "8 AM - 11PM",
    cost: '4.09'
  },
];
export const MapScreen = ({route}) => {

  const pharmacyDetails = route.params.pharmDetails;

  return (
    <View style={styles.mainWrapper}>
      {/* <Search /> */}
      <MapView
        style={styles.container}
        region={{
          latitude: 27.76757844065867,
          longitude: -82.63462421336362,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {pharmacyDetails.map((pharmacy, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: pharmacy.latitude,
              longitude: pharmacy.longitude,
            }}
            title={pharmacy.pharmacyName}
            description={"In network pharmacy near you!"}
          />
        ))}
      </MapView>
      <View style={styles.whereToBuyWrap}>
        <ScrollView contentContainerStyle={styles.container} bounces={true}>
          {pharmacyDetails.map((data, index) => (
            <MedLocationDetails key={index} data={data} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
  },
  whereToBuyWrap: {
    flex: 0.5,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "relative",
    top: -40,
  },
});
