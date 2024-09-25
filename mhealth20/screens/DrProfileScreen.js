import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MyModal from "../components/ui/MyModal";
import AiScreen from "./AiScreen";
import { Colors } from "../constants/styles";

//function to make call
const makeCall = (phoneNumber) => {
  let phoneUrl = `tel:${phoneNumber}`;

  Linking.canOpenURL(phoneUrl)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        return Linking.openURL(phoneUrl);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

const DoctorProfileScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();

  const { data } = route.params;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.gradient}>
          <View style={styles.card}>
            <View style={styles.imageCommContainer}>
              <Image source={data.image} style={styles.image} />
              <View style={styles.commContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.position}>{data.position}</Text>
                <Text style={styles.hospital}>United States Hospital</Text>
                <View style={styles.iconsContainer}>
                  <View style={styles.commBackGrnd}>
                    <TouchableOpacity onPress={() => makeCall(data.number)}>
                      <Ionicons
                        name="phone-portrait-outline"
                        size={30}
                        color="#1862b7"
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={openModal}
                    style={styles.commBackGrnd}
                  >
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={32}
                      color="#f29f0f"
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.commBackGrnd}>
                    <Ionicons
                      name="videocam-outline"
                      size={32}
                      color="red"
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Patients</Text>
                  <Text style={styles.statValue}>500+</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Experience</Text>
                  <Text style={styles.statValue}>4 years</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Rate</Text>
                  <Text style={styles.statValue}>5.0/5</Text>
                </View>
              </View>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum blandit scelerisque felis, pellentesque neque risus,
                nascetur pretium. Blandit risus purus, ut ligula tristique sed
                nullam.
              </Text>
            </View>
            {/* <MyModal/> */}
          </View>

          <MyModal data={data} />
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.chatWindow}>
              <Text style={styles.chatText}>Chatting with: {data.name}</Text>
              <AiScreen/>
            </View>

            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>End Session with {data.name}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e5e5",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f2f1f1",
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
    width: "95%",
    alignItems: "center",
    elevation: 5,
  },
  imageCommContainer: {
    // borderColor: 'white',
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: 150,
    height: 165,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  position: {
    fontSize: 18,
    color: "#aaaaaa",
    marginBottom: 10,
  },
  hospital: {
    fontSize: 16,
    color: "#aaaaaa",
    marginBottom: 15,
  },
  commBackGrnd: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e5e5",
    borderRadius: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1862b7",
  },
  statLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#aaaaaa",
    marginBottom: 3,
  },
  description: {
    textAlign: "left",
    color: "#555555",
    lineHeight: 25,
    fontSize: 18,
  },
  appointmentBtnContainer: {
    marginTop: 190,
    width: "96%",
  },
  chatContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 22,
    borderColor: "red",
  },
  chatButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderWidth: 3,
    borderColor: "#007bff",
    borderRadius: 40,
    margin: 10
  },
  header: {
    height: 60,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "#007bff",
  },
  closeButton: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  chatWindow: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 15
  },
  chatText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.primaryBlue100,
    fontWeight: '500',
    paddingBottom: 5
  },
});

export default DoctorProfileScreen;
