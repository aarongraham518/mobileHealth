import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:3000/register", {
        username,
        password,
      });
      alert("User registered successfully");
      navigation.navigate("Login");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <>
    <SafeAreaView/>
    
    <View style={styles.container}>
    <Text style={styles.title1}>Mobile Health Beta</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/medicalRegistration.png")} style={styles.image} />
      </View>
      <Text style={styles.title2}>Register</Text>
      <Text style={styles.subtitle}>Please Register in order to continue.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpText}>Have an account? Sign In Here</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // borderColor: 'green',
    // borderWidth: 2
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E90FF',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#dbdbdb',
    height: 40,
    borderColor: '#1E90FF',
    borderWidth: 2,
    borderRadius: 18,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black'
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

export default RegisterScreen;
