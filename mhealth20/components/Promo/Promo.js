import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Promo = ({promoImage, background, promoText, promoSubText}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, {borderColor: background}]} onPress={() => navigation.navigate("MedicalChecks")}>
      <ImageBackground
        source={promoImage}
        resizeMode="cover"
        style={styles.promoContainer}
      >
        <View style={styles.promoTextContainer}>
          <Text style={[styles.promoText]}>{promoText}</Text>
          <Text style={[styles.promoTextSmall]}>Check your health condition regularly to
          minimize the incidence of disease in the future.
          </Text>
        </View>
       <Pressable style={styles.buttonSpecs}>
        <Text style={styles.buttonText}>Check Now</Text>
       </Pressable>
      
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "white",
    height: 200,
    marginTop: 20,
    overflow: "hidden",
  },
  promoContainer: {
    height: 200,
  },
  promoTextContainer: {
    paddingLeft: 14,
    marginTop: 35,
  },
  buttonSpecs:{
    backgroundColor: 'white',
    width: 132,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#1862b7',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
  promoSubTextContainer:{
    paddingLeft: 8,
    marginTop: 25,
  },  
  promoText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  }, 
  promoOffText: {
    fontSize: 18,
    marginTop: 18,
    color: 'white',
    fontWeight: 'bold',
    // borderColor: 'white',
    // borderWidth: 1
  },
  promoTextSmall: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    // borderColor: 'white',
    // borderWidth: 1,
    width: '64%',
    marginTop: 10
  },
  premiumContainer:{
    backgroundColor: 'tomato',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginTop: 10
  },
  premiumText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
