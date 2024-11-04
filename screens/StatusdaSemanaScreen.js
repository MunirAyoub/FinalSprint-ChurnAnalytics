import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const StatusDaSemanaScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/statusdasemana.png')} 
        style={styles.image}
      />
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
    height: '85%',
  },
});

export default StatusDaSemanaScreen;
