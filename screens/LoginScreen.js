import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { auth } from '../firebaseConfig'; // Importando a configuração do Firebase
import { signInWithEmailAndPassword } from "firebase/auth"; // Importando a função para login

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(''); // Estado para o email
  const [password, setPassword] = useState(''); // Estado para a senha
  const [loading, setLoading] = useState(false); // Estado para carregar

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true); // Inicia o carregamento

    try {
      // Tentativa de login
      await signInWithEmailAndPassword(auth, email, password); 
      navigation.replace('Home'); // Redireciona para a tela inicial após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      let errorMessage;

      // Tratamento de erros
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Usuário não encontrado. Verifique seu e-mail.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta. Tente novamente.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'E-mail inválido. Verifique e tente novamente.';
          break;
        default:
          errorMessage = 'Ocorreu um erro ao tentar fazer login. Tente novamente.';
      }

      Alert.alert('Erro', errorMessage); // Exibe o erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CHURNANALYTICS</Text>
      <Image source={require('../assets/woman.png')} style={styles.image} />
      
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor="#B0E0E6"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        placeholderTextColor="#B0E0E6"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Ainda não tem uma conta? Inscreva-se!</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#6495ED',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    marginTop: 15,
  },
  signupText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
