import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
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
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.btnCtr}>        
        <Button title="Register" onPress={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.logBtn}>Login</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  btnCtr:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logBtn:{
    color: '#0690ec',
    fontSize: 18
  }
});

export default RegisterScreen;
