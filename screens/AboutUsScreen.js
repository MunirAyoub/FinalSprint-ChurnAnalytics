import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AboutUsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CHURNANALYTICS</Text>
      <Image 
        source={require('../assets/man.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Cuidamos de você. Somos orientados para a retenção de clientes.
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#6495ED', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#FFFFFF', 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
    textAlign: 'center', 
  },
  image: {
    width: '100%',
    height: 300, 
    resizeMode: 'contain', 
    marginBottom: 20, 
  },
  description: {
    color: '#FFFFFF', 
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20, 
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#D3D3D3', 
    backgroundColor: '#FFFFFF', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#6495ED', 
    fontSize: 16,
  },
});

export default AboutUsScreen;
