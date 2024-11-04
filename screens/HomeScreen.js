import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/home.png')} 
        style={styles.image}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AboutUs')}
      >
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '85%',
    height: '70%',
    marginBottom: 20, 
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#D3D3D3', 
    backgroundColor: '#6495ED', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
  },
});

export default HomeScreen;
