import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components/Header/Header";
import Medications from "../components/Medication/Medications";
import { meds } from "../data/appData";
const image = require("../assets/pills.png");

export const MedSearchScreen = () => {
  const [medData, setMedData] = useState(meds);
  const [search, setSearch] = useState("");

  const onChangeInput = (val) => {
    setSearch(val);
  };

  const filteredData = medData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Header />
        {/* <View style={styles.medNameContainer}>
            <Text style={styles.medNameText}>Welcome to Drug Dictionary</Text>
            <Text style={styles.medCrafter}>2.0</Text>
        </View> */}
        <TextInput
          style={styles.input}
          placeholder="Search Meds, touch meds for more details"
          value={search}
          onChangeText={(val) => setSearch(val)}
          // keyboardType="numeric"
        />

        {/* <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageSpec}/>
        </View> */}

        <View>
          <ScrollView>
            {filteredData.map((data) => (
              <Medications
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.image}
              />
            ))}
          </ScrollView>
        </View>
      </View>
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
  input: {
    height: 40,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    color: "black",
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: "#1862b7",
    fontSize: 20,
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
    marginTop: 15,
  },
  medNameText: {
    fontSize: 30,
  },
  medCrafter: {
    color: "#1862b7",
    fontWeight: "bold",
    marginTop: 5,
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: '#1862b7',
    height: 225,
    overflow: "hidden",
    marginTop: 20,
  },
  imageSpec: {
    position: "relative",
    top: -75,
    width: "100%",
    marginTop: 20,
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
    flexDirection: "row",
    paddingRight: 30,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  descriptionSubText: {
    marginBottom: 15,
  },
  descriptionAndSubWrap: {
    paddingLeft: 12,
    marginTop: 5,
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
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
  },
});
