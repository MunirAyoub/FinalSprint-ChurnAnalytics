import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewCompaniesScreen = ({ navigation }) => { // Certifique-se de passar `navigation` aqui
  const [companies, setCompanies] = useState([]);

  const loadCompanies = async () => {
    try {
      const storedCompanies = await AsyncStorage.getItem('companies');
      if (storedCompanies) {
        setCompanies(JSON.parse(storedCompanies));
      }
    } catch (error) {
      console.error('Erro ao carregar empresas:', error);
    }
  };

  useEffect(() => {
    loadCompanies();
    const unsubscribe = navigation.addListener('focus', () => {
      loadCompanies(); // Atualizar a lista quando a tela ganhar foco
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.companyItem}>
      <Text style={styles.companyText}>{item.name} - {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Nenhuma empresa cadastrada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  companyItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  companyText: {
    fontSize: 18,
  },
});

export default ViewCompaniesScreen;
