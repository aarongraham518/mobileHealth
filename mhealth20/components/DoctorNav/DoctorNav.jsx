import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IndiCon } from "../Individualcon/IndiCon";
import { useNavigation } from "@react-navigation/native";

const appData = [
  {
    name: "people",
    specialty: "General",
    url: "GeneralNews",
  },
  {
    name: "eye",
    specialty: "Ophth...",
  },
  {
    name: "nutrition",
    specialty: "Nutrition",
  },
  {
    name: "logo-electron",
    specialty: "Neuro.",
  },
  {
    name: "happy-outline",
    specialty: "Pediatric",
  },
  {
    name: "radio",
    specialty: "Radio...",
  },
  {
    name: "happy",
    specialty: "Dental",
  },
  {
    name: "ellipsis-horizontal-circle-sharp",
    specialty: "More",
  },
];
export const DoctorNav = () => {
  // console.log(appData[1].name, "<--appdata");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {appData.map((data, index) => (
        <TouchableOpacity
          style={styles.navContainer}
          key={index}
          onPress={() => navigation.navigate(`${appData[index].url}`)}
        >
          <IndiCon name={data.name} color={"#2786f2"} size={28} />
          <Text style={styles.specialtyText}>{data.specialty}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20",
    justifyContent: "space-between",
    marginTop: 26,
    marginBottom: 10,
  },
  navContainer: {

  },
  specialtyText: {
    marginTop: 15,
    fontWeight: "500",
    fontSize: 16,
  },
});
