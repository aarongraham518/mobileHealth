import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StarFeature = () => {
  //add mapping for dynamic stars based on data
  //static and duplicated for now.
  return (
    <View style={styles.container}>
      <Ionicons name={"star"} color={"#f5db93"} size={18} style={styles.star} />
      <Ionicons name={"star"} color={"#f5db93"} size={18} style={styles.star} />
      <Ionicons name={"star"} color={"#f5db93"} size={18} style={styles.star} />
      <Ionicons name={"star"} color={"#f5db93"} size={18} style={styles.star} />
      <Ionicons name={"star"} color={"#f5db93"} size={18} style={styles.star} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20
    }
})