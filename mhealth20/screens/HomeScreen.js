import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { DoctorNav } from "../components/DoctorNav/DoctorNav";
import { FeatureNav } from "../components/FeatureNav/FeatureNav";
import { Header } from "../components/Header/Header";
import { Promo } from "../components/Promo/Promo";
import TopDoctorCard from "../components/TopDoctorCard/TopDoctorCard";

let promoImage = require("../assets/mhealthpromo.png");
const image1 = require("../assets/maledoc3.png");
const image2 = require("../assets/femaledoc1.png");

export const HomeScreen = () => {
  return (
    <View style={styles.mainWrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.screenContainer}>
          <Header />
          <Promo promoImage={promoImage} promoText="Medical Checks!" />
          <FeatureNav featureText="Doctor Speciality" />
          <DoctorNav />
          <FeatureNav featureText="Top Doctors" />
          <View style={styles.topDrContainer}>
            <TopDoctorCard image={image1} name={'Dr. Tim Brown'} position={'Cardiologist'}/>
            <TopDoctorCard image={image2} name={'Dr. Janit Smilo'} position={'Neurologist'}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper:{
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    // backgroundColor: "#e8e4e4",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainer: {
    flex: 1,
    width: "94%",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  topDrContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
});
