import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StarFeature } from '../FavoriteStaffCard/StarFeature';

const image = require("../../assets/maledoc3.png");

const TopDoctorCard = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={props.image} style={styles.imageSpec}/>
        </View>
       
        <Text style={styles.drName}>{props.name}</Text>
        <Text style={styles.drPosition}>{props.position}</Text>
        <View>
        <StarFeature/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#1862b7',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        marginTop: 20,
        borderRadius: 25,
    },
    imageContainer:{
        width: 63,
        height: 64,
        borderRadius: 15,
        borderColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -20
    },
    imageSpec: {
        width: 60,
        height: 60,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 4
    },
    drName:{
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: .5,
    },
    drPosition:{
        color: 'grey',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: .5,
        marginTop: 8,
        marginBottom: 10
    }
})
export default TopDoctorCard