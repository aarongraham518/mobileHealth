import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components/Header/Header";
import { meds } from "../data/appData";
import {useNavigation} from '@react-navigation/native';

const image = require("../assets/pills.png");

export const MedDetailScreen = (props) => {
  const navigation = useNavigation();

  function pressHandler(pharmDetails) {
    navigation.navigate("MapScreen", {
      pharmDetails: pharmDetails,
    });
  }
   const medId = props.route.params.medId;

   const medDetails = meds.filter((medItem) => medItem.id == medId);
   console.log(medDetails);

  return (
    <View style={styles.container}>       
      <View style={styles.screenContainer}>
        <Header />
        <View style={styles.medNameContainer}>
            <Text style={styles.medNameText}>{medDetails[0].name}</Text>
            <Text style={styles.medCrafter}>Medical Distributor</Text>
        </View>

        <View style={styles.imageContainer}>
        {/* <Image source={image} style={styles.imageSpec}/> */}
        <Image source={medDetails[0].imageBig} style={styles.imageSpec}/>
        </View>
        

        <View style={styles.calendarCourseWrap}>
          <Ionicons name={"calendar-outline"} color={"#1862b7"} size={34} />
          <View style={styles.courseDirectionWrap}>
            <View style={styles.courseDurationWrap}>
              <Text style={styles.courseText}>Course:</Text>
              <Text>{medDetails[0].course}</Text>
            </View>
            <Text style={styles.directionText}>{medDetails[0].timesPerDay}</Text>
          </View>
        </View>

        <View style={styles.calendarCourseWrap}>
        
          <Ionicons name={"water-outline"} color={"#1862b7"} size={34} />
          <View style={styles.courseDirectionWrap}>
            <View style={styles.courseDurationWrap}>
              <Text style={styles.direction1}>Take with water.</Text>
            </View>
            <Text style={styles.direction2}>No juice, no alcohol.</Text>
          </View>
        </View>
        <View style={styles.descriptionTextIconWrap}>
          <Ionicons name={"document-text-outline"} color={"#1862b7"} size={34} />
        <View style={styles.descriptionAndSubWrap}>
            <Text style={styles.descriptionText}>Description</Text>
            <Text style={styles.descriptionSubText}>{medDetails[0].description}</Text>
            {/* <Text style={styles.descriptionSubText}> It is also used to relieve mild to moderate pain, including menstrual pain (pain that happens before or during a menstrual period) </Text> */}
        </View>
        </View>
      </View>

      <Pressable style={[styles.buttonSpecs, styles.reschedule]} onPress={() => pressHandler(medDetails[0].whereToBuy)}>
          <Text style={[styles.buttonText, styles.rescheduleText]}>Where to Buy</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  medNameContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: 15
  },   
  medNameText: {
    fontSize: 30,
    
  },
  medCrafter: {
    color: '#1862b7',
    fontWeight: 'bold',
    marginTop: 5
  },
  imageContainer:{
    borderWidth: 1,
    borderColor: '#1862b7',
    height: 225,
    overflow: 'hidden',
    marginTop: 20
  },
  imageSpec:{
    // borderWidth: 1,
    // borderColor: '#1862b7',
    position: 'relative',
    top: -25,
    width: '100%',
    marginTop: 20
  },
  calendarCourseWrap: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#e7e7e7",
    paddingBottom: 15,
    marginTop: 20,
  },
  courseDurationWrap: {
    flexDirection: "row",
  },
  courseDirectionWrap: {
    marginLeft: 15,
  },
  courseText: {
    fontWeight: "bold",
    marginRight: 4,
  },
  directionText: {
    marginTop: 5,
    fontSize: 15,
  },
  direction1: {
    fontSize: 15,
  },
  direction2: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 4,
  },
  descriptionTextIconWrap: {
    flexDirection: 'row',
    paddingRight: 30,
    marginTop: 10
  },
  descriptionText:{
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  descriptionSubText: {
    marginBottom: 15
  },
  descriptionAndSubWrap: {
    paddingLeft: 12,
    marginTop: 5
    // borderWidth: 1
  },
  buttonSpecs: {
    backgroundColor: "#1862b7",
    width: 300,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 2,
    marginBottom: 10,
    position: 'relative',
    top: -35
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
});
