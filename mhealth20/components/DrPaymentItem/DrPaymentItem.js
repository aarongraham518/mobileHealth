import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DrPaymentItem = ({ doctor }) => {
  return (
    <View style={styles.card}>
      <Image source={doctor.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.date}>{doctor.date}</Text>
      </View>
      <Text style={styles.price}>${doctor.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'gray',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DrPaymentItem;
