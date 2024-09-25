// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/styles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const handleLogin = async () => {
    
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      // alert('Login successful');
      navigation.navigate('TabDirectHome');
    } catch (error) {
      console.log(error, '<--our error');
      alert('Error logging in');
    }
  };

  return (
    <>
    <SafeAreaView/>
    
    <View style={styles.container}>
    <Text style={styles.title1}>Mobile Health Beta</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/medicalLogin.png")} style={styles.image} />
      </View>
      <Text style={styles.title2}>Login</Text>
      <Text style={styles.subtitle}>Please Sign in to continue.</Text>
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
      <View style={styles.rememberMeContainer}>
        <Text style={styles.rememberMeText}>Remember me next time</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

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
