import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FavoriteStaffCard } from "../components/FavoriteStaffCard/FavoriteStaffCard.js";
import { Header } from "../components/Header/Header.jsx";
import { AppContext } from "../store/AppContext.js";

export const FavoriteDrScreen = () => {
  const { favorites } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={true}>
        {favorites.length === 0 ? (
          <Text style={styles.noDataText}>No favorite Dr's at this time</Text>
        ) : (
          favorites.map((data) => (
            <FavoriteStaffCard key={data.id} data={data} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: "white",
  },
  scrollContainer: {
    // flex: 1,
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 5,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
});
