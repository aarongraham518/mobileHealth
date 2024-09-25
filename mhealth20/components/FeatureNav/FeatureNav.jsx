import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const FeatureNav = ({ featureText }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.featureText}>{featureText}</Text>
      <Pressable onPress={() => navigation.navigate("DocScreen")}>
        <Text style={styles.seeAll}>See All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'black',
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    paddingHorizontal: 3,
  },
  featureText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  seeAll: {
    color: "#1862b7",
    fontWeight: "bold",
    fontSize: 20,
  },
});
