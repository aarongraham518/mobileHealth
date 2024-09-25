import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/styles';

const LoginScreen = () => {
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
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error, '<--our error');
      alert('Error logging in');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
      <Button style={{color: Colors.primaryBlue100}} title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.regBtn}>Register</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  input: {
    height: 40,
    backgroundColor: '#e8ecef',
    borderColor: 'gray',
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  btnCtr:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  regBtn:{
    color: '#0690ec',
    fontSize: 18
  }
});

export default LoginScreen;
