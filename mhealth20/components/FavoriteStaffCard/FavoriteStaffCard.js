import React, { useContext } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../../store/AppContext";
import { useNavigation } from '@react-navigation/native';

export const FavoriteStaffCard = ({data}) => {
  const { favorites, toggleFavorite } = useContext(AppContext);
  const isFavorited = favorites.some((fav) => fav.id === data.id);

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable  onPress={() => navigation.navigate("DocProfile", {
          image: data.image,
          data: data,
          testingValue: 'testing value'
        })}>
        <Image source={data.image} style={styles.imageSpec}/>
        </Pressable>      
      </View>
      <View style={styles.nameTitlePosContainer}>
        <View style={styles.nameHeartContainer}>
          <Text style={styles.staffNameText}>{data.name}</Text>
          <Pressable
            style={styles.favorites}
            onPress={() => toggleFavorite(data)}
          >
            <Ionicons
              name={isFavorited ? "heart" : "heart-outline"}
              // color={true ? "white" : "grey"}
              color={"#1862b7"}
              size={25}
            />
          </Pressable>
        </View>
        <View style={styles.positionHospitalContainer}>
          <Text style={styles.positionText}>{data.position}</Text>
          <Text style={styles.pipeSep}>|</Text>
          <Text>{data.hospital}</Text>
        </View>
        <View style={styles.starReviewsContainer}>
          <Ionicons
            name={"star"}
            color={"#1862b7"}
            size={20}
            style={styles.star}
          />
          <View style={styles.ratingReviewsContainer}>
            <Text style={styles.rating}>{data.rating}</Text>
            <Text>({data.reviews} Reviews)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#1862b7",
    borderWidth: 2,
    width: "100%",
    height: 130,
    borderRadius: 15,
    padding: 12,
    marginBottom: 15
  },
  imageContainer: {
    flex: 0.335,
    overflow: 'hidden'
  },
  imageSpec: {
    borderColor: "blue",
    borderRadius: 12,
    // borderWidth: 1,
    width: 110,
    height: 104
  },
  nameTitlePosContainer: {
    flex: 0.645,
    marginLeft: 15,
    paddingBottom: 10,
  },
  staffNameText: {
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 0.7,
  },
  nameHeartContainer: {
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 15,
  },
  positionHospitalContainer: {
    flexDirection: "row",
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
    marginBottom: 12,
  },
  positionText: {
    fontWeight: "500",
  },
  pipeSep: {
    marginRight: 8,
    marginLeft: 8,
  },
  starReviewsContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    flexDirection: "row",
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
  },
  star: {
    marginRight: 5,
  },
  rating: {
    marginRight: 6,
  },
  ratingReviewsContainer: {
    flexDirection: "row",
    paddingTop: 3,
  },
});
