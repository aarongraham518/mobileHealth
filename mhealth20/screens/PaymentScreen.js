import React from 'react';
import { View, Text,FlatList, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import DrPaymentItem from '../components/DrPaymentItem/DrPaymentItem';
import CreditCard from '../components/CreditCard/CreditCard';

const doctors = [
  {
    id: '1',
    name: 'Dr. PapinDrea Rein',
    date: '28 Sep 2020',
    price: '49',
    image: require("../assets/femaledoc3.png"),
  },
  {
    id: '2',
    name: 'Dr. Nathaniel Valle',
    date: '11 Aug 2020',
    price: '119',
    image: require("../assets/maledoc1.png"), 
  },
  {
    id: '3',
    name: 'Dr. Beckett Calger',
    date: '11 Aug 2020',
    price: '60',
    image: require("../assets/femaledoc1.png"), 
  },
  {
    id: '4',
    name: 'Dr. Jake Volum',
    date: '11 Aug 2020',
    price: '60',
    image: require("../assets/femaledoc2.png"), 
  }
];

const cardData = {
    balance: '2566.54',
    last4: '1286',
    validThru: '08/22',
    cvv: '123',
    backgroundImage: 'https://via.placeholder.com/300x180', 
  };
  

export default function PaymentScreen() {
  return (
    <SafeAreaView style={styles.container}>
         <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CreditCard card={cardData} />
        <View style={styles.addCardContainer}>
          <Text style={styles.addCardText}>+ Add new card</Text>
        </View>
      </ScrollView>

    <View style={styles.paymentItemContainer}>
    <FlatList
        data={doctors}
        renderItem={({ item }) => <DrPaymentItem doctor={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  list: {
    paddingVertical: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  addCardContainer: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addCardText: {
    fontSize: 16,
    color: '#888',
  },
  paymentItemContainer:{
    paddingHorizontal: 18
  }
});
