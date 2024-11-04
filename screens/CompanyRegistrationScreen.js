import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'; // Importando o Picker corretamente

const CompanyRegistrationScreen = ({ navigation }) => {
  const [companyName, setCompanyName] = useState('');
  const [status, setStatus] = useState('Ativo');

  const handleRegister = async () => {
    if (!companyName) {
      alert('Por favor, insira o nome da empresa.');
      return;
    }

    // Criar objeto da empresa
    const newCompany = { name: companyName, status };

    try {
      // Obter empresas atuais
      const existingCompanies = await AsyncStorage.getItem('companies');
      const companies = existingCompanies ? JSON.parse(existingCompanies) : [];

      // Adicionar nova empresa
      companies.push(newCompany);
      await AsyncStorage.setItem('companies', JSON.stringify(companies));

      alert('Empresa cadastrada com sucesso!');
      setCompanyName(''); // Limpar o campo de texto
      setStatus('Ativo'); // Resetar o status
      navigation.navigate('ViewCompaniesScreen'); // Navegar para a tela de visualização de empresas
    } catch (error) {
      console.error('Erro ao cadastrar empresa:', error);
      alert('Ocorreu um erro ao cadastrar a empresa.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastrar Empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da empresa"
        value={companyName}
        onChangeText={setCompanyName}
      />
      <Text style={styles.label}>Status:</Text>
      <Picker
        selectedValue={status}
        style={styles.picker}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Ativo" value="Ativo" />
        <Picker.Item label="Desativo" value="Desativo" />
      </Picker>
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default CompanyRegistrationScreen;
