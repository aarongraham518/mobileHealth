import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";

const doctorsData = [
  {
    id: Math.random(),
    name: "Dr. PapinDrea Rein",
    position: "Radiologist",
    hospital: "Scotia Hospital",
    rating: 1.0,
    reviews: "16,532",
    image: require("../assets/femaledoc1.png"),
    number: "5182758237",
    gender: "Female",
    latitude: 28.021,
    longitude: -82.774,
    // interest: ['flying,', 'lego']
  },
  {
    id: Math.random(),
    name: "Dr. Nathaniel Valle",
    position: "Heart Surgeon",
    hospital: "B & B Hospital",
    rating: 4.5,
    reviews: "4,532",
    image: require("../assets/maledoc1.png"),
    number: "5182758237",
    gender: "Male",
    latitude: 28.0195,
    longitude: -82.772,
  },
  {
    id: Math.random(),
    name: "Dr. Beckett Calger",
    position: "Cardiologist",
    hospital: "NYC Hospital",
    rating: 5.0,
    reviews: "4,532",
    image: require("../assets/femaledoc2.png"),
    number: "5182758237",
    gender: "Female",
    latitude: 28.018,
    longitude: -82.775,
  },
  {
    id: Math.random(),
    name: "Dr. Jake Volum",
    position: "Radiologist",
    hospital: "S & S Hospital",
    rating: 3.5,
    reviews: "10,532",
    image: require("../assets/maledoc4.png"),
    number: "5182758237",
    gender: "Male",
    latitude: 28.02,
    longitude: -82.776,
  },
  {
    id: Math.random(),
    name: "Dr. Kaitlyn Browne",
    position: "Pediatrician",
    hospital: "Children's Health Center",
    rating: 3.0,
    reviews: "8,214",
    image: require("../assets/femaledoc3.png"),
    number: "5182758237",
    gender: "Female",
    latitude: 28.022,
    longitude: -82.7735,
  },
];

export default function MapScreen() {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      (selectedRating === "" || doctor.rating >= parseFloat(selectedRating)) &&
      (selectedPosition === "" || doctor.position === selectedPosition) &&
      (selectedGender === "" || doctor.gender === selectedGender)
    );
  });

  const handleDoctorPress = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 28.0198,
          longitude: -82.7731,
          latitudeDelta: 0.01, // Adjusted for closer zoom
          longitudeDelta: 0.01,
        }}
      >
        {filteredDoctors.map((doctor) => (
          <Marker
            key={doctor.id}
            coordinate={{
              latitude: doctor.latitude,
              longitude: doctor.longitude,
            }}
            onPress={() => handleDoctorPress(doctor)}
          >
            <Image source={doctor.image} style={styles.imageSpec} />
          </Marker>
        ))}
      </MapView>

      <View style={styles.filterContainer}>
        <Picker
          selectedValue={selectedRating}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedRating(itemValue)}
        >
          <Picker.Item label="Rating" value="" />
          <Picker.Item label="1.0" value="1.0" />
          <Picker.Item label="1.5" value="1.5" />
          <Picker.Item label="2.0" value="2.0" />
          <Picker.Item label="2.5" value="2.5" />
          <Picker.Item label="3.0" value="3.0" />
          <Picker.Item label="3.5" value="3.5" />
          <Picker.Item label="4.0" value="4.0" />
          <Picker.Item label="4.5" value="4.5" />
          <Picker.Item label="5.0" value="5.0" />
        </Picker>

        <Picker
          selectedValue={selectedPosition}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedPosition(itemValue)}
        >
          <Picker.Item label="Position" value="" />
          <Picker.Item label="Radiologist" value="Radiologist" />
          <Picker.Item label="Heart Surgeon" value="Heart Surgeon" />
          <Picker.Item label="Cardiologist" value="Cardiologist" />
          <Picker.Item label="Pediatrician" value="Pediatrician" />
        </Picker>

        <Picker
          selectedValue={selectedGender}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedGender(itemValue)}
        >
          <Picker.Item label="Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      </View>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          {selectedDoctor && (
            <>
              <Text style={styles.modalTitle}>{selectedDoctor.name}</Text>
              <Text>Position: {selectedDoctor.position}</Text>
              <Text>Hospital: {selectedDoctor.hospital}</Text>
              <Text>Rating: {selectedDoctor.rating}</Text>
              <Text>Reviews: {selectedDoctor.reviews}</Text>
              <Text>Gender: {selectedDoctor.gender}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 100,
    backgroundColor: "#fefefe",
    // borderColor: 'red',
    // borderWidth: 4,
    height: 225,
  },
  picker: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    color: "blue",
  },
  imageSpec: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#0363d0",
  },
});
