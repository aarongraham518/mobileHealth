import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import {useNavigation} from '@react-navigation/native';

const Medications = (props) => {

  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MedDetailsScreen", {
      medId: props.id,
    });
  }

  return (
    <Pressable style={styles.container} onPress={() => pressHandler(props.id) }>
      <Text style={styles.name}>{props.name}</Text>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.imageSpec} />
      </View>
    </Pressable>
  );
};

export default Medications;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
        borderBottomColor: '#d5d2d2',
        borderBottomWidth: 1,
        paddingBottom: 10,
        alignItems: 'center'
    },
    name: {
        fontSize: 22,
        fontWeight: '500',
    },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#1862b7',
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center'
 
  },
  imageSpec: {
    width: 50,
    height: 50,
    // borderWidth: 2,
    // borderColor: '#1862b7',
    
    // position: 'relative',
    // top: -45,    
    // width: "auto",
    // marginTop: 20,
  },
});
