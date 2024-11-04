import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const InicialScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');  
    }, 5000); 

    return () => clearTimeout(timer);  
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CHURNANALYTICS</Text>
      <Image
        source={require('../assets/bussineswoman.png')}  
        style={styles.image}
      />
      <Text style={styles.text}>
        Retenha hoje para crescer amanhã! Cuide de seus clientes.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',  
  },
  headerText: {
    position: 'absolute',
    top: 80,  
    right: 25,
    fontSize: 18,
    color: '#FFFFFF',  
    fontWeight: 'bold',
  },
  image: {
    width: 200,  
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#FFFFFF',  
  },
});

export default InicialScreen;
